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
import * as Meta8 from "./Meta-8";
import * as Clutter8 from "./Clutter-8";
import * as Cally8 from "./Cally-8";
import * as Xfixes40 from "./xfixes-4.0";
import * as GDesktopEnums30 from "./GDesktopEnums-3.0";
import * as CoglPango8 from "./CoglPango-8";
import * as Cogl8 from "./Cogl-8";
import * as Json10 from "./Json-1.0";
import * as GL10 from "./GL-1.0";
import * as PangoCairo10 from "./PangoCairo-1.0";
import * as Graphene10 from "./Graphene-1.0";
import * as PolkitAgent10 from "./PolkitAgent-1.0";
import * as NM10 from "./NM-1.0";
import * as Gvc10 from "./Gvc-1.0";
import * as Gcr3 from "./Gcr-3";
import * as ClutterX118 from "./ClutterX11-8";
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
          Meta: typeof Meta8
          Clutter: typeof Clutter8
          Cally: typeof Cally8
          xfixes: typeof Xfixes40
          GDesktopEnums: typeof GDesktopEnums30
          CoglPango: typeof CoglPango8
          Cogl: typeof Cogl8
          Json: typeof Json10
          GL: typeof GL10
          PangoCairo: typeof PangoCairo10
          Graphene: typeof Graphene10
          PolkitAgent: typeof PolkitAgent10
          NM: typeof NM10
          Gvc: typeof Gvc10
          Gcr: typeof Gcr3
          ClutterX11: typeof ClutterX118
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
            Meta: string
            Clutter: string
            Cally: string
            xfixes: string
            GDesktopEnums: string
            CoglPango: string
            Cogl: string
            Json: string
            GL: string
            PangoCairo: string
            Graphene: string
            PolkitAgent: string
            NM: string
            Gvc: string
            Gcr: string
            ClutterX11: string
            Polkit: string
            Gck: string
        }
        searchPath: string[];
    }
}

export { imports }
