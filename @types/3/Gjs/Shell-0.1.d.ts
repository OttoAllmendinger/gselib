/**
 * Shell-0.1
 */

import * as Gjs from './Gjs';
import * as St from './St-1.0';
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
import * as PolkitAgent from './PolkitAgent-1.0';
import * as Polkit from './Polkit-1.0';
import * as NM from './NM-1.0';
import * as Gvc from './Gvc-1.0';
import * as Gcr from './Gcr-3';
import * as Gck from './Gck-1';
// WARN: Dependency not found: 'ClutterX11-8'

export enum AppLaunchGpu {
    APP_PREF,
    DISCRETE,
    DEFAULT,
}
export enum AppState {
    STOPPED,
    STARTING,
    RUNNING,
}
export enum BlurMode {
    ACTOR,
    BACKGROUND,
}
export enum NetworkAgentResponse {
    CONFIRMED,
    USER_CANCELED,
    INTERNAL_ERROR,
}
export enum SnippetHook {
    VERTEX,
    VERTEX_TRANSFORM,
    FRAGMENT,
    TEXTURE_COORD_TRANSFORM,
    LAYER_FRAGMENT,
    TEXTURE_LOOKUP,
}
export enum ActionMode {
    NONE,
    NORMAL,
    OVERVIEW,
    LOCK_SCREEN,
    UNLOCK_SCREEN,
    LOGIN_SCREEN,
    SYSTEM_MODAL,
    LOOKING_GLASS,
    POPUP,
    ALL,
}
export const KEYRING_SK_TAG: string
export const KEYRING_SN_TAG: string
export const KEYRING_UUID_TAG: string
export function get_file_contents_utf8_sync(path: string): string
export function util_check_cloexec_fds(): void
export function util_composite_capture_images(captures: any, n_captures: number, x: number, y: number, target_width: number, target_height: number, target_scale: number): cairo.Surface
export function util_create_pixbuf_from_data(data: Uint8Array, colorspace: GdkPixbuf.Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): GdkPixbuf.Pixbuf
export function util_get_content_for_window_actor(window_actor: any, window_rect: any): any
export function util_get_translated_folder_name(name: string): string | null
export function util_get_uid(): number
export function util_get_week_start(): number
export function util_has_x11_display_extension(display: any, extension: string): boolean
export function util_regex_escape(str: string): string
export function util_sd_notify(): void
export function util_set_hidden_from_pick(actor: any, hidden: boolean): void
export function util_start_systemd_unit(unit: string, mode: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean
export function util_stop_systemd_unit(unit: string, mode: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
export function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean
export function util_touch_file_async(file: Gio.File, callback?: Gio.AsyncReadyCallback | null): void
export function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean
export function util_translate_time_string(str: string): string
export function util_wifexited(status: number): [ /* returnType */ boolean, /* exit */ number ]
export function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean
export interface LeisureFunction {
    (data?: object | null): void
}
export interface PerfReplayFunction {
    (time: number, name: string, signature: string, arg: any): void
}
export interface PerfStatisticsCallback {
    (perf_log: PerfLog, data?: object | null): void
}
export interface App_ConstructProps extends GObject.Object_ConstructProps {
    app_info?: Gio.DesktopAppInfo
}
export class App {
    /* Properties of Shell.App */
    readonly action_group: Gio.ActionGroup
    readonly busy: boolean
    readonly icon: Gio.Icon
    readonly id: string
    readonly state: AppState
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.App */
    activate(): void
    activate_full(workspace: number, timestamp: number): void
    activate_window(window: any, timestamp: number): void
    can_open_new_window(): boolean
    compare(other: App): number
    compare_by_name(other: App): number
    create_icon_texture(size: number): any
    get_app_info(): Gio.DesktopAppInfo
    get_busy(): boolean
    get_description(): string
    get_icon(): Gio.Icon
    get_id(): string
    get_n_windows(): number
    get_name(): string
    get_pids(): number[]
    get_state(): AppState
    get_windows(): any[]
    is_on_workspace(workspace: any): boolean
    is_window_backed(): boolean
    launch(timestamp: number, workspace: number, gpu_pref: AppLaunchGpu): boolean
    launch_action(action_name: string, timestamp: number, workspace: number): void
    open_new_window(workspace: number): void
    request_quit(): boolean
    update_app_actions(window: any): void
    update_window_actions(window: any): void
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
    /* Signals of Shell.App */
    connect(sigName: "windows-changed", callback: (($obj: App) => void)): number
    connect_after(sigName: "windows-changed", callback: (($obj: App) => void)): number
    emit(sigName: "windows-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::action-group", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::busy", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AppSystem_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppSystem {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.AppSystem */
    get_installed(): Gio.AppInfo[]
    get_running(): App[]
    lookup_app(id: string): App
    lookup_desktop_wmclass(wmclass?: string | null): App
    lookup_heuristic_basename(id: string): App
    lookup_startup_wmclass(wmclass?: string | null): App
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
    /* Signals of Shell.AppSystem */
    connect(sigName: "app-state-changed", callback: (($obj: AppSystem, object: App) => void)): number
    connect_after(sigName: "app-state-changed", callback: (($obj: AppSystem, object: App) => void)): number
    emit(sigName: "app-state-changed", object: App): void
    connect(sigName: "installed-changed", callback: (($obj: AppSystem) => void)): number
    connect_after(sigName: "installed-changed", callback: (($obj: AppSystem) => void)): number
    emit(sigName: "installed-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppSystem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppSystem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppSystem_ConstructProps)
    _init (config?: AppSystem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): AppSystem
    static search(search_string: string): any
    static $gtype: GObject.Type
}
export interface AppUsage_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppUsage {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.AppUsage */
    compare(id_a: string, id_b: string): number
    get_most_used(): App[]
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
    connect(sigName: "notify", callback: (($obj: AppUsage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppUsage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppUsage_ConstructProps)
    _init (config?: AppUsage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): AppUsage
    static $gtype: GObject.Type
}
export class BlurEffect {
    /* Properties of Shell.BlurEffect */
    brightness: number
    mode: BlurMode
    sigma: number
    /* Methods of Shell.BlurEffect */
    get_brightness(): number
    get_mode(): BlurMode
    get_sigma(): number
    set_brightness(brightness: number): void
    set_mode(mode: BlurMode): void
    set_sigma(sigma: number): void
    static name: string
    static new(): BlurEffect
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BlurEffect
}
export interface EmbeddedWindow_ConstructProps extends Gtk.Window_ConstructProps {
}
export class EmbeddedWindow {
    /* Properties of Gtk.Window */
    accept_focus: boolean
    application: Gtk.Application
    attached_to: Gtk.Widget
    decorated: boolean
    default_height: number
    default_width: number
    deletable: boolean
    destroy_with_parent: boolean
    focus_on_map: boolean
    focus_visible: boolean
    gravity: Gdk.Gravity
    has_resize_grip: boolean
    readonly has_toplevel_focus: boolean
    hide_titlebar_when_maximized: boolean
    icon: GdkPixbuf.Pixbuf
    icon_name: string
    readonly is_active: boolean
    readonly is_maximized: boolean
    mnemonics_visible: boolean
    modal: boolean
    resizable: boolean
    readonly resize_grip_visible: boolean
    role: string
    screen: Gdk.Screen
    skip_pager_hint: boolean
    skip_taskbar_hint: boolean
    startup_id: string
    title: string
    transient_for: Gtk.Window
    type_hint: Gdk.WindowTypeHint
    urgency_hint: boolean
    window_position: Gtk.WindowPosition
    /* Properties of Gtk.Container */
    border_width: number
    child: Gtk.Widget
    resize_mode: Gtk.ResizeMode
    /* Properties of Gtk.Widget */
    app_paintable: boolean
    can_default: boolean
    can_focus: boolean
    readonly composite_child: boolean
    double_buffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focus_on_click: boolean
    halign: Gtk.Align
    has_default: boolean
    has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    is_focus: boolean
    margin: number
    margin_bottom: number
    margin_end: number
    margin_left: number
    margin_right: number
    margin_start: number
    margin_top: number
    name: string
    no_show_all: boolean
    opacity: number
    parent: Gtk.Container
    receives_default: boolean
    readonly scale_factor: number
    sensitive: boolean
    style: Gtk.Style
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    readonly window: Gdk.Window
    /* Fields of Shell.EmbeddedWindow */
    parent_instance: Gtk.Window
    /* Fields of Gtk.Window */
    bin: Gtk.Bin
    priv: Gtk.WindowPrivate
    /* Fields of Gtk.Bin */
    container: Gtk.Container
    /* Fields of Gtk.Container */
    widget: Gtk.Widget
    /* Fields of GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk.Window */
    activate_default(): boolean
    activate_focus(): boolean
    activate_key(event: Gdk.EventKey): boolean
    add_accel_group(accel_group: Gtk.AccelGroup): void
    add_mnemonic(keyval: number, target: Gtk.Widget): void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void
    get_accept_focus(): boolean
    get_application(): Gtk.Application | null
    get_attached_to(): Gtk.Widget | null
    get_decorated(): boolean
    get_default_size(): [ /* width */ number | null, /* height */ number | null ]
    get_default_widget(): Gtk.Widget | null
    get_deletable(): boolean
    get_destroy_with_parent(): boolean
    get_focus(): Gtk.Widget | null
    get_focus_on_map(): boolean
    get_focus_visible(): boolean
    get_gravity(): Gdk.Gravity
    get_group(): Gtk.WindowGroup
    get_has_resize_grip(): boolean
    get_hide_titlebar_when_maximized(): boolean
    get_icon(): GdkPixbuf.Pixbuf | null
    get_icon_list(): GdkPixbuf.Pixbuf[]
    get_icon_name(): string | null
    get_mnemonic_modifier(): Gdk.ModifierType
    get_mnemonics_visible(): boolean
    get_modal(): boolean
    get_opacity(): number
    get_position(): [ /* root_x */ number | null, /* root_y */ number | null ]
    get_resizable(): boolean
    get_resize_grip_area(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    get_role(): string | null
    get_screen(): Gdk.Screen
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    get_skip_pager_hint(): boolean
    get_skip_taskbar_hint(): boolean
    get_title(): string | null
    get_titlebar(): Gtk.Widget | null
    get_transient_for(): Gtk.Window | null
    get_type_hint(): Gdk.WindowTypeHint
    get_urgency_hint(): boolean
    get_window_type(): Gtk.WindowType
    has_group(): boolean
    iconify(): void
    maximize(): void
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parse_geometry(geometry: string): boolean
    present(): void
    present_with_time(timestamp: number): void
    propagate_key_event(event: Gdk.EventKey): boolean
    remove_accel_group(accel_group: Gtk.AccelGroup): void
    remove_mnemonic(keyval: number, target: Gtk.Widget): void
    reshow_with_initial_size(): void
    resize(width: number, height: number): void
    resize_grip_is_visible(): boolean
    resize_to_geometry(width: number, height: number): void
    set_accept_focus(setting: boolean): void
    set_application(application?: Gtk.Application | null): void
    set_attached_to(attach_widget?: Gtk.Widget | null): void
    set_decorated(setting: boolean): void
    set_default(default_widget?: Gtk.Widget | null): void
    set_default_geometry(width: number, height: number): void
    set_default_size(width: number, height: number): void
    set_deletable(setting: boolean): void
    set_destroy_with_parent(setting: boolean): void
    set_focus(focus?: Gtk.Widget | null): void
    set_focus_on_map(setting: boolean): void
    set_focus_visible(setting: boolean): void
    set_geometry_hints(geometry_widget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void
    set_gravity(gravity: Gdk.Gravity): void
    set_has_resize_grip(value: boolean): void
    set_has_user_ref_count(setting: boolean): void
    set_hide_titlebar_when_maximized(setting: boolean): void
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void
    set_icon_from_file(filename: string): boolean
    set_icon_list(list: GdkPixbuf.Pixbuf[]): void
    set_icon_name(name?: string | null): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void
    set_mnemonics_visible(setting: boolean): void
    set_modal(modal: boolean): void
    set_opacity(opacity: number): void
    set_position(position: Gtk.WindowPosition): void
    set_resizable(resizable: boolean): void
    set_role(role: string): void
    set_screen(screen: Gdk.Screen): void
    set_skip_pager_hint(setting: boolean): void
    set_skip_taskbar_hint(setting: boolean): void
    set_startup_id(startup_id: string): void
    set_title(title: string): void
    set_titlebar(titlebar?: Gtk.Widget | null): void
    set_transient_for(parent?: Gtk.Window | null): void
    set_type_hint(hint: Gdk.WindowTypeHint): void
    set_urgency_hint(setting: boolean): void
    set_wmclass(wmclass_name: string, wmclass_class: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk.Bin */
    get_child(): Gtk.Widget | null
    /* Methods of Gtk.Container */
    add(widget: Gtk.Widget): void
    check_resize(): void
    child_get_property(child: Gtk.Widget, property_name: string, value: any): void
    child_notify_by_pspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    child_set_property(child: Gtk.Widget, property_name: string, value: any): void
    child_type(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    get_border_width(): number
    get_children(): Gtk.Widget[]
    get_focus_chain(): [ /* returnType */ boolean, /* focusable_widgets */ Gtk.Widget[] ]
    get_focus_child(): Gtk.Widget | null
    get_focus_hadjustment(): Gtk.Adjustment | null
    get_focus_vadjustment(): Gtk.Adjustment | null
    get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    get_resize_mode(): Gtk.ResizeMode
    propagate_draw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resize_children(): void
    set_border_width(border_width: number): void
    set_focus_chain(focusable_widgets: Gtk.Widget[]): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_hadjustment(adjustment: Gtk.Adjustment): void
    set_focus_vadjustment(adjustment: Gtk.Adjustment): void
    set_reallocate_redraws(needs_redraws: boolean): void
    set_resize_mode(resize_mode: Gtk.ResizeMode): void
    unset_focus_chain(): void
    /* Methods of Gtk.Widget */
    activate(): boolean
    add_accelerator(accel_signal: string, accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: Gtk.AccelFlags): void
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    add_events(events: number): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    can_activate_accel(signal_id: number): boolean
    child_focus(direction: Gtk.DirectionType): boolean
    child_notify(child_property: string): void
    class_path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    compute_expand(orientation: Gtk.Orientation): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widget_pointer: Gtk.Widget): /* widget_pointer */ Gtk.Widget
    device_is_shadowed(device: Gdk.Device): boolean
    drag_begin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    drag_begin_with_coordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    drag_dest_add_image_targets(): void
    drag_dest_add_text_targets(): void
    drag_dest_add_uri_targets(): void
    drag_dest_find_target(context: Gdk.DragContext, target_list?: Gtk.TargetList | null): Gdk.Atom
    drag_dest_get_target_list(): Gtk.TargetList | null
    drag_dest_get_track_motion(): boolean
    drag_dest_set(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void
    drag_dest_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_dest_set_track_motion(track_motion: boolean): void
    drag_dest_unset(): void
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void
    drag_highlight(): void
    drag_source_add_image_targets(): void
    drag_source_add_text_targets(): void
    drag_source_add_uri_targets(): void
    drag_source_get_target_list(): Gtk.TargetList | null
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    drag_source_set_icon_gicon(icon: Gio.Icon): void
    drag_source_set_icon_name(icon_name: string): void
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    drag_source_set_icon_stock(stock_id: string): void
    drag_source_set_target_list(target_list?: Gtk.TargetList | null): void
    drag_source_unset(): void
    drag_unhighlight(): void
    draw(cr: cairo.Context): void
    ensure_style(): void
    error_bell(): void
    event(event: Gdk.Event): boolean
    freeze_child_notify(): void
    get_accessible(): Atk.Object
    get_action_group(prefix: string): Gio.ActionGroup | null
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_size(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_app_paintable(): boolean
    get_can_default(): boolean
    get_can_focus(): boolean
    get_child_requisition(): /* requisition */ Gtk.Requisition
    get_child_visible(): boolean
    get_clip(): /* clip */ Gtk.Allocation
    get_clipboard(selection: Gdk.Atom): Gtk.Clipboard
    get_composite_name(): string
    get_device_enabled(device: Gdk.Device): boolean
    get_device_events(device: Gdk.Device): Gdk.EventMask
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_double_buffered(): boolean
    get_events(): number
    get_focus_on_click(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_has_window(): boolean
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_left(): number
    get_margin_right(): number
    get_margin_start(): number
    get_margin_top(): number
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    get_modifier_style(): Gtk.RcStyle
    get_name(): string
    get_no_show_all(): boolean
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_parent_window(): Gdk.Window | null
    get_path(): Gtk.WidgetPath
    get_pointer(): [ /* x */ number | null, /* y */ number | null ]
    get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_requisition(): /* requisition */ Gtk.Requisition
    get_root_window(): Gdk.Window
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state(): Gtk.StateType
    get_state_flags(): Gtk.StateFlags
    get_style(): Gtk.Style
    get_style_context(): Gtk.StyleContext
    get_support_multidevice(): boolean
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_tooltip_window(): Gtk.Window
    get_toplevel(): Gtk.Widget
    get_valign(): Gtk.Align
    get_valign_with_baseline(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_visual(): Gdk.Visual
    get_window(): Gdk.Window | null
    grab_add(): void
    grab_default(): void
    grab_focus(): void
    grab_remove(): void
    has_grab(): boolean
    has_rc_style(): boolean
    has_screen(): boolean
    has_visible_focus(): boolean
    hide(): void
    hide_on_delete(): boolean
    in_destruction(): boolean
    init_template(): void
    input_shape_combine_region(region?: cairo.Region | null): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_composited(): boolean
    is_drawable(): boolean
    is_sensitive(): boolean
    is_toplevel(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_accel_closures(): Function
    list_action_prefixes(): string[]
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    modify_base(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_bg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modify_fg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modify_font(font_desc?: Pango.FontDescription | null): void
    modify_style(style: Gtk.RcStyle): void
    modify_text(state: Gtk.StateType, color?: Gdk.Color | null): void
    override_background_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_color(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void
    override_font(font_desc?: Pango.FontDescription | null): void
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* path_length */ number | null, /* path */ string | null, /* path_reversed */ string | null ]
    queue_allocate(): void
    queue_compute_expand(): void
    queue_draw(): void
    queue_draw_area(x: number, y: number, width: number, height: number): void
    queue_draw_region(region: cairo.Region): void
    queue_resize(): void
    queue_resize_no_redraw(): void
    realize(): void
    region_intersect(region: cairo.Region): cairo.Region
    register_window(window: Gdk.Window): void
    remove_accelerator(accel_group: Gtk.AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(new_parent: Gtk.Widget): void
    reset_rc_styles(): void
    reset_style(): void
    send_expose(event: Gdk.Event): number
    send_focus_change(event: Gdk.Event): boolean
    set_accel_path(accel_path?: string | null, accel_group?: Gtk.AccelGroup | null): void
    set_allocation(allocation: Gtk.Allocation): void
    set_app_paintable(app_paintable: boolean): void
    set_can_default(can_default: boolean): void
    set_can_focus(can_focus: boolean): void
    set_child_visible(is_visible: boolean): void
    set_clip(clip: Gtk.Allocation): void
    set_composite_name(name: string): void
    set_device_enabled(device: Gdk.Device, enabled: boolean): void
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void
    set_direction(dir: Gtk.TextDirection): void
    set_double_buffered(double_buffered: boolean): void
    set_events(events: number): void
    set_focus_on_click(focus_on_click: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_has_window(has_window: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_mapped(mapped: boolean): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_left(margin: number): void
    set_margin_right(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_no_show_all(no_show_all: boolean): void
    set_parent(parent: Gtk.Widget): void
    set_parent_window(parent_window: Gdk.Window): void
    set_realized(realized: boolean): void
    set_receives_default(receives_default: boolean): void
    set_redraw_on_allocate(redraw_on_allocate: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state(state: Gtk.StateType): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_style(style?: Gtk.Style | null): void
    set_support_multidevice(support_multidevice: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_tooltip_window(custom_window?: Gtk.Window | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    set_visual(visual?: Gdk.Visual | null): void
    set_window(window: Gdk.Window): void
    shape_combine_region(region?: cairo.Region | null): void
    show(): void
    show_all(): void
    show_now(): void
    size_allocate(allocation: Gtk.Allocation): void
    size_allocate_with_baseline(allocation: Gtk.Allocation, baseline: number): void
    size_request(): /* requisition */ Gtk.Requisition
    style_attach(): void
    style_get_property(property_name: string, value: any): void
    thaw_child_notify(): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregister_window(window: Gdk.Window): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk.Buildable */
    add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    construct_child(builder: Gtk.Builder, name: string): GObject.Object
    custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    parser_finished(builder: Gtk.Builder): void
    set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    /* Virtual methods of Shell.EmbeddedWindow */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_construct_child(builder: Gtk.Builder, name: string): GObject.Object
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_get_name(): string
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_name(name: string): void
    /* Virtual methods of Gtk.Window */
    vfunc_activate_default(): void
    vfunc_activate_focus(): void
    vfunc_enable_debugging(toggle: boolean): boolean
    vfunc_keys_changed(): void
    vfunc_set_focus(focus?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Container */
    vfunc_add(widget: Gtk.Widget): void
    vfunc_check_resize(): void
    vfunc_child_type(): GObject.Type
    vfunc_composite_name(child: Gtk.Widget): string
    vfunc_forall(include_internals: boolean, callback: Gtk.Callback): void
    vfunc_get_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_get_path_for_child(child: Gtk.Widget): Gtk.WidgetPath
    vfunc_remove(widget: Gtk.Widget): void
    vfunc_set_child_property(child: Gtk.Widget, property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    /* Virtual methods of Gtk.Widget */
    vfunc_adjust_baseline_allocation(baseline: number): void
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void
    vfunc_adjust_size_allocation(orientation: Gtk.Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void
    vfunc_adjust_size_request(orientation: Gtk.Orientation, minimum_size: number, natural_size: number): void
    vfunc_button_press_event(event: Gdk.EventButton): boolean
    vfunc_button_release_event(event: Gdk.EventButton): boolean
    vfunc_can_activate_accel(signal_id: number): boolean
    vfunc_child_notify(child_property: GObject.ParamSpec): void
    vfunc_composited_changed(): void
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_configure_event(event: Gdk.EventConfigure): boolean
    vfunc_damage_event(event: Gdk.EventExpose): boolean
    vfunc_delete_event(event: Gdk.EventAny): boolean
    vfunc_destroy(): void
    vfunc_destroy_event(event: Gdk.EventAny): boolean
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_drag_begin(context: Gdk.DragContext): void
    vfunc_drag_data_delete(context: Gdk.DragContext): void
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_drag_end(context: Gdk.DragContext): void
    vfunc_drag_failed(context: Gdk.DragContext, result: Gtk.DragResult): boolean
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean
    vfunc_draw(cr: cairo.Context): boolean
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_event(event: Gdk.Event): boolean
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean
    vfunc_get_accessible(): Atk.Object
    vfunc_get_preferred_height(): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_get_preferred_height_for_width(width: number): [ /* minimum_height */ number | null, /* natural_height */ number | null ]
    vfunc_get_preferred_width(): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_preferred_width_for_height(height: number): [ /* minimum_width */ number | null, /* natural_width */ number | null ]
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean
    vfunc_grab_focus(): void
    vfunc_grab_notify(was_grabbed: boolean): void
    vfunc_hide(): void
    vfunc_hierarchy_changed(previous_toplevel: Gtk.Widget): void
    vfunc_key_press_event(event: Gdk.EventKey): boolean
    vfunc_key_release_event(event: Gdk.EventKey): boolean
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean
    vfunc_map(): void
    vfunc_map_event(event: Gdk.EventAny): boolean
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_parent_set(previous_parent: Gtk.Widget): void
    vfunc_popup_menu(): boolean
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_queue_draw_region(region: cairo.Region): void
    vfunc_realize(): void
    vfunc_screen_changed(previous_screen: Gdk.Screen): void
    vfunc_scroll_event(event: Gdk.EventScroll): boolean
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean
    vfunc_selection_get(selection_data: Gtk.SelectionData, info: number, time_: number): void
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean
    vfunc_selection_received(selection_data: Gtk.SelectionData, time_: number): void
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean
    vfunc_show(): void
    vfunc_show_all(): void
    vfunc_show_help(help_type: Gtk.WidgetHelpType): boolean
    vfunc_size_allocate(allocation: Gtk.Allocation): void
    vfunc_state_changed(previous_state: Gtk.StateType): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_style_set(previous_style: Gtk.Style): void
    vfunc_style_updated(): void
    vfunc_touch_event(event: Gdk.EventTouch): boolean
    vfunc_unmap(): void
    vfunc_unmap_event(event: Gdk.EventAny): boolean
    vfunc_unrealize(): void
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gtk.Window */
    connect(sigName: "activate-default", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "activate-default", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "activate-focus", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "activate-focus"): void
    connect(sigName: "enable-debugging", callback: (($obj: EmbeddedWindow, toggle: boolean) => boolean)): number
    connect_after(sigName: "enable-debugging", callback: (($obj: EmbeddedWindow, toggle: boolean) => boolean)): number
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "set-focus", callback: (($obj: EmbeddedWindow, widget?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "set-focus", callback: (($obj: EmbeddedWindow, widget?: Gtk.Widget | null) => void)): number
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk.Container */
    connect(sigName: "add", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "add", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "check-resize", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "remove", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    connect_after(sigName: "set-focus-child", callback: (($obj: EmbeddedWindow, object: Gtk.Widget) => void)): number
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "accel-closures-changed", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-press-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventButton) => boolean)): number
    connect_after(sigName: "button-release-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventButton) => boolean)): number
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: (($obj: EmbeddedWindow, signal_id: number) => boolean)): number
    connect_after(sigName: "can-activate-accel", callback: (($obj: EmbeddedWindow, signal_id: number) => boolean)): number
    emit(sigName: "can-activate-accel", signal_id: number): void
    connect(sigName: "child-notify", callback: (($obj: EmbeddedWindow, child_property: GObject.ParamSpec) => void)): number
    connect_after(sigName: "child-notify", callback: (($obj: EmbeddedWindow, child_property: GObject.ParamSpec) => void)): number
    emit(sigName: "child-notify", child_property: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventConfigure) => boolean)): number
    connect_after(sigName: "configure-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventConfigure) => boolean)): number
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventExpose) => boolean)): number
    connect_after(sigName: "damage-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventExpose) => boolean)): number
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "delete-event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "destroy-event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: (($obj: EmbeddedWindow, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: EmbeddedWindow, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-begin", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-data-delete", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-get", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "drag-data-received", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-drop", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    connect_after(sigName: "drag-end", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext) => void)): number
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    connect_after(sigName: "drag-failed", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, time: number) => void)): number
    connect_after(sigName: "drag-leave", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, time: number) => void)): number
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    connect_after(sigName: "drag-motion", callback: (($obj: EmbeddedWindow, context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: (($obj: EmbeddedWindow, cr: cairo.Context) => boolean)): number
    connect_after(sigName: "draw", callback: (($obj: EmbeddedWindow, cr: cairo.Context) => boolean)): number
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "enter-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => boolean)): number
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => void)): number
    connect_after(sigName: "event-after", callback: (($obj: EmbeddedWindow, event: Gdk.Event) => void)): number
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "focus", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-in-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventFocus) => boolean)): number
    connect_after(sigName: "focus-out-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventFocus) => boolean)): number
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventGrabBroken) => boolean)): number
    connect_after(sigName: "grab-broken-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventGrabBroken) => boolean)): number
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "grab-focus", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: (($obj: EmbeddedWindow, was_grabbed: boolean) => void)): number
    connect_after(sigName: "grab-notify", callback: (($obj: EmbeddedWindow, was_grabbed: boolean) => void)): number
    emit(sigName: "grab-notify", was_grabbed: boolean): void
    connect(sigName: "hide", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "hide", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: (($obj: EmbeddedWindow, previous_toplevel?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "hierarchy-changed", callback: (($obj: EmbeddedWindow, previous_toplevel?: Gtk.Widget | null) => void)): number
    emit(sigName: "hierarchy-changed", previous_toplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-press-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventKey) => boolean)): number
    connect_after(sigName: "key-release-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventKey) => boolean)): number
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventCrossing) => boolean)): number
    connect_after(sigName: "leave-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventCrossing) => boolean)): number
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "map", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "map-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: (($obj: EmbeddedWindow, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: EmbeddedWindow, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "motion-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventMotion) => boolean)): number
    connect_after(sigName: "motion-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventMotion) => boolean)): number
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: EmbeddedWindow, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: (($obj: EmbeddedWindow, old_parent?: Gtk.Widget | null) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: EmbeddedWindow, old_parent?: Gtk.Widget | null) => void)): number
    emit(sigName: "parent-set", old_parent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (($obj: EmbeddedWindow) => boolean)): number
    connect_after(sigName: "popup-menu", callback: (($obj: EmbeddedWindow) => boolean)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProperty) => boolean)): number
    connect_after(sigName: "property-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProperty) => boolean)): number
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-in-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProximity) => boolean)): number
    connect_after(sigName: "proximity-out-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventProximity) => boolean)): number
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
    connect(sigName: "query-tooltip", callback: (($obj: EmbeddedWindow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: EmbeddedWindow, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "realize", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "screen-changed", callback: (($obj: EmbeddedWindow, previous_screen?: Gdk.Screen | null) => void)): number
    connect_after(sigName: "screen-changed", callback: (($obj: EmbeddedWindow, previous_screen?: Gdk.Screen | null) => void)): number
    emit(sigName: "screen-changed", previous_screen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventScroll) => boolean)): number
    connect_after(sigName: "scroll-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventScroll) => boolean)): number
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-clear-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: (($obj: EmbeddedWindow, data: Gtk.SelectionData, info: number, time: number) => void)): number
    connect_after(sigName: "selection-get", callback: (($obj: EmbeddedWindow, data: Gtk.SelectionData, info: number, time: number) => void)): number
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: (($obj: EmbeddedWindow, data: Gtk.SelectionData, time: number) => void)): number
    connect_after(sigName: "selection-received", callback: (($obj: EmbeddedWindow, data: Gtk.SelectionData, time: number) => void)): number
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    connect_after(sigName: "selection-request-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventSelection) => boolean)): number
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "show", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: (($obj: EmbeddedWindow, help_type: Gtk.WidgetHelpType) => boolean)): number
    connect_after(sigName: "show-help", callback: (($obj: EmbeddedWindow, help_type: Gtk.WidgetHelpType) => boolean)): number
    emit(sigName: "show-help", help_type: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: (($obj: EmbeddedWindow, allocation: Gtk.Allocation) => void)): number
    connect_after(sigName: "size-allocate", callback: (($obj: EmbeddedWindow, allocation: Gtk.Allocation) => void)): number
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: (($obj: EmbeddedWindow, state: Gtk.StateType) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: EmbeddedWindow, state: Gtk.StateType) => void)): number
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: (($obj: EmbeddedWindow, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: EmbeddedWindow, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: (($obj: EmbeddedWindow, previous_style?: Gtk.Style | null) => void)): number
    connect_after(sigName: "style-set", callback: (($obj: EmbeddedWindow, previous_style?: Gtk.Style | null) => void)): number
    emit(sigName: "style-set", previous_style?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "style-updated", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: (($obj: EmbeddedWindow, object: Gdk.Event) => boolean)): number
    connect_after(sigName: "touch-event", callback: (($obj: EmbeddedWindow, object: Gdk.Event) => boolean)): number
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventAny) => boolean)): number
    connect_after(sigName: "unmap-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventAny) => boolean)): number
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (($obj: EmbeddedWindow) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: EmbeddedWindow) => void)): number
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventVisibility) => boolean)): number
    connect_after(sigName: "visibility-notify-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventVisibility) => boolean)): number
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventWindowState) => boolean)): number
    connect_after(sigName: "window-state-event", callback: (($obj: EmbeddedWindow, event: Gdk.EventWindowState) => boolean)): number
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attached-to", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::decorated", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-height", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-width", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::deletable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-map", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gravity", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-resize-grip", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-active", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-maximized", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modal", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resizable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::role", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::startup-id", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transient-for", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgency-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-position", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::border-width", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::child", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resize-mode", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-paintable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::composite-child", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::double-buffered", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::events", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::expand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-left", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-right", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-show-all", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::style", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EmbeddedWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EmbeddedWindow_ConstructProps)
    _init (config?: EmbeddedWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EmbeddedWindow
    static new(type: Gtk.WindowType): EmbeddedWindow
    static $gtype: GObject.Type
}
export class GLSLEffect {
    /* Fields of Shell.GLSLEffect */
    parent_instance: any
    /* Methods of Shell.GLSLEffect */
    add_glsl_snippet(hook: SnippetHook, declarations: string, code: string, is_replace: boolean): void
    get_uniform_location(name: string): number
    set_uniform_float(uniform: number, n_components: number, value: number[]): void
    /* Virtual methods of Shell.GLSLEffect */
    vfunc_build_pipeline(): void
    static name: string
}
export interface Global_ConstructProps extends GObject.Object_ConstructProps {
    frame_finish_timestamp?: boolean
    frame_timestamps?: boolean
    session_mode?: string
}
export class Global {
    /* Properties of Shell.Global */
    readonly backend: any
    readonly datadir: string
    readonly display: any
    readonly focus_manager: St.FocusManager
    frame_finish_timestamp: boolean
    frame_timestamps: boolean
    readonly imagedir: string
    readonly screen_height: number
    readonly screen_width: number
    readonly settings: Gio.Settings
    readonly stage: any
    readonly switcheroo_control: Gio.DBusProxy
    readonly top_window_group: any
    readonly userdatadir: string
    readonly window_group: any
    readonly window_manager: WM
    readonly workspace_manager: any
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.Global */
    begin_modal(timestamp: number, options: any): boolean
    begin_work(): void
    create_app_launch_context(timestamp: number, workspace: number): Gio.AppLaunchContext
    end_modal(timestamp: number): void
    end_work(): void
    get_current_time(): number
    get_display(): any
    get_persistent_state(property_type: string, property_name: string): GLib.Variant
    get_pointer(): [ /* x */ number, /* y */ number, /* mods */ any ]
    get_runtime_state(property_type: string, property_name: string): GLib.Variant
    get_session_mode(): string
    get_settings(): Gio.Settings
    get_stage(): any
    get_switcheroo_control(): Gio.DBusProxy
    get_window_actors(): any[]
    notify_error(msg: string, details: string): void
    reexec_self(): void
    run_at_leisure(func: LeisureFunction): void
    set_persistent_state(property_name: string, variant?: GLib.Variant | null): void
    set_runtime_state(property_name: string, variant?: GLib.Variant | null): void
    set_stage_input_region(rectangles: any[]): void
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
    /* Signals of Shell.Global */
    connect(sigName: "locate-pointer", callback: (($obj: Global) => void)): number
    connect_after(sigName: "locate-pointer", callback: (($obj: Global) => void)): number
    emit(sigName: "locate-pointer"): void
    connect(sigName: "notify-error", callback: (($obj: Global, object: string, p0: string) => void)): number
    connect_after(sigName: "notify-error", callback: (($obj: Global, object: string, p0: string) => void)): number
    emit(sigName: "notify-error", object: string, p0: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::datadir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datadir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-finish-timestamp", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-finish-timestamp", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::frame-timestamps", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-timestamps", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::imagedir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imagedir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen-height", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen-height", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::screen-width", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen-width", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stage", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stage", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::switcheroo-control", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::switcheroo-control", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top-window-group", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-window-group", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::userdatadir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::userdatadir", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-group", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-group", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workspace-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace-manager", callback: (($obj: Global, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Global_ConstructProps)
    _init (config?: Global_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): Global
    static $gtype: GObject.Type
}
export class GtkEmbed {
    /* Fields of Shell.GtkEmbed */
    parent_instance: any
    static name: string
    static new(window: EmbeddedWindow): GtkEmbed
    constructor(window: EmbeddedWindow)
    /* Static methods and pseudo-constructors */
    static new(window: EmbeddedWindow): GtkEmbed
}
export class InvertLightnessEffect {
    static name: string
    static new(): InvertLightnessEffect
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): InvertLightnessEffect
}
export interface KeyringPrompt_ConstructProps extends GObject.Object_ConstructProps {
    confirm_actor?: any
    password_actor?: any
    caller_window?: string
    cancel_label?: string
    choice_chosen?: boolean
    choice_label?: string
    continue_label?: string
    description?: string
    message?: string
    password_new?: boolean
    title?: string
    warning?: string
}
export class KeyringPrompt {
    /* Properties of Shell.KeyringPrompt */
    readonly choice_visible: boolean
    confirm_actor: any
    readonly confirm_visible: boolean
    password_actor: any
    readonly password_visible: boolean
    readonly warning_visible: boolean
    /* Properties of Gcr.Prompt */
    caller_window: string
    cancel_label: string
    choice_chosen: boolean
    choice_label: string
    continue_label: string
    description: string
    message: string
    password_new: boolean
    readonly password_strength: number
    title: string
    warning: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.KeyringPrompt */
    cancel(): void
    complete(): boolean
    get_confirm_actor(): any
    get_password_actor(): any
    set_confirm_actor(confirm_actor?: any): void
    set_password_actor(password_actor?: any): void
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
    /* Methods of Gcr.Prompt */
    close(): void
    confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply
    confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply
    confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply
    get_caller_window(): string
    get_cancel_label(): string
    get_choice_chosen(): boolean
    get_choice_label(): string
    get_continue_label(): string
    get_description(): string
    get_message(): string
    get_password_new(): boolean
    get_password_strength(): number
    get_title(): string
    get_warning(): string
    password(cancellable?: Gio.Cancellable | null): string
    password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    password_finish(result: Gio.AsyncResult): string
    password_run(cancellable?: Gio.Cancellable | null): string
    reset(): void
    set_caller_window(window_id: string): void
    set_cancel_label(cancel_label: string): void
    set_choice_chosen(chosen: boolean): void
    set_choice_label(choice_label?: string | null): void
    set_continue_label(continue_label: string): void
    set_description(description: string): void
    set_message(message: string): void
    set_password_new(new_password: boolean): void
    set_title(title: string): void
    set_warning(warning?: string | null): void
    /* Virtual methods of Shell.KeyringPrompt */
    vfunc_prompt_close(): void
    vfunc_prompt_confirm_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply
    vfunc_prompt_password_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_prompt_password_finish(result: Gio.AsyncResult): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Shell.KeyringPrompt */
    connect(sigName: "show-confirm", callback: (($obj: KeyringPrompt) => void)): number
    connect_after(sigName: "show-confirm", callback: (($obj: KeyringPrompt) => void)): number
    emit(sigName: "show-confirm"): void
    connect(sigName: "show-password", callback: (($obj: KeyringPrompt) => void)): number
    connect_after(sigName: "show-password", callback: (($obj: KeyringPrompt) => void)): number
    emit(sigName: "show-password"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (($obj: KeyringPrompt) => void)): number
    connect_after(sigName: "prompt-close", callback: (($obj: KeyringPrompt) => void)): number
    emit(sigName: "prompt-close"): void
    connect(sigName: "notify::choice-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::confirm-actor", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confirm-actor", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::confirm-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confirm-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-actor", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-actor", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-visible", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caller-window", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-window", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cancel-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancel-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice-chosen", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-chosen", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::continue-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continue-label", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-new", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-new", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-strength", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-strength", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: KeyringPrompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyringPrompt_ConstructProps)
    _init (config?: KeyringPrompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): KeyringPrompt
    static $gtype: GObject.Type
}
export interface MountOperation_ConstructProps extends Gio.MountOperation_ConstructProps {
}
export class MountOperation {
    /* Properties of Gio.MountOperation */
    anonymous: boolean
    choice: number
    domain: string
    is_tcrypt_hidden_volume: boolean
    is_tcrypt_system_volume: boolean
    password: string
    password_save: Gio.PasswordSave
    pim: number
    username: string
    /* Fields of Gio.MountOperation */
    parent_instance: GObject.Object
    priv: Gio.MountOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.MountOperation */
    get_show_processes_choices(): string[]
    get_show_processes_message(): string
    get_show_processes_pids(): GLib.Pid[]
    /* Methods of Gio.MountOperation */
    get_anonymous(): boolean
    get_choice(): number
    get_domain(): string | null
    get_is_tcrypt_hidden_volume(): boolean
    get_is_tcrypt_system_volume(): boolean
    get_password(): string | null
    get_password_save(): Gio.PasswordSave
    get_pim(): number
    get_username(): string | null
    reply(result: Gio.MountOperationResult): void
    set_anonymous(anonymous: boolean): void
    set_choice(choice: number): void
    set_domain(domain?: string | null): void
    set_is_tcrypt_hidden_volume(hidden_volume: boolean): void
    set_is_tcrypt_system_volume(system_volume: boolean): void
    set_password(password?: string | null): void
    set_password_save(save: Gio.PasswordSave): void
    set_pim(pim: number): void
    set_username(username?: string | null): void
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
    /* Virtual methods of Gio.MountOperation */
    vfunc_aborted(): void
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: Gio.AskPasswordFlags): void
    vfunc_ask_question(message: string, choices: string[]): void
    vfunc_reply(result: Gio.MountOperationResult): void
    vfunc_show_processes(message: string, processes: GLib.Pid[], choices: string[]): void
    vfunc_show_unmount_progress(message: string, time_left: number, bytes_left: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Shell.MountOperation */
    connect(sigName: "show-processes-2", callback: (($obj: MountOperation) => void)): number
    connect_after(sigName: "show-processes-2", callback: (($obj: MountOperation) => void)): number
    emit(sigName: "show-processes-2"): void
    /* Signals of Gio.MountOperation */
    connect(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    connect_after(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    emit(sigName: "aborted"): void
    connect(sigName: "ask-password", callback: (($obj: MountOperation, message: string, default_user: string, default_domain: string, flags: Gio.AskPasswordFlags) => void)): number
    connect_after(sigName: "ask-password", callback: (($obj: MountOperation, message: string, default_user: string, default_domain: string, flags: Gio.AskPasswordFlags) => void)): number
    emit(sigName: "ask-password", message: string, default_user: string, default_domain: string, flags: Gio.AskPasswordFlags): void
    connect(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    connect_after(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    emit(sigName: "ask-question", message: string, choices: string[]): void
    connect(sigName: "reply", callback: (($obj: MountOperation, result: Gio.MountOperationResult) => void)): number
    connect_after(sigName: "reply", callback: (($obj: MountOperation, result: Gio.MountOperationResult) => void)): number
    emit(sigName: "reply", result: Gio.MountOperationResult): void
    connect(sigName: "show-processes", callback: (($obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    connect_after(sigName: "show-processes", callback: (($obj: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void)): number
    emit(sigName: "show-processes", message: string, processes: GLib.Pid[], choices: string[]): void
    connect(sigName: "show-unmount-progress", callback: (($obj: MountOperation, message: string, time_left: number, bytes_left: number) => void)): number
    connect_after(sigName: "show-unmount-progress", callback: (($obj: MountOperation, message: string, time_left: number, bytes_left: number) => void)): number
    emit(sigName: "show-unmount-progress", message: string, time_left: number, bytes_left: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::choice", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::domain", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-tcrypt-hidden-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-hidden-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-tcrypt-system-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-tcrypt-system-volume", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-save", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-save", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pim", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pim", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: MountOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MountOperation_ConstructProps)
    _init (config?: MountOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MountOperation
    static $gtype: GObject.Type
}
export interface NetworkAgent_ConstructProps extends NM.SecretAgentOld_ConstructProps {
}
export class NetworkAgent {
    /* Properties of NM.SecretAgentOld */
    auto_register: boolean
    capabilities: NM.SecretAgentCapabilities
    readonly registered: boolean
    /* Fields of NM.SecretAgentOld */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.NetworkAgent */
    add_vpn_secret(request_id: string, setting_key: string, setting_value: string): void
    respond(request_id: string, response: NetworkAgentResponse): void
    search_vpn_plugin(service: string, callback?: Gio.AsyncReadyCallback | null): void
    search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null
    set_password(request_id: string, setting_key: string, setting_value: string): void
    /* Methods of NM.SecretAgentOld */
    delete_secrets(connection: NM.Connection, callback: NM.SecretAgentOldDeleteSecretsFunc): void
    destroy(): void
    enable(enable: boolean): void
    get_context_busy_watcher(): GObject.Object
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_name_owner(): string
    get_main_context(): GLib.MainContext
    get_registered(): boolean
    get_secrets(connection: NM.Connection, setting_name: string, hints: string[], flags: NM.SecretAgentGetSecretsFlags, callback: NM.SecretAgentOldGetSecretsFunc): void
    register(cancellable?: Gio.Cancellable | null): boolean
    register_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    register_finish(result: Gio.AsyncResult): boolean
    save_secrets(connection: NM.Connection, callback: NM.SecretAgentOldSaveSecretsFunc): void
    unregister(cancellable?: Gio.Cancellable | null): boolean
    unregister_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unregister_finish(result: Gio.AsyncResult): boolean
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
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of NM.SecretAgentOld */
    vfunc_cancel_get_secrets(connection_path: string, setting_name: string): void
    vfunc_delete_secrets(connection: NM.Connection, connection_path: string, callback: NM.SecretAgentOldDeleteSecretsFunc): void
    vfunc_get_secrets(connection: NM.Connection, connection_path: string, setting_name: string, hints: string[], flags: NM.SecretAgentGetSecretsFlags, callback: NM.SecretAgentOldGetSecretsFunc): void
    vfunc_save_secrets(connection: NM.Connection, connection_path: string, callback: NM.SecretAgentOldSaveSecretsFunc): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Shell.NetworkAgent */
    connect(sigName: "cancel-request", callback: (($obj: NetworkAgent, object: string) => void)): number
    connect_after(sigName: "cancel-request", callback: (($obj: NetworkAgent, object: string) => void)): number
    emit(sigName: "cancel-request", object: string): void
    connect(sigName: "new-request", callback: (($obj: NetworkAgent, object: string, p0: NM.Connection, p1: string, p2: string[], p3: number) => void)): number
    connect_after(sigName: "new-request", callback: (($obj: NetworkAgent, object: string, p0: NM.Connection, p1: string, p2: string[], p3: number) => void)): number
    emit(sigName: "new-request", object: string, p0: NM.Connection, p1: string, p2: string[], p3: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-register", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-register", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capabilities", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::registered", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::registered", callback: (($obj: NetworkAgent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkAgent_ConstructProps)
    _init (config?: NetworkAgent_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PerfLog_ConstructProps extends GObject.Object_ConstructProps {
}
export class PerfLog {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.PerfLog */
    add_statistics_callback(callback: PerfStatisticsCallback): void
    collect_statistics(): void
    define_event(name: string, description: string, signature: string): void
    define_statistic(name: string, description: string, signature: string): void
    dump_events(out: Gio.OutputStream): boolean
    dump_log(out: Gio.OutputStream): boolean
    event(name: string): void
    event_i(name: string, arg: number): void
    event_s(name: string, arg: string): void
    event_x(name: string, arg: number): void
    replay(replay_function: PerfReplayFunction): void
    set_enabled(enabled: boolean): void
    update_statistic_i(name: string, value: number): void
    update_statistic_x(name: string, value: number): void
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
    connect(sigName: "notify", callback: (($obj: PerfLog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PerfLog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PerfLog_ConstructProps)
    _init (config?: PerfLog_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): PerfLog
    static $gtype: GObject.Type
}
export interface PolkitAuthenticationAgent_ConstructProps extends PolkitAgent.Listener_ConstructProps {
}
export class PolkitAuthenticationAgent {
    /* Fields of PolkitAgent.Listener */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.PolkitAuthenticationAgent */
    complete(dismissed: boolean): void
    register(): void
    unregister(): void
    /* Methods of PolkitAgent.Listener */
    initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initiate_authentication_finish(res: Gio.AsyncResult): boolean
    register_with_options(flags: PolkitAgent.RegisterFlags, subject: Polkit.Subject, object_path: string, options?: GLib.Variant | null, cancellable?: Gio.Cancellable | null): object | null
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
    /* Virtual methods of PolkitAgent.Listener */
    vfunc_initiate_authentication(action_id: string, message: string, icon_name: string, details: Polkit.Details, cookie: string, identities: Polkit.Identity[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_initiate_authentication_finish(res: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Shell.PolkitAuthenticationAgent */
    connect(sigName: "cancel", callback: (($obj: PolkitAuthenticationAgent) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: PolkitAuthenticationAgent) => void)): number
    emit(sigName: "cancel"): void
    connect(sigName: "initiate", callback: (($obj: PolkitAuthenticationAgent, object: string, p0: string, p1: string, p2: string, p3: string[]) => void)): number
    connect_after(sigName: "initiate", callback: (($obj: PolkitAuthenticationAgent, object: string, p0: string, p1: string, p2: string, p3: string[]) => void)): number
    emit(sigName: "initiate", object: string, p0: string, p1: string, p2: string, p3: string[]): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PolkitAuthenticationAgent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PolkitAuthenticationAgent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PolkitAuthenticationAgent_ConstructProps)
    _init (config?: PolkitAuthenticationAgent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PolkitAuthenticationAgent
    static $gtype: GObject.Type
}
export interface Screenshot_ConstructProps extends GObject.Object_ConstructProps {
}
export class Screenshot {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.Screenshot */
    pick_color(x: number, y: number, callback?: Gio.AsyncReadyCallback | null): void
    pick_color_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* color */ any ]
    screenshot(include_cursor: boolean, stream: Gio.OutputStream, callback?: Gio.AsyncReadyCallback | null): void
    screenshot_area(x: number, y: number, width: number, height: number, stream: Gio.OutputStream, callback?: Gio.AsyncReadyCallback | null): void
    screenshot_area_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]
    screenshot_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]
    screenshot_window(include_frame: boolean, include_cursor: boolean, stream: Gio.OutputStream, callback?: Gio.AsyncReadyCallback | null): void
    screenshot_window_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* area */ cairo.RectangleInt ]
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
    /* Signals of Shell.Screenshot */
    connect(sigName: "screenshot-taken", callback: (($obj: Screenshot, object: any) => void)): number
    connect_after(sigName: "screenshot-taken", callback: (($obj: Screenshot, object: any) => void)): number
    emit(sigName: "screenshot-taken", object: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screenshot_ConstructProps)
    _init (config?: Screenshot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Screenshot
    static $gtype: GObject.Type
}
export class SecureTextBuffer {
    static name: string
    static new(): SecureTextBuffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SecureTextBuffer
}
export class SquareBin {
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
    parent_instance: St.Widget
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
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): St.ThemeNode
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
    vfunc_navigate_focus(from: any, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: SquareBin) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: SquareBin) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: SquareBin) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: SquareBin) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class Stack {
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
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): St.ThemeNode
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
    vfunc_navigate_focus(from: any, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: Stack) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: Stack) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: Stack) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: Stack) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class TrayIcon {
    /* Properties of Shell.TrayIcon */
    readonly pid: number
    readonly title: string
    readonly wm_class: string
    /* Fields of Shell.GtkEmbed */
    parent_instance: any
    /* Methods of Shell.TrayIcon */
    click(event: any): void
    static name: string
    static new(window: EmbeddedWindow): TrayIcon
    constructor(window: EmbeddedWindow)
    /* Static methods and pseudo-constructors */
    static new(window: EmbeddedWindow): TrayIcon
}
export interface TrayManager_ConstructProps extends GObject.Object_ConstructProps {
    bg_color?: any
}
export class TrayManager {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.TrayManager */
    manage_screen(theme_widget: St.Widget): void
    unmanage_screen(): void
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
    /* Signals of Shell.TrayManager */
    connect(sigName: "tray-icon-added", callback: (($obj: TrayManager, object: any) => void)): number
    connect_after(sigName: "tray-icon-added", callback: (($obj: TrayManager, object: any) => void)): number
    emit(sigName: "tray-icon-added", object: any): void
    connect(sigName: "tray-icon-removed", callback: (($obj: TrayManager, object: any) => void)): number
    connect_after(sigName: "tray-icon-removed", callback: (($obj: TrayManager, object: any) => void)): number
    emit(sigName: "tray-icon-removed", object: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TrayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrayManager_ConstructProps)
    _init (config?: TrayManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TrayManager
    static $gtype: GObject.Type
}
export interface WM_ConstructProps extends GObject.Object_ConstructProps {
}
export class WM {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.WM */
    complete_display_change(ok: boolean): void
    completed_destroy(actor: any): void
    completed_map(actor: any): void
    completed_minimize(actor: any): void
    completed_size_change(actor: any): void
    completed_switch_workspace(): void
    completed_unminimize(actor: any): void
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
    /* Signals of Shell.WM */
    connect(sigName: "confirm-display-change", callback: (($obj: WM) => void)): number
    connect_after(sigName: "confirm-display-change", callback: (($obj: WM) => void)): number
    emit(sigName: "confirm-display-change"): void
    connect(sigName: "create-close-dialog", callback: (($obj: WM, window: any) => any)): number
    connect_after(sigName: "create-close-dialog", callback: (($obj: WM, window: any) => any)): number
    emit(sigName: "create-close-dialog", window: any): void
    connect(sigName: "create-inhibit-shortcuts-dialog", callback: (($obj: WM, window: any) => any)): number
    connect_after(sigName: "create-inhibit-shortcuts-dialog", callback: (($obj: WM, window: any) => any)): number
    emit(sigName: "create-inhibit-shortcuts-dialog", window: any): void
    connect(sigName: "destroy", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "destroy", object: any): void
    connect(sigName: "filter-keybinding", callback: (($obj: WM, object: any) => boolean)): number
    connect_after(sigName: "filter-keybinding", callback: (($obj: WM, object: any) => boolean)): number
    emit(sigName: "filter-keybinding", object: any): void
    connect(sigName: "hide-tile-preview", callback: (($obj: WM) => void)): number
    connect_after(sigName: "hide-tile-preview", callback: (($obj: WM) => void)): number
    emit(sigName: "hide-tile-preview"): void
    connect(sigName: "kill-switch-workspace", callback: (($obj: WM) => void)): number
    connect_after(sigName: "kill-switch-workspace", callback: (($obj: WM) => void)): number
    emit(sigName: "kill-switch-workspace"): void
    connect(sigName: "kill-window-effects", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "kill-window-effects", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "kill-window-effects", object: any): void
    connect(sigName: "map", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "map", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "map", object: any): void
    connect(sigName: "minimize", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "minimize", object: any): void
    connect(sigName: "show-tile-preview", callback: (($obj: WM, object: any, p0: any, p1: number) => void)): number
    connect_after(sigName: "show-tile-preview", callback: (($obj: WM, object: any, p0: any, p1: number) => void)): number
    emit(sigName: "show-tile-preview", object: any, p0: any, p1: number): void
    connect(sigName: "show-window-menu", callback: (($obj: WM, object: any, p0: number, p1: any) => void)): number
    connect_after(sigName: "show-window-menu", callback: (($obj: WM, object: any, p0: number, p1: any) => void)): number
    emit(sigName: "show-window-menu", object: any, p0: number, p1: any): void
    connect(sigName: "size-change", callback: (($obj: WM, object: any, p0: any, p1: any, p2: any) => void)): number
    connect_after(sigName: "size-change", callback: (($obj: WM, object: any, p0: any, p1: any, p2: any) => void)): number
    emit(sigName: "size-change", object: any, p0: any, p1: any, p2: any): void
    connect(sigName: "size-changed", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "size-changed", object: any): void
    connect(sigName: "switch-workspace", callback: (($obj: WM, object: number, p0: number, p1: number) => void)): number
    connect_after(sigName: "switch-workspace", callback: (($obj: WM, object: number, p0: number, p1: number) => void)): number
    emit(sigName: "switch-workspace", object: number, p0: number, p1: number): void
    connect(sigName: "unminimize", callback: (($obj: WM, object: any) => void)): number
    connect_after(sigName: "unminimize", callback: (($obj: WM, object: any) => void)): number
    emit(sigName: "unminimize", object: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WM_ConstructProps)
    _init (config?: WM_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(plugin: any): WM
    static $gtype: GObject.Type
}
export class WindowPreview {
    /* Properties of Shell.WindowPreview */
    window_container: any
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
    get_theme_node(): St.ThemeNode
    get_track_hover(): boolean
    has_style_class_name(style_class: string): boolean
    has_style_pseudo_class(pseudo_class: string): boolean
    navigate_focus(from: any, direction: St.DirectionType, wrap_around: boolean): boolean
    paint_background(paint_context: any): void
    peek_theme_node(): St.ThemeNode
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
    vfunc_navigate_focus(from: any, direction: St.DirectionType): boolean
    vfunc_popup_menu(): void
    vfunc_style_changed(): void
    /* Signals of St.Widget */
    connect(sigName: "popup-menu", callback: (($obj: WindowPreview) => void)): number
    connect_after(sigName: "popup-menu", callback: (($obj: WindowPreview) => void)): number
    emit(sigName: "popup-menu"): void
    connect(sigName: "style-changed", callback: (($obj: WindowPreview) => void)): number
    connect_after(sigName: "style-changed", callback: (($obj: WindowPreview) => void)): number
    emit(sigName: "style-changed"): void
    static name: string
}
export class WindowPreviewLayout {
    /* Properties of Shell.WindowPreviewLayout */
    readonly bounding_box: any
    /* Methods of Shell.WindowPreviewLayout */
    add_window(window: any): any
    get_windows(): any[]
    remove_window(window: any): void
    static name: string
}
export interface WindowTracker_ConstructProps extends GObject.Object_ConstructProps {
}
export class WindowTracker {
    /* Properties of Shell.WindowTracker */
    readonly focus_app: App
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Shell.WindowTracker */
    get_app_from_pid(pid: number): App
    get_startup_sequences(): any[]
    get_window_app(metawin: any): App
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
    /* Signals of Shell.WindowTracker */
    connect(sigName: "startup-sequence-changed", callback: (($obj: WindowTracker, object: any) => void)): number
    connect_after(sigName: "startup-sequence-changed", callback: (($obj: WindowTracker, object: any) => void)): number
    emit(sigName: "startup-sequence-changed", object: any): void
    connect(sigName: "tracked-windows-changed", callback: (($obj: WindowTracker) => void)): number
    connect_after(sigName: "tracked-windows-changed", callback: (($obj: WindowTracker) => void)): number
    emit(sigName: "tracked-windows-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::focus-app", callback: (($obj: WindowTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-app", callback: (($obj: WindowTracker, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WindowTracker_ConstructProps)
    _init (config?: WindowTracker_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): WindowTracker
    static $gtype: GObject.Type
}
export abstract class AppClass {
    /* Fields of Shell.AppClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AppSystemClass {
    /* Fields of Shell.AppSystemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class AppUsageClass {
    /* Fields of Shell.AppUsageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BlurEffectClass {
    /* Fields of Shell.BlurEffectClass */
    parent_class: any
    static name: string
}
export abstract class EmbeddedWindowClass {
    /* Fields of Shell.EmbeddedWindowClass */
    parent_class: Gtk.WindowClass
    static name: string
}
export abstract class GLSLEffectClass {
    /* Fields of Shell.GLSLEffectClass */
    parent_class: any
    base_pipeline: any
    build_pipeline: (effect: GLSLEffect) => void
    static name: string
}
export abstract class GlobalClass {
    /* Fields of Shell.GlobalClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class GtkEmbedClass {
    /* Fields of Shell.GtkEmbedClass */
    parent_class: any
    static name: string
}
export abstract class InvertLightnessEffectClass {
    static name: string
}
export abstract class KeyringPromptClass {
    /* Fields of Shell.KeyringPromptClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MemoryInfo {
    /* Fields of Shell.MemoryInfo */
    glibc_uordblks: number
    js_bytes: number
    gjs_boxed: number
    gjs_gobject: number
    gjs_function: number
    gjs_closure: number
    last_gc_seconds_ago: number
    static name: string
}
export abstract class MountOperationClass {
    /* Fields of Shell.MountOperationClass */
    parent_class: Gio.MountOperationClass
    static name: string
}
export abstract class NetworkAgentClass {
    static name: string
}
export class NetworkAgentPrivate {
    static name: string
}
export abstract class PerfLogClass {
    /* Fields of Shell.PerfLogClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class PolkitAuthenticationAgentClass {
    /* Fields of Shell.PolkitAuthenticationAgentClass */
    parent_class: PolkitAgent.ListenerClass
    static name: string
}
export abstract class ScreenshotClass {
    /* Fields of Shell.ScreenshotClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SecureTextBufferClass {
    /* Fields of Shell.SecureTextBufferClass */
    parent_class: any
    static name: string
}
export abstract class SquareBinClass {
    /* Fields of Shell.SquareBinClass */
    parent_class: St.BinClass
    static name: string
}
export abstract class StackClass {
    /* Fields of Shell.StackClass */
    parent_class: St.WidgetClass
    static name: string
}
export abstract class TrayIconClass {
    /* Fields of Shell.TrayIconClass */
    parent_class: GtkEmbedClass
    static name: string
}
export abstract class TrayManagerClass {
    /* Fields of Shell.TrayManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class WMClass {
    /* Fields of Shell.WMClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class WindowPreviewClass {
    /* Fields of Shell.WindowPreviewClass */
    parent_class: St.WidgetClass
    static name: string
}
export abstract class WindowPreviewLayoutClass {
    /* Fields of Shell.WindowPreviewLayoutClass */
    parent_class: any
    static name: string
}
export class WindowPreviewLayoutPrivate {
    static name: string
}
export abstract class WindowTrackerClass {
    /* Fields of Shell.WindowTrackerClass */
    parent_class: GObject.ObjectClass
    static name: string
}