/**
 * Cogl-7
 */

import * as Gjs from './Gjs';
import * as cairo from './cairo-1.0';
import * as Graphene from './Graphene-1.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as GL from './GL-1.0';

export enum AttributeType {
    BYTE,
    UNSIGNED_BYTE,
    SHORT,
    UNSIGNED_SHORT,
    FLOAT,
}
export enum BitmapError {
    FAILED,
    UNKNOWN_TYPE,
    CORRUPT_IMAGE,
}
export enum BlendStringError {
    PARSE_ERROR,
    ARGUMENT_PARSE_ERROR,
    INVALID_ERROR,
    GPU_UNSUPPORTED_ERROR,
}
export enum DepthTestFunction {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum FeatureID {
    OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_READ,
    OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE,
    OGL_FEATURE_ID_SWAP_BUFFERS_EVENT,
    OGL_FEATURE_ID_PRESENTATION_TIME,
    OGL_FEATURE_ID_FENCE,
    OGL_FEATURE_ID_TEXTURE_RG,
    OGL_FEATURE_ID_BUFFER_AGE,
    OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL,
    OGL_FEATURE_ID_BLIT_FRAMEBUFFER,
}
export enum FilterReturn {
    CONTINUE,
    REMOVE,
}
export enum FrameEvent {
    SYNC,
    COMPLETE,
}
export enum FramebufferError {
    FRAMEBUFFER_ERROR_ALLOCATE,
}
export enum GraphicsResetStatus {
    NO_ERROR,
    GUILTY_CONTEXT_RESET,
    INNOCENT_CONTEXT_RESET,
    UNKNOWN_CONTEXT_RESET,
    PURGED_CONTEXT_RESET,
}
export enum IndicesType {
    BYTE,
    SHORT,
    INT,
}
export enum MaterialAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum MaterialFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum MaterialWrapMode {
    REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum PipelineAlphaFunc {
    NEVER,
    LESS,
    EQUAL,
    LEQUAL,
    GREATER,
    NOTEQUAL,
    GEQUAL,
    ALWAYS,
}
export enum PipelineCullFaceMode {
    NONE,
    FRONT,
    BACK,
    BOTH,
}
export enum PipelineFilter {
    NEAREST,
    LINEAR,
    NEAREST_MIPMAP_NEAREST,
    LINEAR_MIPMAP_NEAREST,
    NEAREST_MIPMAP_LINEAR,
    LINEAR_MIPMAP_LINEAR,
}
export enum PipelineWrapMode {
    REPEAT,
    MIRRORED_REPEAT,
    CLAMP_TO_EDGE,
    AUTOMATIC,
}
export enum RendererError {
    XLIB_DISPLAY_OPEN,
    BAD_CONSTRAINT,
}
export enum ShaderType {
    VERTEX,
    FRAGMENT,
}
export enum StereoMode {
    BOTH,
    LEFT,
    RIGHT,
}
export enum SystemError {
    UNSUPPORTED,
    NO_MEMORY,
}
export enum TextureComponents {
    A,
    RG,
    RGB,
    RGBA,
    DEPTH,
}
export enum TextureError {
    SIZE,
    FORMAT,
    BAD_PARAMETER,
    TYPE,
}
export enum VerticesMode {
    POINTS,
    LINES,
    LINE_LOOP,
    LINE_STRIP,
    TRIANGLES,
    TRIANGLE_STRIP,
    TRIANGLE_FAN,
}
export enum Winding {
    CLOCKWISE,
    COUNTER_CLOCKWISE,
}
export enum WinsysFeature {
    MULTIPLE_ONSCREEN,
    VBLANK_COUNTER,
    VBLANK_WAIT,
    TEXTURE_FROM_PIXMAP,
    SWAP_BUFFERS_EVENT,
    SWAP_REGION,
    SWAP_REGION_THROTTLE,
    SWAP_REGION_SYNCHRONIZED,
    BUFFER_AGE,
    SYNC_AND_COMPLETE_EVENT,
    N_FEATURES,
}
export enum BufferBit {
    COLOR,
    DEPTH,
    STENCIL,
}
export enum BufferTarget {
    WINDOW_BUFFER,
    OFFSCREEN_BUFFER,
}
export enum EglImageFlags {
    NONE,
    NO_GET_DATA,
}
export enum PixelFormat {
    ANY,
    A_8,
    RGB_565,
    RGBA_4444,
    RGBA_5551,
    YUV,
    G_8,
    RG_88,
    RGB_888,
    BGR_888,
    RGBA_8888,
    BGRA_8888,
    ARGB_8888,
    ABGR_8888,
    RGBA_1010102,
    BGRA_1010102,
    ARGB_2101010,
    ABGR_2101010,
    RGBA_FP_16161616,
    BGRA_FP_16161616,
    ARGB_FP_16161616,
    ABGR_FP_16161616,
    RGBA_8888_PRE,
    BGRA_8888_PRE,
    ARGB_8888_PRE,
    ABGR_8888_PRE,
    RGBA_4444_PRE,
    RGBA_5551_PRE,
    RGBA_1010102_PRE,
    BGRA_1010102_PRE,
    ARGB_2101010_PRE,
    ABGR_2101010_PRE,
    RGBA_FP_16161616_PRE,
    BGRA_FP_16161616_PRE,
    ARGB_FP_16161616_PRE,
    ABGR_FP_16161616_PRE,
    DEPTH_16,
    DEPTH_32,
    DEPTH_24_STENCIL_8,
}
export enum ReadPixelsFlags {
    READ_PIXELS_COLOR_BUFFER,
}
export enum TextureFlags {
    NONE,
    NO_AUTO_MIPMAP,
    NO_SLICING,
    NO_ATLAS,
}
export const AFIRST_BIT: number
export const A_BIT: number
export const BGR_BIT: number
export const DEPTH_BIT: number
export const PIXEL_FORMAT_MAX_PLANES: number
export const PREMULT_BIT: number
export const STENCIL_BIT: number
export const TEXTURE_MAX_WASTE: number
export function blend_string_error_quark(): number
export function blit_framebuffer(src: Framebuffer, dest: Framebuffer, src_x: number, src_y: number, dst_x: number, dst_y: number, width: number, height: number): boolean
export function clutter_winsys_has_feature_CLUTTER(feature: WinsysFeature): boolean
export function color_equal(v1?: object | null, v2?: object | null): boolean
export function color_init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
export function create_program(): Handle
export function create_shader(shader_type: ShaderType): Handle
export function debug_matrix_print(matrix: Matrix): void
export function debug_object_foreach_type(func: DebugObjectForeachTypeCallback): void
export function debug_object_print_instances(): void
export function flush(): void
export function foreach_feature(context: Context, callback: FeatureCallback): void
export function framebuffer_error_quark(): number
export function get_backface_culling_enabled(): boolean
export function get_clock_time(context: Context): number
export function get_depth_test_enabled(): boolean
export function get_graphics_reset_status(context: Context): GraphicsResetStatus
export function get_option_group(): GLib.OptionGroup
export function gtype_matrix_get_type(): GObject.Type
export function handle_get_type(): GObject.Type
export function has_feature(context: Context, feature: FeatureID): boolean
export function is_bitmap(object?: object | null): boolean
export function is_context(object?: object | null): boolean
export function is_frame_info(object?: object | null): boolean
export function is_framebuffer(object?: object | null): boolean
export function is_offscreen(object?: object | null): boolean
export function is_onscreen(object?: object | null): boolean
export function is_pipeline(object?: object | null): boolean
export function is_program(handle: Handle): boolean
export function is_shader(handle: Handle): boolean
export function is_texture(object?: object | null): boolean
export function is_texture_2d(object?: object | null): boolean
export function is_texture_2d_sliced(object?: object | null): boolean
export function matrix_equal(v1?: object | null, v2?: object | null): boolean
export function pixel_format_get_bytes_per_pixel(format: PixelFormat, plane: number): number
export function pixel_format_get_n_planes(format: PixelFormat): number
export function pixel_format_to_string(format: PixelFormat): string
export function program_attach_shader(program_handle: Handle, shader_handle: Handle): void
export function program_get_uniform_location(handle: Handle, uniform_name: string): number
export function program_link(handle: Handle): void
export function program_set_uniform_1f(program: Handle, uniform_location: number, value: number): void
export function program_set_uniform_1i(program: Handle, uniform_location: number, value: number): void
export function program_set_uniform_float(program: Handle, uniform_location: number, n_components: number, value: number[]): void
export function program_set_uniform_int(program: Handle, uniform_location: number, n_components: number, value: number[]): void
export function program_set_uniform_matrix(program: Handle, uniform_location: number, dimensions: number, transpose: boolean, value: number[]): void
export function set_backface_culling_enabled(setting: boolean): void
export function set_depth_test_enabled(setting: boolean): void
export function set_tracing_disabled_on_thread(main_context: GLib.MainContext): void
export function set_tracing_enabled_on_thread(main_context: GLib.MainContext, group: string, filename: string): void
export function set_tracing_enabled_on_thread_with_fd(main_context: GLib.MainContext, group: string, fd: number): void
export function shader_get_type(handle: Handle): ShaderType
export function shader_source(shader: Handle, source: string): void
export function texture_error_quark(): number
export function texture_new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture
export function texture_new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): Texture
export function texture_new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture
export function texture_new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture
export function trace_end(head: TraceHead): void
export function x11_onscreen_get_window_xid(onscreen: Onscreen): number
export interface DebugObjectForeachTypeCallback {
    (info: DebugObjectTypeInfo): void
}
export interface FeatureCallback {
    (feature: FeatureID): void
}
export interface FrameCallback {
    (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void
}
export interface OnscreenDirtyCallback {
    (onscreen: Onscreen, info: OnscreenDirtyInfo): void
}
export interface OnscreenResizeCallback {
    (onscreen: Onscreen, width: number, height: number): void
}
export interface PipelineLayerCallback {
    (pipeline: Pipeline, layer_index: number): boolean
}
export interface Texture2DEGLImageExternalAlloc {
    (tex_2d: Texture2D): boolean
}
export class Framebuffer {
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discard_buffers(buffers: number): void
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_alpha_bits(): number
    get_blue_bits(): number
    get_context(): Context
    get_depth_bits(): number
    get_depth_write_enabled(): boolean
    get_dither_enabled(): boolean
    get_green_bits(): number
    get_height(): number
    get_is_stereo(): boolean
    get_modelview_matrix(): /* matrix */ Matrix
    get_projection_matrix(): /* matrix */ Matrix
    get_red_bits(): number
    get_samples_per_pixel(): number
    get_stereo_mode(): StereoMode
    get_viewport4fv(): /* viewport */ number[]
    get_viewport_height(): number
    get_viewport_width(): number
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    identity_matrix(): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop_clip(): void
    pop_matrix(): void
    push_matrix(): void
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    push_region_clip(region: cairo.Region): void
    push_scissor_clip(x: number, y: number, width: number, height: number): void
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolve_samples(): void
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    set_depth_write_enabled(depth_write_enabled: boolean): void
    set_dither_enabled(dither_enabled: boolean): void
    set_modelview_matrix(matrix: Matrix): void
    set_projection_matrix(matrix: Matrix): void
    set_samples_per_pixel(samples_per_pixel: number): void
    set_stereo_mode(stereo_mode: StereoMode): void
    set_viewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): number
}
export class Texture {
    /* Methods of Cogl.Texture */
    allocate(): boolean
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data?: Gjs.byteArray.ByteArray | null): number
    get_gl_texture(): [ /* returnType */ boolean, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): boolean
    get_width(): number
    is_sliced(): boolean
    new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray, level: number): boolean
    set_premultiplied(premultiplied: boolean): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): boolean
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): number
    static new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): Texture
    static new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture
}
export class Bitmap {
    /* Methods of Cogl.Bitmap */
    get_format(): PixelFormat
    get_height(): number
    get_rowstride(): number
    get_width(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_file(filename: string): Bitmap
    static error_quark(): number
    static get_size_from_file(filename: string): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
}
export class Context {
    /* Methods of Cogl.Context */
    get_named_pipeline(key: PipelineKey): Pipeline
    is_hardware_accelerated(): boolean
    set_named_pipeline(key: PipelineKey, pipeline?: Pipeline | null): void
    static name: string
}
export class FrameInfo {
    /* Methods of Cogl.FrameInfo */
    get_frame_counter(): number
    get_presentation_time(): number
    get_refresh_rate(): number
    static name: string
}
export class Object {
    static name: string
}
export class Offscreen {
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discard_buffers(buffers: number): void
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_alpha_bits(): number
    get_blue_bits(): number
    get_context(): Context
    get_depth_bits(): number
    get_depth_write_enabled(): boolean
    get_dither_enabled(): boolean
    get_green_bits(): number
    get_height(): number
    get_is_stereo(): boolean
    get_modelview_matrix(): /* matrix */ Matrix
    get_projection_matrix(): /* matrix */ Matrix
    get_red_bits(): number
    get_samples_per_pixel(): number
    get_stereo_mode(): StereoMode
    get_viewport4fv(): /* viewport */ number[]
    get_viewport_height(): number
    get_viewport_width(): number
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    identity_matrix(): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop_clip(): void
    pop_matrix(): void
    push_matrix(): void
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    push_region_clip(region: cairo.Region): void
    push_scissor_clip(x: number, y: number, width: number, height: number): void
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolve_samples(): void
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    set_depth_write_enabled(depth_write_enabled: boolean): void
    set_dither_enabled(dither_enabled: boolean): void
    set_modelview_matrix(matrix: Matrix): void
    set_projection_matrix(matrix: Matrix): void
    set_samples_per_pixel(samples_per_pixel: number): void
    set_stereo_mode(stereo_mode: StereoMode): void
    set_viewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_to_texture(texture: Texture): Offscreen
    static new_with_texture(texture: Texture): Offscreen
    static error_quark(): number
}
export class Onscreen {
    /* Methods of Cogl.Onscreen */
    add_dirty_callback(callback: OnscreenDirtyCallback, destroy?: UserDataDestroyCallback | null): OnscreenDirtyClosure
    add_frame_callback(callback: FrameCallback, destroy?: UserDataDestroyCallback | null): FrameClosure
    add_resize_callback(callback: OnscreenResizeCallback, destroy?: UserDataDestroyCallback | null): OnscreenResizeClosure
    get_buffer_age(): number
    get_frame_counter(): number
    get_resizable(): boolean
    hide(): void
    remove_dirty_callback(closure: OnscreenDirtyClosure): void
    remove_frame_callback(closure: FrameClosure): void
    remove_resize_callback(closure: OnscreenResizeClosure): void
    set_resizable(resizable: boolean): void
    show(): void
    swap_buffers(frame_info: FrameInfo): void
    swap_buffers_with_damage(rectangles: number, n_rectangles: number, info: FrameInfo): void
    swap_region(rectangles: number, n_rectangles: number, info: FrameInfo): void
    /* Methods of Cogl.Framebuffer */
    allocate(): boolean
    clear(buffers: number, color: Color): void
    clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void
    discard_buffers(buffers: number): void
    draw_multitextured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, tex_coords: number[], tex_coords_len: number): void
    draw_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number): void
    draw_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    draw_textured_rectangle(pipeline: Pipeline, x_1: number, y_1: number, x_2: number, y_2: number, s_1: number, t_1: number, s_2: number, t_2: number): void
    draw_textured_rectangles(pipeline: Pipeline, coordinates: number[], n_rectangles: number): void
    finish(): void
    flush(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_alpha_bits(): number
    get_blue_bits(): number
    get_context(): Context
    get_depth_bits(): number
    get_depth_write_enabled(): boolean
    get_dither_enabled(): boolean
    get_green_bits(): number
    get_height(): number
    get_is_stereo(): boolean
    get_modelview_matrix(): /* matrix */ Matrix
    get_projection_matrix(): /* matrix */ Matrix
    get_red_bits(): number
    get_samples_per_pixel(): number
    get_stereo_mode(): StereoMode
    get_viewport4fv(): /* viewport */ number[]
    get_viewport_height(): number
    get_viewport_width(): number
    get_viewport_x(): number
    get_viewport_y(): number
    get_width(): number
    identity_matrix(): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    pop_clip(): void
    pop_matrix(): void
    push_matrix(): void
    push_rectangle_clip(x_1: number, y_1: number, x_2: number, y_2: number): void
    push_region_clip(region: cairo.Region): void
    push_scissor_clip(x: number, y: number, width: number, height: number): void
    read_pixels(x: number, y: number, width: number, height: number, format: PixelFormat, pixels: number): boolean
    read_pixels_into_bitmap(x: number, y: number, source: ReadPixelsFlags, bitmap: Bitmap): boolean
    resolve_samples(): void
    resolve_samples_region(x: number, y: number, width: number, height: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Graphene.Euler): void
    scale(x: number, y: number, z: number): void
    set_depth_write_enabled(depth_write_enabled: boolean): void
    set_dither_enabled(dither_enabled: boolean): void
    set_modelview_matrix(matrix: Matrix): void
    set_projection_matrix(matrix: Matrix): void
    set_samples_per_pixel(samples_per_pixel: number): void
    set_stereo_mode(stereo_mode: StereoMode): void
    set_viewport(x: number, y: number, width: number, height: number): void
    transform(matrix: Matrix): void
    translate(x: number, y: number, z: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): number
}
export class Pipeline {
    /* Methods of Cogl.Pipeline */
    copy(): Pipeline
    foreach_layer(callback: PipelineLayerCallback): void
    get_alpha_test_function(): PipelineAlphaFunc
    get_alpha_test_reference(): number
    get_color(): /* color */ Color
    get_cull_face_mode(): PipelineCullFaceMode
    get_front_face_winding(): Winding
    get_layer_mag_filter(layer_index: number): PipelineFilter
    get_layer_min_filter(layer_index: number): PipelineFilter
    get_layer_point_sprite_coords_enabled(layer_index: number): boolean
    get_layer_texture(layer_index: number): Texture
    get_layer_wrap_mode_s(layer_index: number): PipelineWrapMode
    get_layer_wrap_mode_t(layer_index: number): PipelineWrapMode
    get_n_layers(): number
    get_per_vertex_point_size(): boolean
    get_point_size(): number
    get_uniform_location(uniform_name: string): number
    get_user_program(): Handle
    remove_layer(layer_index: number): void
    set_alpha_test_function(alpha_func: PipelineAlphaFunc, alpha_reference: number): void
    set_blend(blend_string: string): boolean
    set_blend_constant(constant_color: Color): void
    set_color(color: Color): void
    set_color4f(red: number, green: number, blue: number, alpha: number): void
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    set_cull_face_mode(cull_face_mode: PipelineCullFaceMode): void
    set_front_face_winding(front_winding: Winding): void
    set_layer_combine(layer_index: number, blend_string: string): boolean
    set_layer_combine_constant(layer_index: number, constant: Color): void
    set_layer_filters(layer_index: number, min_filter: PipelineFilter, mag_filter: PipelineFilter): void
    set_layer_matrix(layer_index: number, matrix: Matrix): void
    set_layer_max_mipmap_level(layer: number, max_level: number): void
    set_layer_null_texture(layer_index: number): void
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean
    set_layer_texture(layer_index: number, texture: Texture): void
    set_layer_wrap_mode(layer_index: number, mode: PipelineWrapMode): void
    set_layer_wrap_mode_s(layer_index: number, mode: PipelineWrapMode): void
    set_layer_wrap_mode_t(layer_index: number, mode: PipelineWrapMode): void
    set_per_vertex_point_size(enable: boolean): boolean
    set_point_size(point_size: number): void
    set_uniform_1f(uniform_location: number, value: number): void
    set_uniform_1i(uniform_location: number, value: number): void
    set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void
    set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void
    set_uniform_matrix(uniform_location: number, dimensions: number, count: number, transpose: boolean, value: number): void
    set_user_program(program: Handle): void
    static name: string
    static new(context: Context): Pipeline
    constructor(context: Context)
    /* Static methods and pseudo-constructors */
    static new(context: Context): Pipeline
}
export class Texture2D {
    /* Methods of Cogl.Texture2D */
    egl_image_external_alloc_finish(user_data: object | null, destroy: GLib.DestroyNotify): void
    egl_image_external_bind(): void
    /* Methods of Cogl.Texture */
    allocate(): boolean
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data?: Gjs.byteArray.ByteArray | null): number
    get_gl_texture(): [ /* returnType */ boolean, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): boolean
    get_width(): number
    is_sliced(): boolean
    new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray, level: number): boolean
    set_premultiplied(premultiplied: boolean): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): boolean
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bitmap: Bitmap): Texture2D
    static error_quark(): number
    static new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): Texture
    static new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture
}
export class Texture2DSliced {
    /* Methods of Cogl.Texture */
    allocate(): boolean
    get_components(): TextureComponents
    get_data(format: PixelFormat, rowstride: number, data?: Gjs.byteArray.ByteArray | null): number
    get_gl_texture(): [ /* returnType */ boolean, /* out_gl_handle */ number | null, /* out_gl_target */ number | null ]
    get_height(): number
    get_max_waste(): number
    get_premultiplied(): boolean
    get_width(): number
    is_sliced(): boolean
    new_from_sub_texture(sub_x: number, sub_y: number, sub_width: number, sub_height: number): Texture
    set_components(components: TextureComponents): void
    set_data(format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray, level: number): boolean
    set_premultiplied(premultiplied: boolean): void
    set_region(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, width: number, height: number, format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): boolean
    set_region_from_bitmap(src_x: number, src_y: number, dst_x: number, dst_y: number, dst_width: number, dst_height: number, bitmap: Bitmap): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_bitmap(bmp: Bitmap, max_waste: number): Texture2DSliced
    static error_quark(): number
    static new_from_bitmap(bitmap: Bitmap, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_from_data(width: number, height: number, flags: TextureFlags, format: PixelFormat, internal_format: PixelFormat, rowstride: number, data: Gjs.byteArray.ByteArray): Texture
    static new_from_file(filename: string, flags: TextureFlags, internal_format: PixelFormat): Texture
    static new_with_size(width: number, height: number, flags: TextureFlags, internal_format: PixelFormat): Texture
}
export class Color {
    /* Methods of Cogl.Color */
    copy(): Color
    free(): void
    get_alpha(): number
    get_alpha_byte(): number
    get_alpha_float(): number
    get_blue(): number
    get_blue_byte(): number
    get_blue_float(): number
    get_green(): number
    get_green_byte(): number
    get_green_float(): number
    get_red(): number
    get_red_byte(): number
    get_red_float(): number
    init_from_4f(red: number, green: number, blue: number, alpha: number): void
    init_from_4fv(color_array: number): void
    init_from_4ub(red: number, green: number, blue: number, alpha: number): void
    premultiply(): void
    set_alpha(alpha: number): void
    set_alpha_byte(alpha: number): void
    set_alpha_float(alpha: number): void
    set_blue(blue: number): void
    set_blue_byte(blue: number): void
    set_blue_float(blue: number): void
    set_green(green: number): void
    set_green_byte(green: number): void
    set_green_float(green: number): void
    set_red(red: number): void
    set_red_byte(red: number): void
    set_red_float(red: number): void
    to_hsl(): [ /* hue */ number, /* saturation */ number, /* luminance */ number ]
    unpremultiply(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
    static equal(v1?: object | null, v2?: object | null): boolean
    static init_from_hsl(hue: number, saturation: number, luminance: number): /* color */ Color
}
export class DebugObjectTypeInfo {
    /* Fields of Cogl.DebugObjectTypeInfo */
    name: string
    instance_count: number
    static name: string
}
export class DmaBufHandle {
    static name: string
}
export class FrameClosure {
    static name: string
}
export class Material {
    /* Methods of Cogl.Material */
    set_alpha_test_function(alpha_func: MaterialAlphaFunc, alpha_reference: number): void
    set_blend(blend_string: string): boolean
    set_blend_constant(constant_color: Color): void
    set_color(color: Color): void
    set_color4ub(red: number, green: number, blue: number, alpha: number): void
    set_layer(layer_index: number, texture: Handle): void
    set_layer_combine(layer_index: number, blend_string: string): boolean
    set_layer_combine_constant(layer_index: number, constant: Color): void
    set_layer_filters(layer_index: number, min_filter: MaterialFilter, mag_filter: MaterialFilter): void
    set_layer_matrix(layer_index: number, matrix: Matrix): void
    set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean
    set_point_size(point_size: number): void
    set_user_program(program: Handle): void
    static name: string
    static new(): Material
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Material
}
export class MaterialLayer {
    static name: string
}
export class Matrix {
    /* Fields of Cogl.Matrix */
    xx: number
    yx: number
    zx: number
    wx: number
    xy: number
    yy: number
    zy: number
    wy: number
    xz: number
    yz: number
    zz: number
    wz: number
    xw: number
    yw: number
    zw: number
    ww: number
    /* Methods of Cogl.Matrix */
    copy(): Matrix
    free(): void
    frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void
    get_array(): number
    get_inverse(): [ /* returnType */ boolean, /* inverse */ Matrix ]
    init_from_array(array: number): void
    init_from_euler(euler: Graphene.Euler): void
    init_identity(): void
    init_translation(tx: number, ty: number, tz: number): void
    is_identity(): boolean
    look_at(eye_position_x: number, eye_position_y: number, eye_position_z: number, object_x: number, object_y: number, object_z: number, world_up_x: number, world_up_y: number, world_up_z: number): void
    multiply(a: Matrix, b: Matrix): void
    orthographic(x_1: number, y_1: number, x_2: number, y_2: number, near: number, far: number): void
    perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void
    project_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
    rotate(angle: number, x: number, y: number, z: number): void
    rotate_euler(euler: Graphene.Euler): void
    scale(sx: number, sy: number, sz: number): void
    transform_point(x: number, y: number, z: number, w: number): [ /* x */ number, /* y */ number, /* z */ number, /* w */ number ]
    transform_points(n_components: number, stride_in: number, points_in: object | null, stride_out: number, points_out: object | null, n_points: number): void
    translate(x: number, y: number, z: number): void
    transpose(): void
    view_2d_in_frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
    view_2d_in_perspective(fov_y: number, aspect: number, z_near: number, z_2d: number, width_2d: number, height_2d: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static equal(v1?: object | null, v2?: object | null): boolean
}
export class OnscreenDirtyClosure {
    static name: string
}
export class OnscreenDirtyInfo {
    /* Fields of Cogl.OnscreenDirtyInfo */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export class OnscreenResizeClosure {
    static name: string
}
export class Scanout {
    static name: string
}
export class TextureVertex {
    /* Fields of Cogl.TextureVertex */
    x: number
    y: number
    z: number
    tx: number
    ty: number
    color: Color
    static name: string
}
export class TraceContext {
    static name: string
}
export class TraceHead {
    /* Fields of Cogl.TraceHead */
    begin_time: number
    name: string
    static name: string
}
export class UserDataKey {
    /* Fields of Cogl.UserDataKey */
    unused: number
    static name: string
}
export class _ColorSizeCheck {
    /* Fields of Cogl._ColorSizeCheck */
    compile_time_assert_CoglColor_size: number[]
    static name: string
}
export class _MatrixSizeCheck {
    /* Fields of Cogl._MatrixSizeCheck */
    compile_time_assert_CoglMatrix_size: number[]
    static name: string
}
export class _TextureVertexSizeCheck {
    /* Fields of Cogl._TextureVertexSizeCheck */
    compile_time_assert_CoglTextureVertex_size: number[]
    static name: string
}
type Angle = number
type Handle = object
type PipelineKey = string
type UserDataDestroyCallback = GLib.DestroyNotify