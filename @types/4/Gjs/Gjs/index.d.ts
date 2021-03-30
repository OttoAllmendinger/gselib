import * as Gjs from './Gjs';
import * as Gtk40 from './Gtk-4.0';
import * as Gdk40 from './Gdk-4.0';
import * as Gsk40 from './Gsk-4.0';
import * as Cairo10 from './cairo-1.0';
import * as Pango10 from './Pango-1.0';
import * as Graphene10 from './Graphene-1.0';
import * as Gio20 from './Gio-2.0';
import * as GdkPixbuf20 from './GdkPixbuf-2.0';
import * as HarfBuzz00 from './HarfBuzz-0.0';
import * as GObject20 from './GObject-2.0';
import * as GModule20 from './GModule-2.0';
import * as GLib20 from './GLib-2.0';

declare global {
  function print(...args: any[]): void;
  function printerr(...args: any[]): void;
  function log(message?: string): void;
  function logError(exception: any, message?: string): void;
  const ARGV: string[];
  const imports: typeof Gjs & {
    [key: string]: any;
    gi: {
      Gtk: typeof Gtk40;
      Gdk: typeof Gdk40;
      Gsk: typeof Gsk40;
      cairo: typeof Cairo10;
      Pango: typeof Pango10;
      Graphene: typeof Graphene10;
      Gio: typeof Gio20;
      GdkPixbuf: typeof GdkPixbuf20;
      HarfBuzz: typeof HarfBuzz00;
      GObject: typeof GObject20;
      GModule: typeof GModule20;
      GLib: typeof GLib20;
    };
    versions: {
      Gtk: string;
      Gdk: string;
      Gsk: string;
      cairo: string;
      Pango: string;
      Graphene: string;
      Gio: string;
      GdkPixbuf: string;
      HarfBuzz: string;
      GObject: string;
      GModule: string;
      GLib: string;
    };
    searchPath: string[];
  };
}

export { imports };
