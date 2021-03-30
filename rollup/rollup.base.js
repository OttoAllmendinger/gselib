import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export const buildPath = 'dist';

const globals = {
  '@imports/Gio-2.0': 'imports.gi.Gio',
  '@imports/Gdk-3.0': 'imports.gi.Gdk',
  '@imports/Gdk-4.0': 'imports.gi.Gdk',
  '@imports/Gtk-3.0': 'imports.gi.Gtk',
  '@imports/Gtk-4.0': 'imports.gi.Gtk',
  '@imports/GdkPixbuf-2.0': 'imports.gi.GdkPixbuf',
  '@imports/GObject-2.0': 'imports.gi.GObject',
  '@imports/GLib-2.0': 'imports.gi.GLib',
  '@imports/St-1.0': 'imports.gi.St',
  '@imports/Shell-0.1': 'imports.gi.Shell',
  '@imports/Meta-7': 'imports.gi.Meta',
  '@imports/Wnck-3.0': 'imports.gi.Wnck',
  '@imports/Cogl-7': 'imports.gi.Cogl',
  '@imports/Clutter-7': 'imports.gi.Clutter',
  '@imports/Soup-2.4': 'imports.gi.Soup',
};

const external = Object.keys(globals);

const banner = [].join('\n');

export const prefsFooter = `
var init = prefs.init;
var buildPrefsWidget = prefs.buildPrefsWidget;
`;

const ts = typescript({ tsconfig: './tsconfig.json' });

export function target({ input, output, plugins = [] }) {
  return {
    input,
    output: {
      format: 'iife',
      banner,
      globals,
      ...output,
    },
    external,
    plugins: [
      commonjs(),
      json(),
      nodeResolve({
        preferBuiltins: false,
      }),
      ts,
      ...plugins,
    ],
  };
}
