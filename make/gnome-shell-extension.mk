ZIPFILE = $(NAME).zip

GIT_VERSION := $(shell git describe --dirty --always)

SOURCE_JAVASCRIPT=$(wildcard dist/*js)

ROLLUP=NODE_OPTIONS=--max_old_space_size=4096 yarn run rollup

MO_FILES := $(foreach lang,$(LANGUAGES),res/locale/$(lang)/LC_MESSAGES/$(NAME).mo)
PO_FILES := $(foreach lang,$(LANGUAGES),res/locale/$(lang)/$(lang).po)
PO_FILES_UNFMT := $(foreach lang,$(LANGUAGES),res/locale/$(lang)/LC_MESSAGES/unfmt)

EXTENSION_PATH_RELATIVE=.local/share/gnome-shell/extensions/$(UUID)
EXTENSION_PATH = $(HOME)/$(EXTENSION_PATH_RELATIVE)

VAGRANT_DIR ?= gselib/vagrant

all: archive

build: node_modules @types/ dist/ archive

node_modules:
	yarn install

.PHONY: archive
archive: $(ZIPFILE)

$(ZIPFILE): res/metadata.json schemas
	-rm $(ZIPFILE)
	cd dist/ && zip ../$(ZIPFILE) *.js
	cd res && zip ../$(ZIPFILE) \
	    * \
	    schemas/* \
        $(patsubst res/%,%,$(MO_FILES))

.PHONY: @types/
@types/: ts-for-gjs/node_modules
	rm -rf @types/
	./ts-for-gjs/bin/run generate --configName=./.ts-for-girrc.js > /dev/null 2>&1

ts-for-gjs/node_modules:
	cd ts-for-gjs && npm install > /dev/null

.PHONY: clean_src
clean_src:
	git clean -fx src/

.PHONY: check
check:
	yarn run tsc --outDir build/

.PHONY: dist/
dist/:
	git clean -fx src/
	$(ROLLUP) -c

.PHONY: watch
watch:
	$(ROLLUP) -c --watch

res/metadata.json: FORCE
	sed 's/_gitversion_/$(GIT_VERSION)/' src/metadata.json > $@

.PHONY: schemas
schemas: res/schemas/gschemas.compiled

.PHONY: lint
lint:
	yarn run eslint ./src --quiet

.PHONY: package
package:
	make lint
	make archive

.PHONY: uninstall
uninstall:
	rm -rf $(EXTENSION_PATH)

.PHONY: install
install: archive
	rm -rf $(EXTENSION_PATH)
	mkdir -p $(EXTENSION_PATH)
	unzip $(ZIPFILE) -d $(EXTENSION_PATH)


res/schemas/gschemas.compiled: res/schemas/$(SCHEMA)
	glib-compile-schemas res/schemas/


.PHONY: translations
translations: $(MO_FILES)

res/locale/%/LC_MESSAGES/$(NAME).mo: res/locale/%/*.po $(PO_FILES)
	@msgfmt $(wildcard $<) --output-file=$@

res/locale/%.po: res/locale/$(NAME).pot
	@# NOTE sometimes --no-fuzzy-matching is better
	@if [ -e $@ ]; then \
		echo "merging translations for $@"; \
		msgmerge --backup=none --update $@ $^; \
	else \
		echo "initializing new translation..."; \
		msginit \
		  --no-translator \
		  --input=$^ \
		  --output-file=$@ \
		  --locale=%.utf8; \
	fi

res/locale/$(NAME).pot: FORCE
	yarn run ts-node gselib/tools/gettext.ts $@

.PHONY: unfmt
unfmt: $(PO_FILES_UNFMT)

res/locale/%/LC_MESSAGES/unfmt: res/locale/%/LC_MESSAGES/$(NAME).mo
	msgunfmt $< --output-file=$@

.PHONY: prefs
prefs: install
	gnome-shell-extension-prefs $(UUID)

.PHONY: restart
restart:
	gjs gselib/tools/restartShell.js


VM_SSHCONFIG_PATH=/tmp/vagrant-ssh-config.$(GSELIB_VM)
VM_SSH=ssh -F$(VM_SSHCONFIG_PATH) default

$(VM_SSHCONFIG_PATH):
ifeq ($(GSELIB_VM),)
	$(error please specify VM name in GSELIB_VM)
endif
	cd $(VAGRANT_DIR)/$(GSELIB_VM) && vagrant ssh-config >> $@

.PHONY: vm_ssh
vm_ssh: $(VM_SSHCONFIG_PATH)
	$(VM_SSH)

.PHONY: vm_install
vm_install: $(VM_SSHCONFIG_PATH) $(ZIPFILE)
	scp -F$(VM_SSHCONFIG_PATH) $(ZIPFILE) default:$(ZIPFILE)
	ssh -F$(VM_SSHCONFIG_PATH) default '\
		rm -rf $$HOME/$(EXTENSION_PATH_RELATIVE) && \
		mkdir -p $$HOME/$(EXTENSION_PATH_RELATIVE) && \
		unzip $(ZIPFILE) -d $(EXTENSION_PATH_RELATIVE) \
	'

.PHONY: vm_log_gs
vm_gs_logs: $(VM_SSHCONFIG_PATH)
	$(VM_SSH) 'journalctl -f /usr/bin/gnome-shell'

.PHONY: vm_gjs_logs
vm_gjs_logs: $(VM_SSHCONFIG_PATH)
	$(VM_SSH) 'journalctl -f /usr/bin/gjs'

.PHONY: vm_gs_logout
vm_gs_logout:
	$(VM_SSH) 'gnome-session-quit --force'

.PHONY: vm_gs_restart
vm_gs_restart: $(VM_SSHCONFIG_PATH)
	$(VM_SSH) 'DISPLAY=$(VM_DISPLAY) gnome-shell --replace'

.PHONY: vm_gdm_restart
vm_gdm_restart: $(VM_SSHCONFIG_PATH)
	$(VM_SSH) 'sudo systemctl restart gdm'

.PHONY: vm_gs_version
vm_gs_version: $(VM_SSHCONFIG_PATH)
	$(VM_SSH) 'gnome-shell --version'

.PHONY: vm_ssh_exec
vm_ssh_exec:
	$(VM_SSH) $(VM_SSH_COMMAND)

FORCE:
