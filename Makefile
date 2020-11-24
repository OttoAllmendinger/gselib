ts-for-gjs/node_modules:
	cd ts-for-gjs && npm install > /dev/null

.PHONY: @types/
@types/: ts-for-gjs/node_modules
	rm -rf @types/
	./ts-for-gjs/bin/run generate --configName=./ts-for-girrc.js > /dev/null 2>&1
