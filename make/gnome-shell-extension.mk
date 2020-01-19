.PHONY: all schemas zipfile lint translations

ZIPFILE = $(NAME).zip

GIT_VERSION := $(shell git describe --dirty --always)

SOURCE_JAVASCRIPT=$(wildcard src/*js)
SOURCE_JAVASCRIPT_VENDOR=$(wildcard src/vendor/*js)

SOURCE = $(SOURCE_JAVASCRIPT) \
		 $(SOURCE_JAVASCRIPT_VENDOR) \
		 src/stylesheet.css \
		 src/metadata.json \
		 $(wildcard src/schemas/*)

MO_FILES := $(foreach lang,$(LANGUAGES),src/locale/$(lang)/LC_MESSAGES/$(NAME).mo)
PO_FILES := $(foreach lang,$(LANGUAGES),src/locale/$(lang)/$(lang).po)
PO_FILES_UNFMT := $(foreach lang,$(LANGUAGES),src/locale/$(lang)/LC_MESSAGES/unfmt)

EXTENSION_PATH = $(HOME)/.local/share/gnome-shell/extensions/$(UUID)


all: archive

archive: $(ZIPFILE)

$(ZIPFILE): $(SOURCE) schemas translations gselib
	-rm $(ZIPFILE)
	cd src && zip -r ../$(ZIPFILE) \
	   $(patsubst src/%,%,$(SOURCE)) \
	   $(patsubst src/%,%,$(MO_FILES))

gselib: FORCE
ifeq ($(SKIP_GSELIB),1)
	echo "skipping gselib update"
else
	git submodule update --init gselib
endif


src/metadata.json: FORCE
	sed 's/_gitversion_/$(GIT_VERSION)/' src/metadata.json.in > src/metadata.json

schemas: src/schemas/gschemas.compiled

lint:
	eslint src/*js

package:
	make lint
	make archive

uninstall:
	rm -rf $(EXTENSION_PATH)

install: archive
	rm -rf $(EXTENSION_PATH)
	mkdir -p $(EXTENSION_PATH)
	unzip $(ZIPFILE) -d $(EXTENSION_PATH)

src/schemas/gschemas.compiled: src/schemas/$(SCHEMA)
	glib-compile-schemas src/schemas/


translations: $(MO_FILES)


src/locale/%/LC_MESSAGES/$(NAME).mo: src/locale/%/*.po $(PO_FILES)
	@msgfmt $(wildcard $<) --output-file=$@

src/locale/%.po: src/locale/$(NAME).pot
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

src/locale/$(NAME).pot: FORCE
	xgettext --from-code=UTF-8 -k_ -kN_ -o $@ $(sort $(SOURCE_JAVASCRIPT))
	sed -i '/^"POT-Creation-Date/d' $@

unfmt: $(PO_FILES_UNFMT)

src/locale/%/LC_MESSAGES/unfmt: src/locale/%/LC_MESSAGES/$(NAME).mo
	msgunfmt $< --output-file=$@


prefs: install
	gnome-shell-extension-prefs $(UUID)

restart:
	gjs gselib/tools/restartShell.js

FORCE:
