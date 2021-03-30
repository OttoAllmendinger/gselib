ts-for-gjs/node_modules:
	cd ts-for-gjs && npm install > /dev/null

TS_FOR_GJS=./ts-for-gjs/bin/run generate \
			--pretty \
			--ignoreConflicts
TS_FOR_GJS_ARGS=\
		--environments=gjs \
		--girDirectories=/usr/share/gir-1.0 \
		--girDirectories=/usr/lib/mutter-7 \
		--girDirectories=/usr/share/gnome-shell

.PHONY: @types/
@types/: ts-for-gjs/node_modules
	rm -rf @types/
	$(TS_FOR_GJS) \
		Gtk-3.0 Gtk-3.0 GObject-2.0 Soup-2.4 St-1.0 Shell-0.1 \
		--ignore Gtk-4.0 \
		--outdir @types/3 \
		$(TS_FOR_GJS_ARGS)
	$(TS_FOR_GJS) \
		Gtk-4.0 Gdk-4.0 \
		--ignore Gtk-3.0 \
		--outdir @types/4 \
		$(TS_FOR_GJS_ARGS)
