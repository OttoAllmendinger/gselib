import * as Gjs from "./Gjs";
import * as Gtk30 from "./Gtk-3.0";
import * as GObject20 from "./GObject-2.0";
import * as Soup24 from "./Soup-2.4";
import * as St10 from "./St-1.0";
import * as Shell01 from "./Shell-0.1";
import * as Xlib20 from "./xlib-2.0";
import * as Gdk30 from "./Gdk-3.0";
import * as Atk10 from "./Atk-1.0";
import * as Cairo10 from "./cairo-1.0";
import * as Pango10 from "./Pango-1.0";
import * as Gio20 from "./Gio-2.0";
import * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import * as GLib20 from "./GLib-2.0";
import * as HarfBuzz00 from "./HarfBuzz-0.0";
import * as GModule20 from "./GModule-2.0";
import * as PolkitAgent10 from "./PolkitAgent-1.0";
import * as NM10 from "./NM-1.0";
import * as Gvc10 from "./Gvc-1.0";
import * as Gcr3 from "./Gcr-3";
import * as Polkit10 from "./Polkit-1.0";
import * as Gck1 from "./Gck-1";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
        [key: string]: any
        gi: {
          Gtk: typeof Gtk30
          GObject: typeof GObject20
          Soup: typeof Soup24
          St: typeof St10
          Shell: typeof Shell01
          xlib: typeof Xlib20
          Gdk: typeof Gdk30
          Atk: typeof Atk10
          cairo: typeof Cairo10
          Pango: typeof Pango10
          Gio: typeof Gio20
          GdkPixbuf: typeof GdkPixbuf20
          GLib: typeof GLib20
          HarfBuzz: typeof HarfBuzz00
          GModule: typeof GModule20
          PolkitAgent: typeof PolkitAgent10
          NM: typeof NM10
          Gvc: typeof Gvc10
          Gcr: typeof Gcr3
          Polkit: typeof Polkit10
          Gck: typeof Gck1
        }
        versions: {
            Gtk: string
            GObject: string
            Soup: string
            St: string
            Shell: string
            xlib: string
            Gdk: string
            Atk: string
            cairo: string
            Pango: string
            Gio: string
            GdkPixbuf: string
            GLib: string
            HarfBuzz: string
            GModule: string
            PolkitAgent: string
            NM: string
            Gvc: string
            Gcr: string
            Polkit: string
            Gck: string
        }
        searchPath: string[];
    }
}

export { imports }
