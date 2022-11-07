import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export const buildPath = 'dist';

const globals = {
  '@gi-types/gio2': 'imports.gi.Gio',
  '@gi-types/gdk3': 'imports.gi.Gdk',
  '@gi-types/gdk4': 'imports.gi.Gdk',
  '@gi-types/gtk3': 'imports.gi.Gtk',
  '@gi-types/gtk4': 'imports.gi.Gtk',
  '@gi-types/gdkpixbuf2': 'imports.gi.GdkPixbuf',
  '@gi-types/gobject2': 'imports.gi.GObject',
  '@gi-types/glib2': 'imports.gi.GLib',
  '@gi-types/st1': 'imports.gi.St',
  '@gi-types/shell0': 'imports.gi.Shell',
  '@gi-types/meta8': 'imports.gi.Meta',
  '@gi-types/cogl8': 'imports.gi.Cogl',
  '@gi-types/clutter10': 'imports.gi.Clutter',
  '@gi-types/soup2': 'imports.gi.Soup',
  '@gi-types/soup3': 'imports.gi.Soup',
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
