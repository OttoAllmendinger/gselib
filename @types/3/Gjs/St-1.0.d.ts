/**
 * St-1.0
 */

import * as Gjs from './Gjs';
// WARN: Dependency not found: 'Meta-8'
import * as Gtk from './Gtk-3.0';
import * as xlib from './xlib-2.0';
import * as Gdk from './Gdk-3.0';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';
import * as Atk from './Atk-1.0';
// WARN: Dependency not found: 'Clutter-8'
// WARN: Dependency not found: 'Cally-8'

export enum Align {
    START,
    MIDDLE,
    END,
}
export enum BackgroundSize {
    AUTO,
    CONTAIN,
    COVER,
    FIXED,
}
export enum ClipboardType {
    PRIMARY,
    CLIPBOARD,
}
export enum Corner {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMRIGHT,
    BOTTOMLEFT,
}
export enum DirectionType {
    TAB_FORWARD,
    TAB_BACKWARD,
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum GradientType {
    NONE,
    VERTICAL,
    HORIZONTAL,
    RADIAL,
}
export enum IconStyle {
    REQUESTED,
    REGULAR,
    SYMBOLIC,
}
export enum PolicyType {
    ALWAYS,
    AUTOMATIC,
    NEVER,
    EXTERNAL,
}
export enum Side {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT,
}
export enum TextAlign {
    LEFT,
    CENTER,
    RIGHT,
    JUSTIFY,
}
export enum TextureCachePolicy {
    NONE,
    FOREVER,
}
export enum ButtonMask {
    ONE,
    TWO,
    THREE,
}
export enum TextDecoration {
    UNDERLINE,
    OVERLINE,
    LINE_THROUGH,
    BLINK,
}
export function describe_actor(actor: any): string
export interface ClipboardCallbackFunc {
    (clipboard: Clipboard, text: string): void
}
export interface ClipboardContentCallbackFunc {
    (clipboard: Clipboard, bytes: GLib.Bytes): void
}
export interface EntryCursorFunc {
    (entry: Entry, use_ibeam: boolean, data?: object | null): void
}
export class Scrollable {
    /* Properties of St.Scrollable */
    hadjustment: Adjustment
    vadjustment: Adjustment
    /* Methods of St.Scrollable */
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    /* Virtual methods of St.Scrollable */
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    static name: string
}
export interface Adjustment_ConstructProps extends GObject.Object_ConstructProps {
    actor?: any
    lower?: number
    page_increment?: number
    page_size?: number
    step_increment?: number
    upper?: number
    value?: number
}
export class Adjustment {
    /* Properties of St.Adjustment */
    actor: any
    lower: number
    page_increment: number
    page_size: number
    step_increment: number
    upper: number
    value: number
    /* Fields of St.Adjustment */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.Adjustment */
    add_transition(name: string, transition: any): void
    adjust_for_scroll_event(delta: number): void
    clamp_page(lower: number, upper: number): void
    get_transition(name: string): any
    get_value(): number
    get_values(): [ /* value */ number | null, /* lower */ number | null, /* upper */ number | null, /* step_increment */ number | null, /* page_increment */ number | null, /* page_size */ number | null ]
    remove_transition(name: string): void
    set_value(value: number): void
    set_values(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of St.Adjustment */
    vfunc_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of St.Adjustment */
    connect(sigName: "changed", callback: (($obj: Adjustment) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Adjustment) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actor", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actor", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lower", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-size", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-size", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::step-increment", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upper", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Adjustment, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Adjustment_ConstructProps)
    _init (config?: Adjustment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(actor: any, value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): Adjustment
    static $gtype: GObject.Type
}
export class Bin {
    /* Properties of St.Bin */
    child: any
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Bin */
    parent_instance: Widget
    /* Methods of St.Bin */
    get_child(): any
    set_child(child?: any): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Bin) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Bin) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): Bin
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Bin
}
export interface BorderImage_ConstructProps extends GObject.Object_ConstructProps {
}
export class BorderImage {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.BorderImage */
    equal(other: BorderImage): boolean
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void
    get_file(): Gio.File
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BorderImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BorderImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BorderImage_ConstructProps)
    _init (config?: BorderImage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File, border_top: number, border_right: number, border_bottom: number, border_left: number, scale_factor: number): BorderImage
    static $gtype: GObject.Type
}
export class BoxLayout {
    /* Properties of St.BoxLayout */
    pack_start: boolean
    vertical: boolean
    /* Properties of St.Viewport */
    clip_to_view: boolean
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Properties of St.Scrollable */
    hadjustment: Adjustment
    vadjustment: Adjustment
    /* Fields of St.Viewport */
    parent_instance: Widget
    /* Methods of St.BoxLayout */
    get_pack_start(): boolean
    get_vertical(): boolean
    set_pack_start(pack_start: boolean): void
    set_vertical(vertical: boolean): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Methods of St.Scrollable */
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    /* Virtual methods of St.Viewport */
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: BoxLayout) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: BoxLayout) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: BoxLayout) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: BoxLayout) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): BoxLayout
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BoxLayout
}
export class Button {
    /* Properties of St.Button */
    button_mask: ButtonMask
    checked: boolean
    label: string
    readonly pressed: boolean
    toggle_mode: boolean
    /* Properties of St.Bin */
    child: any
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Button */
    parent_instance: Bin
    /* Methods of St.Button */
    fake_release(): void
    get_button_mask(): ButtonMask
    get_checked(): boolean
    get_label(): string
    get_toggle_mode(): boolean
    set_button_mask(mask: ButtonMask): void
    set_checked(checked: boolean): void
    set_label(text?: string | null): void
    set_toggle_mode(toggle: boolean): void
    /* Methods of St.Bin */
    get_child(): any
    set_child(child?: any): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Button */
    vfunc_clicked(clicked_button: number): void
    vfunc_transition(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Button */
    connect(sigName: "clicked", callback: (($obj: Button, clicked_button: number) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: Button, clicked_button: number) => void)): number
    emit(sigName: "clicked", clicked_button: number): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Button) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Button) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Button) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Button) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): Button
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Button
    static new_with_label(text: string): Button
}
export interface Clipboard_ConstructProps extends GObject.Object_ConstructProps {
}
export class Clipboard {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.Clipboard */
    get_content(type: ClipboardType, mimetype: string, callback: ClipboardContentCallbackFunc): void
    get_mimetypes(type: ClipboardType): string[]
    get_text(type: ClipboardType, callback: ClipboardCallbackFunc): void
    set_content(type: ClipboardType, mimetype: string, bytes: GLib.Bytes): void
    set_text(type: ClipboardType, text: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clipboard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clipboard_ConstructProps)
    _init (config?: Clipboard_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Clipboard
    static $gtype: GObject.Type
}
export class DrawingArea {
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.DrawingArea */
    parent_instance: Widget
    /* Methods of St.DrawingArea */
    get_context(): cairo.Context
    get_surface_size(): [ /* width */ number | null, /* height */ number | null ]
    queue_repaint(): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.DrawingArea */
    vfunc_repaint(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.DrawingArea */
    connect(sigName: "repaint", callback: (($obj: DrawingArea) => void)): number
    connect_after(sigName: "repaint", callback: (($obj: DrawingArea) => void)): number
    emit(sigName: "repaint"): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: DrawingArea) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: DrawingArea) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: DrawingArea) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: DrawingArea) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class Entry {
    /* Properties of St.Entry */
    readonly clutter_text: any
    hint_actor: any
    hint_text: string
    input_hints: any
    input_purpose: any
    primary_icon: any
    secondary_icon: any
    text: string
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Entry */
    parent_instance: Widget
    /* Methods of St.Entry */
    get_clutter_text(): any
    get_hint_actor(): any
    get_hint_text(): string | null
    get_input_hints(): any
    get_input_purpose(): any
    get_primary_icon(): any
    get_secondary_icon(): any
    get_text(): string
    set_hint_actor(hint_actor?: any): void
    set_hint_text(text?: string | null): void
    set_input_hints(hints: any): void
    set_input_purpose(purpose: any): void
    set_primary_icon(icon?: any): void
    set_secondary_icon(icon?: any): void
    set_text(text?: string | null): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Entry */
    vfunc_primary_icon_clicked(): void
    vfunc_secondary_icon_clicked(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Entry */
    connect(sigName: "primary-icon-clicked", callback: (($obj: Entry) => void)): number
    connect_after(sigName: "primary-icon-clicked", callback: (($obj: Entry) => void)): number
    emit(sigName: "primary-icon-clicked"): void
    connect(sigName: "secondary-icon-clicked", callback: (($obj: Entry) => void)): number
    connect_after(sigName: "secondary-icon-clicked", callback: (($obj: Entry) => void)): number
    emit(sigName: "secondary-icon-clicked"): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Entry) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Entry) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Entry) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Entry) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(text?: string | null): Entry
    constructor(text?: string | null)
    /* Static methods and pseudo-constructors */
    static new(text?: string | null): Entry
}
export interface FocusManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class FocusManager {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.FocusManager */
    add_group(root: Widget): void
    get_group(widget: Widget): Widget
    navigate_from_event(event: any): boolean
    remove_group(root: Widget): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FocusManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FocusManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FocusManager_ConstructProps)
    _init (config?: FocusManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_for_stage(stage: any): FocusManager
    static $gtype: GObject.Type
}
export class GenericAccessible {
    /* Fields of St.GenericAccessible */
    parent: WidgetAccessible
    priv: GenericAccessiblePrivate
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_layer(): Atk.Layer
    get_mdi_zorder(): number
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: Atk.ScrollType): boolean
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atk.Value */
    get_current_value(): /* value */ any
    get_increment(): number
    get_maximum_value(): /* value */ any
    get_minimum_increment(): /* value */ any
    get_minimum_value(): /* value */ any
    get_range(): Atk.Range | null
    get_sub_ranges(): Atk.Range[]
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of St.GenericAccessible */
    vfunc_get_current_value(): /* value */ any
    vfunc_get_increment(): number
    vfunc_get_maximum_value(): /* value */ any
    vfunc_get_minimum_increment(): /* value */ any
    vfunc_get_minimum_value(): /* value */ any
    vfunc_get_range(): Atk.Range | null
    vfunc_get_sub_ranges(): Atk.Range[]
    vfunc_get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    vfunc_set_current_value(value: any): boolean
    vfunc_set_value(new_value: number): void
    /* Virtual methods of St.WidgetAccessible */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    vfunc_set_description(i: number, desc: string): boolean
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Signals of St.GenericAccessible */
    connect(sigName: "get-current-value", callback: (($obj: GenericAccessible) => number)): number
    connect_after(sigName: "get-current-value", callback: (($obj: GenericAccessible) => number)): number
    emit(sigName: "get-current-value"): void
    connect(sigName: "get-maximum-value", callback: (($obj: GenericAccessible) => number)): number
    connect_after(sigName: "get-maximum-value", callback: (($obj: GenericAccessible) => number)): number
    emit(sigName: "get-maximum-value"): void
    connect(sigName: "get-minimum-increment", callback: (($obj: GenericAccessible) => number)): number
    connect_after(sigName: "get-minimum-increment", callback: (($obj: GenericAccessible) => number)): number
    emit(sigName: "get-minimum-increment"): void
    connect(sigName: "get-minimum-value", callback: (($obj: GenericAccessible) => number)): number
    connect_after(sigName: "get-minimum-value", callback: (($obj: GenericAccessible) => number)): number
    emit(sigName: "get-minimum-value"): void
    connect(sigName: "set-current-value", callback: (($obj: GenericAccessible, new_value: number) => void)): number
    connect_after(sigName: "set-current-value", callback: (($obj: GenericAccessible, new_value: number) => void)): number
    emit(sigName: "set-current-value", new_value: number): void
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: GenericAccessible, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: GenericAccessible, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    /* Signals of Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: GenericAccessible, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: GenericAccessible, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_actor(actor: any): GenericAccessible
}
export class Icon {
    /* Properties of St.Icon */
    fallback_gicon: Gio.Icon
    fallback_icon_name: string
    gicon: Gio.Icon
    icon_name: string
    icon_size: number
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Widget */
    parent_instance: any
    /* Methods of St.Icon */
    get_fallback_gicon(): Gio.Icon
    get_fallback_icon_name(): string
    get_gicon(): Gio.Icon | null
    get_icon_name(): string | null
    get_icon_size(): number
    set_fallback_gicon(fallback_gicon?: Gio.Icon | null): void
    set_fallback_icon_name(fallback_icon_name?: string | null): void
    set_gicon(gicon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_icon_size(size: number): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Icon) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Icon) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Icon) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Icon) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): Icon
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Icon
}
export class ImageContent {
    /* Methods of Gio.Icon */
    equal(icon2?: Gio.Icon | null): boolean
    serialize(): GLib.Variant | null
    to_string(): string | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of St.ImageContent */
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant | null
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    static name: string
    /* Static methods and pseudo-constructors */
    static new_with_preferred_size(width: number, height: number): any
    static deserialize(value: GLib.Variant): Gio.Icon | null
    static hash(icon: object): number
    static new_for_string(str: string): Gio.Icon
}
export class Label {
    /* Properties of St.Label */
    readonly clutter_text: any
    text: string
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Widget */
    parent_instance: any
    /* Methods of St.Label */
    get_clutter_text(): any
    get_text(): string
    set_text(text?: string | null): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Label) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Label) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Label) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Label) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(text?: string | null): Label
    constructor(text?: string | null)
    /* Static methods and pseudo-constructors */
    static new(text?: string | null): Label
}
export class PasswordEntry {
    /* Properties of St.PasswordEntry */
    password_visible: boolean
    show_peek_icon: boolean
    /* Properties of St.Entry */
    readonly clutter_text: any
    hint_actor: any
    hint_text: string
    input_hints: any
    input_purpose: any
    primary_icon: any
    secondary_icon: any
    text: string
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Entry */
    parent_instance: Widget
    /* Methods of St.PasswordEntry */
    get_password_visible(): boolean
    get_show_peek_icon(): boolean
    set_password_visible(value: boolean): void
    set_show_peek_icon(value: boolean): void
    /* Methods of St.Entry */
    get_clutter_text(): any
    get_hint_actor(): any
    get_hint_text(): string | null
    get_input_hints(): any
    get_input_purpose(): any
    get_primary_icon(): any
    get_secondary_icon(): any
    get_text(): string
    set_hint_actor(hint_actor?: any): void
    set_hint_text(text?: string | null): void
    set_input_hints(hints: any): void
    set_input_purpose(purpose: any): void
    set_primary_icon(icon?: any): void
    set_secondary_icon(icon?: any): void
    set_text(text?: string | null): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Entry */
    vfunc_primary_icon_clicked(): void
    vfunc_secondary_icon_clicked(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Entry */
    connect(sigName: "primary-icon-clicked", callback: (($obj: PasswordEntry) => void)): number
    connect_after(sigName: "primary-icon-clicked", callback: (($obj: PasswordEntry) => void)): number
    emit(sigName: "primary-icon-clicked"): void
    connect(sigName: "secondary-icon-clicked", callback: (($obj: PasswordEntry) => void)): number
    connect_after(sigName: "secondary-icon-clicked", callback: (($obj: PasswordEntry) => void)): number
    emit(sigName: "secondary-icon-clicked"): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: PasswordEntry) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: PasswordEntry) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: PasswordEntry) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: PasswordEntry) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): PasswordEntry
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PasswordEntry
    static new(text?: string | null): PasswordEntry
}
export class ScrollBar {
    /* Properties of St.ScrollBar */
    adjustment: Adjustment
    vertical: boolean
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.ScrollBar */
    parent_instance: Widget
    /* Methods of St.ScrollBar */
    get_adjustment(): Adjustment
    set_adjustment(adjustment: Adjustment): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.ScrollBar */
    vfunc_scroll_start(): void
    vfunc_scroll_stop(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.ScrollBar */
    connect(sigName: "scroll-start", callback: (($obj: ScrollBar) => void)): number
    connect_after(sigName: "scroll-start", callback: (($obj: ScrollBar) => void)): number
    emit(sigName: "scroll-start"): void
    connect(sigName: "scroll-stop", callback: (($obj: ScrollBar) => void)): number
    connect_after(sigName: "scroll-stop", callback: (($obj: ScrollBar) => void)): number
    emit(sigName: "scroll-stop"): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: ScrollBar) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: ScrollBar) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: ScrollBar) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: ScrollBar) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(adjustment: Adjustment): ScrollBar
    constructor(adjustment: Adjustment)
    /* Static methods and pseudo-constructors */
    static new(adjustment: Adjustment): ScrollBar
}
export class ScrollView {
    /* Properties of St.ScrollView */
    content_padding: any
    enable_mouse_scrolling: boolean
    readonly hscroll: ScrollBar
    hscrollbar_policy: PolicyType
    readonly hscrollbar_visible: boolean
    overlay_scrollbars: boolean
    readonly vscroll: ScrollBar
    vscrollbar_policy: PolicyType
    readonly vscrollbar_visible: boolean
    /* Properties of St.Bin */
    child: any
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Bin */
    parent_instance: Widget
    /* Methods of St.ScrollView */
    get_column_size(): number
    get_hscroll_bar(): any
    get_mouse_scrolling(): boolean
    get_overlay_scrollbars(): boolean
    get_row_size(): number
    get_vscroll_bar(): any
    set_column_size(column_size: number): void
    set_mouse_scrolling(enabled: boolean): void
    set_overlay_scrollbars(enabled: boolean): void
    set_policy(hscroll: PolicyType, vscroll: PolicyType): void
    set_row_size(row_size: number): void
    update_fade_effect(fade_margins: any): void
    /* Methods of St.Bin */
    get_child(): any
    set_child(child?: any): void
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: ScrollView) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: ScrollView) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
    static new(): ScrollView
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ScrollView
}
export class ScrollViewFade {
    /* Properties of St.ScrollViewFade */
    extend_fade_area: boolean
    fade_edges: boolean
    fade_margins: any
    static name: string
    static new(): ScrollViewFade
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ScrollViewFade
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    slow_down_factor?: number
}
export class Settings {
    /* Properties of St.Settings */
    readonly drag_threshold: number
    readonly enable_animations: boolean
    readonly font_name: string
    readonly gtk_icon_theme: string
    readonly gtk_theme: string
    readonly magnifier_active: boolean
    readonly primary_paste: boolean
    slow_down_factor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.Settings */
    inhibit_animations(): void
    uninhibit_animations(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::drag-threshold", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drag-threshold", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-animations", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-animations", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::font-name", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-name", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-icon-theme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-icon-theme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gtk-theme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-theme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::magnifier-active", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnifier-active", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::primary-paste", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-paste", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slow-down-factor", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slow-down-factor", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Settings
    static $gtype: GObject.Type
}
export interface TextureCache_ConstructProps extends GObject.Object_ConstructProps {
}
export class TextureCache {
    /* Fields of St.TextureCache */
    parent: GObject.Object
    priv: TextureCachePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.TextureCache */
    bind_cairo_surface_property(object: GObject.Object, property_name: string): Gio.Icon
    load_cairo_surface_to_gicon(surface: cairo.Surface): Gio.Icon
    load_file_async(file: Gio.File, available_width: number, available_height: number, paint_scale: number, resource_scale: number): any
    load_file_to_cairo_surface(file: Gio.File, paint_scale: number, resource_scale: number): cairo.Surface
    load_gicon(theme_node: ThemeNode | null, icon: Gio.Icon, size: number, paint_scale: number, resource_scale: number): any
    load_sliced_image(file: Gio.File, grid_width: number, grid_height: number, paint_scale: number, resource_scale: number, load_callback?: GLib.Func | null): any
    rescan_icon_theme(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of St.TextureCache */
    connect(sigName: "icon-theme-changed", callback: (($obj: TextureCache) => void)): number
    connect_after(sigName: "icon-theme-changed", callback: (($obj: TextureCache) => void)): number
    emit(sigName: "icon-theme-changed"): void
    connect(sigName: "texture-file-changed", callback: (($obj: TextureCache, file: Gio.File) => void)): number
    connect_after(sigName: "texture-file-changed", callback: (($obj: TextureCache, file: Gio.File) => void)): number
    emit(sigName: "texture-file-changed", file: Gio.File): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextureCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextureCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextureCache_ConstructProps)
    _init (config?: TextureCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): TextureCache
    static $gtype: GObject.Type
}
export interface Theme_ConstructProps extends GObject.Object_ConstructProps {
    application_stylesheet?: Gio.File
    default_stylesheet?: Gio.File
    theme_stylesheet?: Gio.File
}
export class Theme {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.Theme */
    get_custom_stylesheets(): Gio.File[]
    load_stylesheet(file: Gio.File): boolean
    unload_stylesheet(file: Gio.File): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of St.Theme */
    connect(sigName: "custom-stylesheets-changed", callback: (($obj: Theme) => void)): number
    connect_after(sigName: "custom-stylesheets-changed", callback: (($obj: Theme) => void)): number
    emit(sigName: "custom-stylesheets-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Theme, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Theme_ConstructProps)
    _init (config?: Theme_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application_stylesheet: Gio.File, theme_stylesheet: Gio.File, default_stylesheet: Gio.File): Theme
    static $gtype: GObject.Type
}
export interface ThemeContext_ConstructProps extends GObject.Object_ConstructProps {
    scale_factor?: number
}
export class ThemeContext {
    /* Properties of St.ThemeContext */
    scale_factor: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.ThemeContext */
    get_font(): Pango.FontDescription
    get_root_node(): ThemeNode
    get_scale_factor(): number
    get_theme(): Theme
    intern_node(node: ThemeNode): ThemeNode
    set_font(font: Pango.FontDescription): void
    set_theme(theme: Theme): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of St.ThemeContext */
    connect(sigName: "changed", callback: (($obj: ThemeContext) => void)): number
    connect_after(sigName: "changed", callback: (($obj: ThemeContext) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThemeContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThemeContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ThemeContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ThemeContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThemeContext_ConstructProps)
    _init (config?: ThemeContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ThemeContext
    static get_for_stage(stage: any): ThemeContext
    static $gtype: GObject.Type
}
export interface ThemeNode_ConstructProps extends GObject.Object_ConstructProps {
}
export class ThemeNode {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of St.ThemeNode */
    adjust_for_height(for_height: number): /* for_height */ number
    adjust_for_width(for_width: number): /* for_width */ number
    adjust_preferred_height(min_height_p: number | null, natural_height_p: number): [ /* min_height_p */ number | null, /* natural_height_p */ number ]
    adjust_preferred_width(min_width_p: number | null, natural_width_p: number): [ /* min_width_p */ number | null, /* natural_width_p */ number ]
    equal(node_b: ThemeNode): boolean
    geometry_equal(other: ThemeNode): boolean
    get_background_color(): /* color */ any
    get_background_gradient(): [ /* type */ GradientType, /* start */ any, /* end */ any ]
    get_background_image(): Gio.File
    get_background_image_shadow(): Shadow | null
    get_background_paint_box(allocation: any): /* paint_box */ any
    get_border_color(side: Side): /* color */ any
    get_border_image(): BorderImage
    get_border_radius(corner: Corner): number
    get_border_width(side: Side): number
    get_box_shadow(): Shadow | null
    get_color(property_name: string): /* color */ any
    get_content_box(allocation: any): /* content_box */ any
    get_double(property_name: string): number
    get_element_classes(): string[]
    get_element_id(): string
    get_element_type(): GObject.Type
    get_font(): Pango.FontDescription
    get_font_features(): string
    get_foreground_color(): /* color */ any
    get_height(): number
    get_horizontal_padding(): number
    get_icon_colors(): IconColors
    get_icon_style(): IconStyle
    get_length(property_name: string): number
    get_letter_spacing(): number
    get_margin(side: Side): number
    get_max_height(): number
    get_max_width(): number
    get_min_height(): number
    get_min_width(): number
    get_outline_color(): /* color */ any
    get_outline_width(): number
    get_padding(side: Side): number
    get_paint_box(allocation: any): /* paint_box */ any
    get_parent(): ThemeNode | null
    get_pseudo_classes(): string[]
    get_shadow(property_name: string): Shadow | null
    get_text_align(): TextAlign
    get_text_decoration(): TextDecoration
    get_text_shadow(): Shadow | null
    get_theme(): Theme
    get_transition_duration(): number
    get_url(property_name: string): Gio.File | null
    get_vertical_padding(): number
    get_width(): number
    hash(): number
    invalidate_background_image(): void
    invalidate_border_image(): void
    lookup_color(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* color */ any ]
    lookup_double(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* value */ number ]
    lookup_length(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* length */ number ]
    lookup_shadow(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* shadow */ Shadow ]
    lookup_time(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* value */ number ]
    lookup_url(property_name: string, inherit: boolean): [ /* returnType */ boolean, /* file */ Gio.File ]
    paint_equal(other?: ThemeNode | null): boolean
    to_string(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThemeNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThemeNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThemeNode_ConstructProps)
    _init (config?: ThemeNode_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: ThemeContext, parent_node: ThemeNode | null, theme: Theme | null, element_type: GObject.Type, element_id: string | null, element_class: string | null, pseudo_class: string | null, inline_style: string): ThemeNode
    static $gtype: GObject.Type
}
export class Viewport {
    /* Properties of St.Viewport */
    clip_to_view: boolean
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Properties of St.Scrollable */
    hadjustment: Adjustment
    vadjustment: Adjustment
    /* Fields of St.Viewport */
    parent_instance: Widget
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Methods of St.Scrollable */
    get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    /* Virtual methods of St.Viewport */
    vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Viewport) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Viewport) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Viewport) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class Widget {
    /* Properties of St.Widget */
    accessible_name: string
    accessible_role: Atk.Role
    can_focus: boolean
    hover: boolean
    label_actor: any
    pseudo_class: string
    style: string
    style_class: string
    track_hover: boolean
    /* Fields of St.Widget */
    parent_instance: any
    /* Methods of St.Widget */
    add_accessible_state(state: Atk.StateType): void
    add_style_class_name(style_class: string): void
    add_style_pseudo_class(pseudo_class: string): void
    ensure_style(): void
    get_accessible_name(): string
    get_accessible_role(): Atk.Role
    get_can_focus(): boolean
    get_focus_chain(): any[]
    get_hover(): boolean
    get_label_actor(): any
    get_style(): string | null
    get_style_class_name(): string
    get_style_pseudo_class(): string
    get_theme_node(): ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): ThemeNode
    popup_menu(): void
    remove_accessible_state(state: Atk.StateType): void
    remove_style_class_name(style_class: string): void
    remove_style_pseudo_class(pseudo_class: string): void
    set_accessible(accessible: Atk.Object): void
    set_accessible_name(name?: string | null): void
    set_accessible_role(role: Atk.Role): void
    set_can_focus(can_focus: boolean): void
    set_hover(hover: boolean): void
    set_label_actor(label: any): void
    set_style(style?: string | null): void
    set_style_class_name(style_class_list?: string | null): void
    set_style_pseudo_class(pseudo_class_list?: string | null): void
    set_track_hover(track_hover: boolean): void
    style_changed(): void
    sync_hover(): void
    /* Virtual methods of St.Widget */
    vfunc_get_focus_chain(): any[]
    vfunc_navigate_focus(from: any, direction: DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Widget) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Widget) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Widget) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class WidgetAccessible {
    /* Fields of St.WidgetAccessible */
    parent: any
    /* Methods of Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Methods of Atk.Component */
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_layer(): Atk.Layer
    get_mdi_zorder(): number
    get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: Atk.ScrollType): boolean
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of St.WidgetAccessible */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    vfunc_set_description(i: number, desc: string): boolean
    vfunc_bounds_changed(bounds: Atk.Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Atk.Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: Atk.CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: Atk.ScrollType): boolean
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Signals of Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: WidgetAccessible, arg1: Atk.Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: WidgetAccessible, arg1: Atk.Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Atk.Rectangle): void
    static name: string
}
export abstract class AdjustmentClass {
    /* Fields of St.AdjustmentClass */
    changed: (adjustment: Adjustment) => void
    static name: string
}
export abstract class BinClass {
    static name: string
}
export abstract class BorderImageClass {
    /* Fields of St.BorderImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BoxLayoutClass {
    /* Fields of St.BoxLayoutClass */
    parent_class: ViewportClass
    static name: string
}
export class BoxLayoutPrivate {
    static name: string
}
export abstract class ButtonClass {
    /* Fields of St.ButtonClass */
    parent_class: BinClass
    transition: (button: Button) => void
    clicked: (button: Button, clicked_button: number) => void
    static name: string
}
export abstract class ClipboardClass {
    /* Fields of St.ClipboardClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DrawingAreaClass {
    /* Fields of St.DrawingAreaClass */
    parent_class: WidgetClass
    repaint: (area: DrawingArea) => void
    static name: string
}
export abstract class EntryClass {
    /* Fields of St.EntryClass */
    parent_class: WidgetClass
    primary_icon_clicked: (entry: Entry) => void
    secondary_icon_clicked: (entry: Entry) => void
    static name: string
}
export abstract class FocusManagerClass {
    /* Fields of St.FocusManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FocusManagerPrivate {
    static name: string
}
export abstract class GenericAccessibleClass {
    /* Fields of St.GenericAccessibleClass */
    parent_class: WidgetAccessibleClass
    static name: string
}
export class GenericAccessiblePrivate {
    static name: string
}
export abstract class IconClass {
    /* Fields of St.IconClass */
    parent_class: WidgetClass
    static name: string
}
export class IconColors {
    /* Fields of St.IconColors */
    ref_count: number
    foreground: any
    warning: any
    error: any
    success: any
    /* Methods of St.IconColors */
    copy(): IconColors
    equal(other: IconColors): boolean
    ref(): IconColors
    unref(): void
    static name: string
    static new(): IconColors
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IconColors
}
export class IconPrivate {
    static name: string
}
export abstract class ImageContentClass {
    /* Fields of St.ImageContentClass */
    parent_class: any
    static name: string
}
export abstract class LabelClass {
    /* Fields of St.LabelClass */
    parent_class: WidgetClass
    static name: string
}
export class LabelPrivate {
    static name: string
}
export abstract class PasswordEntryClass {
    /* Fields of St.PasswordEntryClass */
    parent_class: EntryClass
    static name: string
}
export abstract class ScrollBarClass {
    /* Fields of St.ScrollBarClass */
    parent_class: WidgetClass
    scroll_start: (bar: ScrollBar) => void
    scroll_stop: (bar: ScrollBar) => void
    static name: string
}
export abstract class ScrollViewClass {
    /* Fields of St.ScrollViewClass */
    parent_class: BinClass
    static name: string
}
export abstract class ScrollViewFadeClass {
    /* Fields of St.ScrollViewFadeClass */
    parent_class: any
    static name: string
}
export class ScrollViewPrivate {
    static name: string
}
export abstract class ScrollableInterface {
    /* Fields of St.ScrollableInterface */
    parent: GObject.TypeInterface
    set_adjustments: (scrollable: Scrollable, hadjustment: Adjustment, vadjustment: Adjustment) => void
    get_adjustments: (scrollable: Scrollable, hadjustment: Adjustment, vadjustment: Adjustment) => void
    static name: string
}
export abstract class SettingsClass {
    /* Fields of St.SettingsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Shadow {
    /* Fields of St.Shadow */
    color: any
    xoffset: number
    yoffset: number
    blur: number
    spread: number
    inset: boolean
    ref_count: number
    /* Methods of St.Shadow */
    equal(other: Shadow): boolean
    get_box(actor_box: any, shadow_box: any): void
    ref(): Shadow
    unref(): void
    static name: string
    static new(color: any, xoffset: number, yoffset: number, blur: number, spread: number, inset: boolean): Shadow
    constructor(color: any, xoffset: number, yoffset: number, blur: number, spread: number, inset: boolean)
    /* Static methods and pseudo-constructors */
    static new(color: any, xoffset: number, yoffset: number, blur: number, spread: number, inset: boolean): Shadow
}
export class ShadowHelper {
    /* Methods of St.ShadowHelper */
    copy(): ShadowHelper
    free(): void
    paint(framebuffer: any, actor_box: any, paint_opacity: number): void
    update(source: any): void
    static name: string
    static new(shadow: Shadow): ShadowHelper
    constructor(shadow: Shadow)
    /* Static methods and pseudo-constructors */
    static new(shadow: Shadow): ShadowHelper
}
export abstract class TextureCacheClass {
    /* Fields of St.TextureCacheClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TextureCachePrivate {
    static name: string
}
export abstract class ThemeClass {
    /* Fields of St.ThemeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ThemeContextClass {
    /* Fields of St.ThemeContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ThemeNodeClass {
    /* Fields of St.ThemeNodeClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ThemeNodePaintState {
    /* Fields of St.ThemeNodePaintState */
    node: ThemeNode
    alloc_width: number
    alloc_height: number
    box_shadow_width: number
    box_shadow_height: number
    resource_scale: number
    box_shadow_pipeline: any
    prerendered_texture: any
    prerendered_pipeline: any
    corner_material: any[]
    /* Methods of St.ThemeNodePaintState */
    copy(other: ThemeNodePaintState): void
    free(): void
    init(): void
    invalidate(): void
    invalidate_for_file(file: Gio.File): boolean
    set_node(node: ThemeNode): void
    static name: string
}
export abstract class ViewportClass {
    /* Fields of St.ViewportClass */
    parent_class: WidgetClass
    static name: string
}
export abstract class WidgetAccessibleClass {
    /* Fields of St.WidgetAccessibleClass */
    parent_class: any
    static name: string
}
export class WidgetAccessiblePrivate {
    static name: string
}
export abstract class WidgetClass {
    /* Fields of St.WidgetClass */
    style_changed: (self: Widget) => void
    popup_menu: (self: Widget) => void
    navigate_focus: (self: Widget, from: any, direction: DirectionType) => boolean
    get_accessible_type: () => GObject.Type
    get_focus_chain: (widget: Widget) => any[]
    static name: string
}