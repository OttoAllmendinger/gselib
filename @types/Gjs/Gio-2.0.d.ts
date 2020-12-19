/**
 * Gio-2.0
 */

import * as Gjs from './Gjs';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';

export enum BusType {
    STARTER,
    NONE,
    SYSTEM,
    SESSION,
}
export enum ConverterResult {
    ERROR,
    CONVERTED,
    FINISHED,
    FLUSHED,
}
export enum CredentialsType {
    INVALID,
    LINUX_UCRED,
    FREEBSD_CMSGCRED,
    OPENBSD_SOCKPEERCRED,
    SOLARIS_UCRED,
    NETBSD_UNPCBID,
    APPLE_XUCRED,
}
export enum DBusError {
    FAILED,
    NO_MEMORY,
    SERVICE_UNKNOWN,
    NAME_HAS_NO_OWNER,
    NO_REPLY,
    IO_ERROR,
    BAD_ADDRESS,
    NOT_SUPPORTED,
    LIMITS_EXCEEDED,
    ACCESS_DENIED,
    AUTH_FAILED,
    NO_SERVER,
    TIMEOUT,
    NO_NETWORK,
    ADDRESS_IN_USE,
    DISCONNECTED,
    INVALID_ARGS,
    FILE_NOT_FOUND,
    FILE_EXISTS,
    UNKNOWN_METHOD,
    TIMED_OUT,
    MATCH_RULE_NOT_FOUND,
    MATCH_RULE_INVALID,
    SPAWN_EXEC_FAILED,
    SPAWN_FORK_FAILED,
    SPAWN_CHILD_EXITED,
    SPAWN_CHILD_SIGNALED,
    SPAWN_FAILED,
    SPAWN_SETUP_FAILED,
    SPAWN_CONFIG_INVALID,
    SPAWN_SERVICE_INVALID,
    SPAWN_SERVICE_NOT_FOUND,
    SPAWN_PERMISSIONS_INVALID,
    SPAWN_FILE_INVALID,
    SPAWN_NO_MEMORY,
    UNIX_PROCESS_ID_UNKNOWN,
    INVALID_SIGNATURE,
    INVALID_FILE_CONTENT,
    SELINUX_SECURITY_CONTEXT_UNKNOWN,
    ADT_AUDIT_DATA_UNKNOWN,
    OBJECT_PATH_IN_USE,
    UNKNOWN_OBJECT,
    UNKNOWN_INTERFACE,
    UNKNOWN_PROPERTY,
    PROPERTY_READ_ONLY,
}
export enum DBusMessageByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
}
export enum DBusMessageHeaderField {
    INVALID,
    PATH,
    INTERFACE,
    MEMBER,
    ERROR_NAME,
    REPLY_SERIAL,
    DESTINATION,
    SENDER,
    SIGNATURE,
    NUM_UNIX_FDS,
}
export enum DBusMessageType {
    INVALID,
    METHOD_CALL,
    METHOD_RETURN,
    ERROR,
    SIGNAL,
}
export enum DataStreamByteOrder {
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    HOST_ENDIAN,
}
export enum DataStreamNewlineType {
    LF,
    CR,
    CR_LF,
    ANY,
}
export enum DriveStartStopType {
    UNKNOWN,
    SHUTDOWN,
    NETWORK,
    MULTIDISK,
    PASSWORD,
}
export enum EmblemOrigin {
    UNKNOWN,
    DEVICE,
    LIVEMETADATA,
    TAG,
}
export enum FileAttributeStatus {
    UNSET,
    SET,
    ERROR_SETTING,
}
export enum FileAttributeType {
    INVALID,
    STRING,
    BYTE_STRING,
    BOOLEAN,
    UINT32,
    INT32,
    UINT64,
    INT64,
    OBJECT,
    STRINGV,
}
export enum FileMonitorEvent {
    CHANGED,
    CHANGES_DONE_HINT,
    DELETED,
    CREATED,
    ATTRIBUTE_CHANGED,
    PRE_UNMOUNT,
    UNMOUNTED,
    MOVED,
    RENAMED,
    MOVED_IN,
    MOVED_OUT,
}
export enum FileType {
    UNKNOWN,
    REGULAR,
    DIRECTORY,
    SYMBOLIC_LINK,
    SPECIAL,
    SHORTCUT,
    MOUNTABLE,
}
export enum FilesystemPreviewType {
    IF_ALWAYS,
    IF_LOCAL,
    NEVER,
}
export enum IOErrorEnum {
    FAILED,
    NOT_FOUND,
    EXISTS,
    IS_DIRECTORY,
    NOT_DIRECTORY,
    NOT_EMPTY,
    NOT_REGULAR_FILE,
    NOT_SYMBOLIC_LINK,
    NOT_MOUNTABLE_FILE,
    FILENAME_TOO_LONG,
    INVALID_FILENAME,
    TOO_MANY_LINKS,
    NO_SPACE,
    INVALID_ARGUMENT,
    PERMISSION_DENIED,
    NOT_SUPPORTED,
    NOT_MOUNTED,
    ALREADY_MOUNTED,
    CLOSED,
    CANCELLED,
    PENDING,
    READ_ONLY,
    CANT_CREATE_BACKUP,
    WRONG_ETAG,
    TIMED_OUT,
    WOULD_RECURSE,
    BUSY,
    WOULD_BLOCK,
    HOST_NOT_FOUND,
    WOULD_MERGE,
    FAILED_HANDLED,
    TOO_MANY_OPEN_FILES,
    NOT_INITIALIZED,
    ADDRESS_IN_USE,
    PARTIAL_INPUT,
    INVALID_DATA,
    DBUS_ERROR,
    HOST_UNREACHABLE,
    NETWORK_UNREACHABLE,
    CONNECTION_REFUSED,
    PROXY_FAILED,
    PROXY_AUTH_FAILED,
    PROXY_NEED_AUTH,
    PROXY_NOT_ALLOWED,
    BROKEN_PIPE,
    CONNECTION_CLOSED,
    NOT_CONNECTED,
    MESSAGE_TOO_LARGE,
}
export enum IOModuleScopeFlags {
    NONE,
    BLOCK_DUPLICATES,
}
export enum MemoryMonitorWarningLevel {
    LOW,
    MEDIUM,
    CRITICAL,
}
export enum MountOperationResult {
    HANDLED,
    ABORTED,
    UNHANDLED,
}
export enum NetworkConnectivity {
    LOCAL,
    LIMITED,
    PORTAL,
    FULL,
}
export enum NotificationPriority {
    NORMAL,
    LOW,
    HIGH,
    URGENT,
}
export enum PasswordSave {
    NEVER,
    FOR_SESSION,
    PERMANENTLY,
}
export enum PollableReturn {
    FAILED,
    OK,
    WOULD_BLOCK,
}
export enum ResolverError {
    NOT_FOUND,
    TEMPORARY_FAILURE,
    INTERNAL,
}
export enum ResolverRecordType {
    SRV,
    MX,
    TXT,
    SOA,
    NS,
}
export enum ResourceError {
    NOT_FOUND,
    INTERNAL,
}
export enum SocketClientEvent {
    RESOLVING,
    RESOLVED,
    CONNECTING,
    CONNECTED,
    PROXY_NEGOTIATING,
    PROXY_NEGOTIATED,
    TLS_HANDSHAKING,
    TLS_HANDSHAKED,
    COMPLETE,
}
export enum SocketFamily {
    INVALID,
    UNIX,
    IPV4,
    IPV6,
}
export enum SocketListenerEvent {
    BINDING,
    BOUND,
    LISTENING,
    LISTENED,
}
export enum SocketProtocol {
    UNKNOWN,
    DEFAULT,
    TCP,
    UDP,
    SCTP,
}
export enum SocketType {
    INVALID,
    STREAM,
    DATAGRAM,
    SEQPACKET,
}
export enum TlsAuthenticationMode {
    NONE,
    REQUESTED,
    REQUIRED,
}
export enum TlsCertificateRequestFlags {
    NONE,
}
export enum TlsChannelBindingError {
    NOT_IMPLEMENTED,
    INVALID_STATE,
    NOT_AVAILABLE,
    NOT_SUPPORTED,
    GENERAL_ERROR,
}
export enum TlsChannelBindingType {
    UNIQUE,
    SERVER_END_POINT,
}
export enum TlsDatabaseLookupFlags {
    NONE,
    KEYPAIR,
}
export enum TlsError {
    UNAVAILABLE,
    MISC,
    BAD_CERTIFICATE,
    NOT_TLS,
    HANDSHAKE,
    CERTIFICATE_REQUIRED,
    EOF,
    INAPPROPRIATE_FALLBACK,
}
export enum TlsInteractionResult {
    UNHANDLED,
    HANDLED,
    FAILED,
}
export enum TlsRehandshakeMode {
    NEVER,
    SAFELY,
    UNSAFELY,
}
export enum UnixSocketAddressType {
    INVALID,
    ANONYMOUS,
    PATH,
    ABSTRACT,
    ABSTRACT_PADDED,
}
export enum ZlibCompressorFormat {
    ZLIB,
    GZIP,
    RAW,
}
export enum AppInfoCreateFlags {
    NONE,
    NEEDS_TERMINAL,
    SUPPORTS_URIS,
    SUPPORTS_STARTUP_NOTIFICATION,
}
export enum ApplicationFlags {
    FLAGS_NONE,
    IS_SERVICE,
    IS_LAUNCHER,
    HANDLES_OPEN,
    HANDLES_COMMAND_LINE,
    SEND_ENVIRONMENT,
    NON_UNIQUE,
    CAN_OVERRIDE_APP_ID,
    ALLOW_REPLACEMENT,
    REPLACE,
}
export enum AskPasswordFlags {
    NEED_PASSWORD,
    NEED_USERNAME,
    NEED_DOMAIN,
    SAVING_SUPPORTED,
    ANONYMOUS_SUPPORTED,
    TCRYPT,
}
export enum BusNameOwnerFlags {
    NONE,
    ALLOW_REPLACEMENT,
    REPLACE,
    DO_NOT_QUEUE,
}
export enum BusNameWatcherFlags {
    NONE,
    AUTO_START,
}
export enum ConverterFlags {
    NONE,
    INPUT_AT_END,
    FLUSH,
}
export enum DBusCallFlags {
    NONE,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusCapabilityFlags {
    NONE,
    UNIX_FD_PASSING,
}
export enum DBusConnectionFlags {
    NONE,
    AUTHENTICATION_CLIENT,
    AUTHENTICATION_SERVER,
    AUTHENTICATION_ALLOW_ANONYMOUS,
    MESSAGE_BUS_CONNECTION,
    DELAY_MESSAGE_PROCESSING,
}
export enum DBusInterfaceSkeletonFlags {
    NONE,
    HANDLE_METHOD_INVOCATIONS_IN_THREAD,
}
export enum DBusMessageFlags {
    NONE,
    NO_REPLY_EXPECTED,
    NO_AUTO_START,
    ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusObjectManagerClientFlags {
    NONE,
    DO_NOT_AUTO_START,
}
export enum DBusPropertyInfoFlags {
    NONE,
    READABLE,
    WRITABLE,
}
export enum DBusProxyFlags {
    NONE,
    DO_NOT_LOAD_PROPERTIES,
    DO_NOT_CONNECT_SIGNALS,
    DO_NOT_AUTO_START,
    GET_INVALIDATED_PROPERTIES,
    DO_NOT_AUTO_START_AT_CONSTRUCTION,
}
export enum DBusSendMessageFlags {
    NONE,
    PRESERVE_SERIAL,
}
export enum DBusServerFlags {
    NONE,
    RUN_IN_THREAD,
    AUTHENTICATION_ALLOW_ANONYMOUS,
}
export enum DBusSignalFlags {
    NONE,
    NO_MATCH_RULE,
    MATCH_ARG0_NAMESPACE,
    MATCH_ARG0_PATH,
}
export enum DBusSubtreeFlags {
    NONE,
    DISPATCH_TO_UNENUMERATED_NODES,
}
export enum DriveStartFlags {
    NONE,
}
export enum FileAttributeInfoFlags {
    NONE,
    COPY_WITH_FILE,
    COPY_WHEN_MOVED,
}
export enum FileCopyFlags {
    NONE,
    OVERWRITE,
    BACKUP,
    NOFOLLOW_SYMLINKS,
    ALL_METADATA,
    NO_FALLBACK_FOR_MOVE,
    TARGET_DEFAULT_PERMS,
}
export enum FileCreateFlags {
    NONE,
    PRIVATE,
    REPLACE_DESTINATION,
}
export enum FileMeasureFlags {
    NONE,
    REPORT_ANY_ERROR,
    APPARENT_SIZE,
    NO_XDEV,
}
export enum FileMonitorFlags {
    NONE,
    WATCH_MOUNTS,
    SEND_MOVED,
    WATCH_HARD_LINKS,
    WATCH_MOVES,
}
export enum FileQueryInfoFlags {
    NONE,
    NOFOLLOW_SYMLINKS,
}
export enum IOStreamSpliceFlags {
    NONE,
    CLOSE_STREAM1,
    CLOSE_STREAM2,
    WAIT_FOR_BOTH,
}
export enum MountMountFlags {
    NONE,
}
export enum MountUnmountFlags {
    NONE,
    FORCE,
}
export enum OutputStreamSpliceFlags {
    NONE,
    CLOSE_SOURCE,
    CLOSE_TARGET,
}
export enum ResolverNameLookupFlags {
    DEFAULT,
    IPV4_ONLY,
    IPV6_ONLY,
}
export enum ResourceFlags {
    NONE,
    COMPRESSED,
}
export enum ResourceLookupFlags {
    NONE,
}
export enum SettingsBindFlags {
    DEFAULT,
    GET,
    SET,
    NO_SENSITIVITY,
    GET_NO_CHANGES,
    INVERT_BOOLEAN,
}
export enum SocketMsgFlags {
    NONE,
    OOB,
    PEEK,
    DONTROUTE,
}
export enum SubprocessFlags {
    NONE,
    STDIN_PIPE,
    STDIN_INHERIT,
    STDOUT_PIPE,
    STDOUT_SILENCE,
    STDERR_PIPE,
    STDERR_SILENCE,
    STDERR_MERGE,
    INHERIT_FDS,
}
export enum TestDBusFlags {
    NONE,
}
export enum TlsCertificateFlags {
    UNKNOWN_CA,
    BAD_IDENTITY,
    NOT_ACTIVATED,
    EXPIRED,
    REVOKED,
    INSECURE,
    GENERIC_ERROR,
    VALIDATE_ALL,
}
export enum TlsDatabaseVerifyFlags {
    NONE,
}
export enum TlsPasswordFlags {
    NONE,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string
export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string
export const FILE_ATTRIBUTE_ETAG_VALUE: string
export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string
export const FILE_ATTRIBUTE_FILESYSTEM_USED: string
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string
export const FILE_ATTRIBUTE_GVFS_BACKEND: string
export const FILE_ATTRIBUTE_ID_FILE: string
export const FILE_ATTRIBUTE_ID_FILESYSTEM: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string
export const FILE_ATTRIBUTE_OWNER_GROUP: string
export const FILE_ATTRIBUTE_OWNER_USER: string
export const FILE_ATTRIBUTE_OWNER_USER_REAL: string
export const FILE_ATTRIBUTE_PREVIEW_ICON: string
export const FILE_ATTRIBUTE_RECENT_MODIFIED: string
export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string
export const FILE_ATTRIBUTE_STANDARD_ICON: string
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string
export const FILE_ATTRIBUTE_STANDARD_NAME: string
export const FILE_ATTRIBUTE_STANDARD_SIZE: string
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string
export const FILE_ATTRIBUTE_STANDARD_TYPE: string
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string
export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string
export const FILE_ATTRIBUTE_TIME_ACCESS: string
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string
export const FILE_ATTRIBUTE_TIME_CHANGED: string
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string
export const FILE_ATTRIBUTE_TIME_CREATED: string
export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string
export const FILE_ATTRIBUTE_TIME_MODIFIED: string
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string
export const FILE_ATTRIBUTE_UNIX_BLOCKS: string
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string
export const FILE_ATTRIBUTE_UNIX_DEVICE: string
export const FILE_ATTRIBUTE_UNIX_GID: string
export const FILE_ATTRIBUTE_UNIX_INODE: string
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string
export const FILE_ATTRIBUTE_UNIX_MODE: string
export const FILE_ATTRIBUTE_UNIX_NLINK: string
export const FILE_ATTRIBUTE_UNIX_RDEV: string
export const FILE_ATTRIBUTE_UNIX_UID: string
export const MEMORY_MONITOR_EXTENSION_POINT_NAME: string
export const MENU_ATTRIBUTE_ACTION: string
export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string
export const MENU_ATTRIBUTE_ICON: string
export const MENU_ATTRIBUTE_LABEL: string
export const MENU_ATTRIBUTE_TARGET: string
export const MENU_LINK_SECTION: string
export const MENU_LINK_SUBMENU: string
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string
export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string
export const PROXY_EXTENSION_POINT_NAME: string
export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string
export const TLS_BACKEND_EXTENSION_POINT_NAME: string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string
export const VFS_EXTENSION_POINT_NAME: string
export const VOLUME_IDENTIFIER_KIND_CLASS: string
export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string
export const VOLUME_IDENTIFIER_KIND_LABEL: string
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string
export const VOLUME_IDENTIFIER_KIND_UUID: string
export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string
export function action_name_is_valid(action_name: string): boolean
export function action_parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
export function action_print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string
export function app_info_create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
export function app_info_get_all(): AppInfo[]
export function app_info_get_all_for_type(content_type: string): AppInfo[]
export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo | null
export function app_info_get_default_for_uri_scheme(uri_scheme: string): AppInfo | null
export function app_info_get_fallback_for_type(content_type: string): AppInfo[]
export function app_info_get_recommended_for_type(content_type: string): AppInfo[]
export function app_info_launch_default_for_uri(uri: string, context?: AppLaunchContext | null): boolean
export function app_info_launch_default_for_uri_async(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function app_info_launch_default_for_uri_finish(result: AsyncResult): boolean
export function app_info_reset_type_associations(content_type: string): void
export function async_initable_newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function bus_get(bus_type: BusType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function bus_get_finish(res: AsyncResult): DBusConnection
export function bus_get_sync(bus_type: BusType, cancellable?: Cancellable | null): DBusConnection
export function bus_own_name_on_connection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure?: Function, name_lost_closure?: Function): number
export function bus_own_name(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure?: Function, name_acquired_closure?: Function, name_lost_closure?: Function): number
export function bus_unown_name(owner_id: number): void
export function bus_unwatch_name(watcher_id: number): void
export function bus_watch_name_on_connection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure?: Function, name_vanished_closure?: Function): number
export function bus_watch_name(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure?: Function, name_vanished_closure?: Function): number
export function content_type_can_be_executable(type: string): boolean
export function content_type_equals(type1: string, type2: string): boolean
export function content_type_from_mime_type(mime_type: string): string | null
export function content_type_get_description(type: string): string
export function content_type_get_generic_icon_name(type: string): string | null
export function content_type_get_icon(type: string): Icon
export function content_type_get_mime_dirs(): string[]
export function content_type_get_mime_type(type: string): string | null
export function content_type_get_symbolic_icon(type: string): Icon
export function content_type_guess(filename: string | null, data: Gjs.byteArray.ByteArray | null): [ /* returnType */ string, /* result_uncertain */ boolean | null ]
export function content_type_guess_for_tree(root: File): string[]
export function content_type_is_a(type: string, supertype: string): boolean
export function content_type_is_mime_type(type: string, mime_type: string): boolean
export function content_type_is_unknown(type: string): boolean
export function content_type_set_mime_dirs(dirs?: string[] | null): void
export function content_types_get_registered(): string[]
export function dbus_address_escape_value(string: string): string
export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable?: Cancellable | null): string
export function dbus_address_get_stream(address: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
export function dbus_address_get_stream_finish(res: AsyncResult): [ /* returnType */ IOStream, /* out_guid */ string | null ]
export function dbus_address_get_stream_sync(address: string, cancellable?: Cancellable | null): [ /* returnType */ IOStream, /* out_guid */ string | null ]
export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
export function dbus_error_encode_gerror(error: GLib.Error): string
export function dbus_error_get_remote_error(error: GLib.Error): string
export function dbus_error_is_remote_error(error: GLib.Error): boolean
export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error
export function dbus_error_quark(): GLib.Quark
export function dbus_error_register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry[]): void
export function dbus_error_strip_remote_error(error: GLib.Error): boolean
export function dbus_error_unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean
export function dbus_generate_guid(): string
export function dbus_gvalue_to_gvariant(gvalue: any, type: GLib.VariantType): GLib.Variant
export function dbus_gvariant_to_gvalue(value: GLib.Variant): /* out_gvalue */ any
export function dbus_is_address(string: string): boolean
export function dbus_is_guid(string: string): boolean
export function dbus_is_interface_name(string: string): boolean
export function dbus_is_member_name(string: string): boolean
export function dbus_is_name(string: string): boolean
export function dbus_is_supported_address(string: string): boolean
export function dbus_is_unique_name(string: string): boolean
export function dtls_client_connection_new(base_socket: DatagramBased, server_identity?: SocketConnectable | null): DtlsClientConnection
export function dtls_server_connection_new(base_socket: DatagramBased, certificate?: TlsCertificate | null): DtlsServerConnection
export function file_new_for_commandline_arg(arg: string): File
export function file_new_for_commandline_arg_and_cwd(arg: string, cwd: string): File
export function file_new_for_path(path: string): File
export function file_new_for_uri(uri: string): File
export function file_new_tmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
export function file_parse_name(parse_name: string): File
export function icon_deserialize(value: GLib.Variant): Icon
export function icon_hash(icon: object): number
export function icon_new_for_string(str: string): Icon
export function initable_newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
export function io_error_from_errno(err_no: number): IOErrorEnum
export function io_error_quark(): GLib.Quark
export function io_extension_point_implement(extension_point_name: string, type: GObject.Type, extension_name: string, priority: number): IOExtension
export function io_extension_point_lookup(name: string): IOExtensionPoint
export function io_extension_point_register(name: string): IOExtensionPoint
export function io_modules_load_all_in_directory(dirname: string): IOModule[]
export function io_modules_load_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): IOModule[]
export function io_modules_scan_all_in_directory(dirname: string): void
export function io_modules_scan_all_in_directory_with_scope(dirname: string, scope: IOModuleScope): void
export function io_scheduler_cancel_all_jobs(): void
export function io_scheduler_push_job(job_func: IOSchedulerJobFunc, io_priority: number, cancellable?: Cancellable | null): void
export function keyfile_settings_backend_new(filename: string, root_path: string, root_group?: string | null): SettingsBackend
export function memory_monitor_dup_default(): MemoryMonitor
export function memory_settings_backend_new(): SettingsBackend
export function network_monitor_get_default(): NetworkMonitor
export function networking_init(): void
export function null_settings_backend_new(): SettingsBackend
export function pollable_source_new(pollable_stream: GObject.Object): GLib.Source
export function pollable_source_new_full(pollable_stream: GObject.Object, child_source?: GLib.Source | null, cancellable?: Cancellable | null): GLib.Source
export function pollable_stream_read(stream: InputStream, buffer: Gjs.byteArray.ByteArray, blocking: boolean, cancellable?: Cancellable | null): number
export function pollable_stream_write(stream: OutputStream, buffer: Gjs.byteArray.ByteArray, blocking: boolean, cancellable?: Cancellable | null): number
export function pollable_stream_write_all(stream: OutputStream, buffer: Gjs.byteArray.ByteArray, blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number ]
export function proxy_get_default_for_protocol(protocol: string): Proxy
export function proxy_resolver_get_default(): ProxyResolver
export function resolver_error_quark(): GLib.Quark
export function resource_error_quark(): GLib.Quark
export function resource_load(filename: string): Resource
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream
export function resources_register(resource: Resource): void
export function resources_unregister(resource: Resource): void
export function settings_schema_source_get_default(): SettingsSchemaSource | null
export function simple_async_report_gerror_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): void
export function tls_backend_get_default(): TlsBackend
export function tls_channel_binding_error_quark(): GLib.Quark
export function tls_client_connection_new(base_io_stream: IOStream, server_identity?: SocketConnectable | null): TlsClientConnection
export function tls_error_quark(): GLib.Quark
export function tls_file_database_new(anchors: string): TlsFileDatabase
export function tls_server_connection_new(base_io_stream: IOStream, certificate?: TlsCertificate | null): TlsServerConnection
export function unix_is_mount_path_system_internal(mount_path: string): boolean
export function unix_is_system_device_path(device_path: string): boolean
export function unix_is_system_fs_type(fs_type: string): boolean
export function unix_mount_at(mount_path: string): [ /* returnType */ UnixMountEntry, /* time_read */ number | null ]
export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry): number
export function unix_mount_copy(mount_entry: UnixMountEntry): UnixMountEntry
export function unix_mount_for(file_path: string): [ /* returnType */ UnixMountEntry, /* time_read */ number | null ]
export function unix_mount_free(mount_entry: UnixMountEntry): void
export function unix_mount_get_device_path(mount_entry: UnixMountEntry): string
export function unix_mount_get_fs_type(mount_entry: UnixMountEntry): string
export function unix_mount_get_mount_path(mount_entry: UnixMountEntry): string
export function unix_mount_get_options(mount_entry: UnixMountEntry): string | null
export function unix_mount_get_root_path(mount_entry: UnixMountEntry): string | null
export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry): boolean
export function unix_mount_guess_icon(mount_entry: UnixMountEntry): Icon
export function unix_mount_guess_name(mount_entry: UnixMountEntry): string
export function unix_mount_guess_should_display(mount_entry: UnixMountEntry): boolean
export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry): Icon
export function unix_mount_is_readonly(mount_entry: UnixMountEntry): boolean
export function unix_mount_is_system_internal(mount_entry: UnixMountEntry): boolean
export function unix_mount_point_at(mount_path: string): [ /* returnType */ UnixMountPoint | null, /* time_read */ number | null ]
export function unix_mount_points_changed_since(time: number): boolean
export function unix_mount_points_get(): [ /* returnType */ UnixMountPoint[], /* time_read */ number | null ]
export function unix_mounts_changed_since(time: number): boolean
export function unix_mounts_get(): [ /* returnType */ UnixMountEntry[], /* time_read */ number | null ]
export interface AsyncReadyCallback {
    (source_object: GObject.Object | null, res: AsyncResult): void
}
export interface BusAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAcquiredCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameAppearedCallback {
    (connection: DBusConnection, name: string, name_owner: string): void
}
export interface BusNameLostCallback {
    (connection: DBusConnection, name: string): void
}
export interface BusNameVanishedCallback {
    (connection: DBusConnection, name: string): void
}
export interface CancellableSourceFunc {
    (cancellable?: Cancellable | null): boolean
}
export interface DBusInterfaceGetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, error: GLib.Error): GLib.Variant
}
export interface DBusInterfaceMethodCallFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: DBusMethodInvocation): void
}
export interface DBusInterfaceSetPropertyFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant, error: GLib.Error): boolean
}
export interface DBusMessageFilterFunction {
    (connection: DBusConnection, message: DBusMessage, incoming: boolean): DBusMessage | null
}
export interface DBusProxyTypeFunc {
    (manager: DBusObjectManagerClient, object_path: string, interface_name?: string | null): GObject.Type
}
export interface DBusSignalCallback {
    (connection: DBusConnection, sender_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant): void
}
export interface DBusSubtreeDispatchFunc {
    (connection: DBusConnection, sender: string, object_path: string, interface_name: string, node: string, out_user_data: object): DBusInterfaceVTable
}
export interface DBusSubtreeIntrospectFunc {
    (connection: DBusConnection, sender: string, object_path: string, node: string): DBusInterfaceInfo
}
export interface DatagramBasedSourceFunc {
    (datagram_based: DatagramBased, condition: GLib.IOCondition): boolean
}
export interface DesktopAppLaunchCallback {
    (appinfo: DesktopAppInfo, pid: GLib.Pid): void
}
export interface FileMeasureProgressCallback {
    (reporting: boolean, current_size: number, num_dirs: number, num_files: number): void
}
export interface FileProgressCallback {
    (current_num_bytes: number, total_num_bytes: number): void
}
export interface FileReadMoreCallback {
    (file_contents: string, file_size: number): boolean
}
export interface IOSchedulerJobFunc {
    (job: IOSchedulerJob, cancellable?: Cancellable | null): boolean
}
export interface PollableSourceFunc {
    (pollable_stream: GObject.Object): boolean
}
export interface ReallocFunc {
    (data: object | null, size: number): object | null
}
export interface SettingsBindGetMapping {
    (value: any, variant: GLib.Variant): boolean
}
export interface SettingsBindSetMapping {
    (value: any, expected_type: GLib.VariantType): GLib.Variant
}
export interface SettingsGetMapping {
    (value: GLib.Variant): boolean
}
export interface SimpleAsyncThreadFunc {
    (res: SimpleAsyncResult, object: GObject.Object, cancellable?: Cancellable | null): void
}
export interface SocketSourceFunc {
    (socket: Socket, condition: GLib.IOCondition): boolean
}
export interface TaskThreadFunc {
    (task: Task, source_object: GObject.Object, task_data?: object | null, cancellable?: Cancellable | null): void
}
export interface VfsFileLookupFunc {
    (vfs: Vfs, identifier: string): File
}
export class Action {
    /* Properties of Gio.Action */
    readonly enabled: boolean
    readonly name: string
    readonly parameter_type: GLib.VariantType
    readonly state: GLib.Variant
    readonly state_type: GLib.VariantType
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    change_state(value: GLib.Variant): void
    get_enabled(): boolean
    get_name(): string
    get_parameter_type(): GLib.VariantType | null
    get_state(): GLib.Variant
    get_state_hint(): GLib.Variant | null
    get_state_type(): GLib.VariantType | null
    /* Virtual methods of Gio.Action */
    vfunc_activate(parameter?: GLib.Variant | null): void
    vfunc_change_state(value: GLib.Variant): void
    vfunc_get_enabled(): boolean
    vfunc_get_name(): string
    vfunc_get_parameter_type(): GLib.VariantType | null
    vfunc_get_state(): GLib.Variant
    vfunc_get_state_hint(): GLib.Variant | null
    vfunc_get_state_type(): GLib.VariantType | null
    static name: string
    /* Static methods and pseudo-constructors */
    static name_is_valid(action_name: string): boolean
    static parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
    static print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string
}
export class ActionGroup {
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.ActionGroup */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: ActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: ActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: ActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: ActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: ActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: ActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    static name: string
}
export class ActionMap {
    /* Methods of Gio.ActionMap */
    add_action(action: Action): void
    add_action_entries(entries: ActionEntry[], user_data?: object | null): void
    lookup_action(action_name: string): Action
    remove_action(action_name: string): void
    /* Virtual methods of Gio.ActionMap */
    vfunc_add_action(action: Action): void
    vfunc_lookup_action(action_name: string): Action
    vfunc_remove_action(action_name: string): void
    static name: string
}
export class AppInfo {
    /* Methods of Gio.AppInfo */
    add_supports_type(content_type: string): boolean
    can_delete(): boolean
    can_remove_supports_type(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    get_commandline(): string
    get_description(): string
    get_display_name(): string
    get_executable(): string
    get_icon(): Icon
    get_id(): string
    get_name(): string
    get_supported_types(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launch_uris_async(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launch_uris_finish(result: AsyncResult): boolean
    remove_supports_type(content_type: string): boolean
    set_as_default_for_extension(extension: string): boolean
    set_as_default_for_type(content_type: string): boolean
    set_as_last_used_for_type(content_type: string): boolean
    should_show(): boolean
    supports_files(): boolean
    supports_uris(): boolean
    /* Virtual methods of Gio.AppInfo */
    vfunc_add_supports_type(content_type: string): boolean
    vfunc_can_delete(): boolean
    vfunc_can_remove_supports_type(): boolean
    vfunc_do_delete(): boolean
    vfunc_dup(): AppInfo
    vfunc_equal(appinfo2: AppInfo): boolean
    vfunc_get_commandline(): string
    vfunc_get_description(): string
    vfunc_get_display_name(): string
    vfunc_get_executable(): string
    vfunc_get_icon(): Icon
    vfunc_get_id(): string
    vfunc_get_name(): string
    vfunc_get_supported_types(): string[]
    vfunc_launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    vfunc_launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    vfunc_launch_uris_async(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_launch_uris_finish(result: AsyncResult): boolean
    vfunc_remove_supports_type(content_type: string): boolean
    vfunc_set_as_default_for_extension(extension: string): boolean
    vfunc_set_as_default_for_type(content_type: string): boolean
    vfunc_set_as_last_used_for_type(content_type: string): boolean
    vfunc_should_show(): boolean
    vfunc_supports_files(): boolean
    vfunc_supports_uris(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
    static get_all(): AppInfo[]
    static get_all_for_type(content_type: string): AppInfo[]
    static get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo | null
    static get_default_for_uri_scheme(uri_scheme: string): AppInfo | null
    static get_fallback_for_type(content_type: string): AppInfo[]
    static get_recommended_for_type(content_type: string): AppInfo[]
    static launch_default_for_uri(uri: string, context?: AppLaunchContext | null): boolean
    static launch_default_for_uri_async(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launch_default_for_uri_finish(result: AsyncResult): boolean
    static reset_type_associations(content_type: string): void
}
export class AsyncInitable {
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Virtual methods of Gio.AsyncInitable */
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_init_finish(res: AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
}
export class AsyncResult {
    /* Methods of Gio.AsyncResult */
    get_source_object(): GObject.Object | null
    get_user_data(): object | null
    is_tagged(source_tag?: object | null): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gio.AsyncResult */
    vfunc_get_source_object(): GObject.Object | null
    vfunc_get_user_data(): object | null
    vfunc_is_tagged(source_tag?: object | null): boolean
    static name: string
}
export class Converter {
    /* Methods of Gio.Converter */
    convert(inbuf: Gjs.byteArray.ByteArray, outbuf: Gjs.byteArray.ByteArray, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of Gio.Converter */
    vfunc_convert(inbuf: Gjs.byteArray.ByteArray | null, outbuf: Gjs.byteArray.ByteArray | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfunc_reset(): void
    static name: string
}
export class DBusInterface {
    /* Methods of Gio.DBusInterface */
    get_object(): DBusObject
    get_info(): DBusInterfaceInfo
    set_object(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterface */
    vfunc_dup_object(): DBusObject
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_set_object(object?: DBusObject | null): void
    static name: string
}
export class DBusObject {
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): DBusInterface
    get_interfaces(): DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio.DBusObject */
    vfunc_get_interface(interface_name: string): DBusInterface
    vfunc_get_interfaces(): DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: DBusInterface): void
    vfunc_interface_removed(interface_: DBusInterface): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    static name: string
}
export class DBusObjectManager {
    /* Methods of Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): DBusInterface
    get_object(object_path: string): DBusObject
    get_object_path(): string
    get_objects(): DBusObject[]
    /* Virtual methods of Gio.DBusObjectManager */
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface
    vfunc_get_object(object_path: string): DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): DBusObject[]
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void
    vfunc_object_added(object: DBusObject): void
    vfunc_object_removed(object: DBusObject): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManager, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManager, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    static name: string
}
export class DatagramBased {
    /* Methods of Gio.DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class DesktopAppInfoLookup {
    /* Methods of Gio.DesktopAppInfoLookup */
    get_default_for_uri_scheme(uri_scheme: string): AppInfo | null
    /* Virtual methods of Gio.DesktopAppInfoLookup */
    vfunc_get_default_for_uri_scheme(uri_scheme: string): AppInfo | null
    static name: string
}
export class Drive {
    /* Methods of Gio.Drive */
    can_eject(): boolean
    can_poll_for_media(): boolean
    can_start(): boolean
    can_start_degraded(): boolean
    can_stop(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_with_operation_finish(result: AsyncResult): boolean
    enumerate_identifiers(): string[]
    get_icon(): Icon
    get_identifier(kind: string): string | null
    get_name(): string
    get_sort_key(): string | null
    get_start_stop_type(): DriveStartStopType
    get_symbolic_icon(): Icon
    get_volumes(): Volume[]
    has_media(): boolean
    has_volumes(): boolean
    is_media_check_automatic(): boolean
    is_media_removable(): boolean
    is_removable(): boolean
    poll_for_media(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    poll_for_media_finish(result: AsyncResult): boolean
    start(flags: DriveStartFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    start_finish(result: AsyncResult): boolean
    stop(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stop_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.Drive */
    vfunc_can_eject(): boolean
    vfunc_can_poll_for_media(): boolean
    vfunc_can_start(): boolean
    vfunc_can_start_degraded(): boolean
    vfunc_can_stop(): boolean
    vfunc_changed(): void
    vfunc_disconnected(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_button(): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_identifiers(): string[]
    vfunc_get_icon(): Icon
    vfunc_get_identifier(kind: string): string | null
    vfunc_get_name(): string
    vfunc_get_sort_key(): string | null
    vfunc_get_start_stop_type(): DriveStartStopType
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_volumes(): Volume[]
    vfunc_has_media(): boolean
    vfunc_has_volumes(): boolean
    vfunc_is_media_check_automatic(): boolean
    vfunc_is_media_removable(): boolean
    vfunc_is_removable(): boolean
    vfunc_poll_for_media(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_poll_for_media_finish(result: AsyncResult): boolean
    vfunc_start(flags: DriveStartFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_start_finish(result: AsyncResult): boolean
    vfunc_stop(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_stop_button(): void
    vfunc_stop_finish(result: AsyncResult): boolean
    /* Signals of Gio.Drive */
    connect(sigName: "changed", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Drive) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "disconnected", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Drive) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "eject-button", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "eject-button", callback: (($obj: Drive) => void)): number
    emit(sigName: "eject-button"): void
    connect(sigName: "stop-button", callback: (($obj: Drive) => void)): number
    connect_after(sigName: "stop-button", callback: (($obj: Drive) => void)): number
    emit(sigName: "stop-button"): void
    static name: string
}
export class DtlsClientConnection {
    /* Properties of Gio.DtlsClientConnection */
    readonly accepted_cas: object[]
    server_identity: SocketConnectable
    validation_flags: TlsCertificateFlags
    /* Methods of Gio.DtlsClientConnection */
    get_accepted_cas(): any
    get_server_identity(): SocketConnectable
    get_validation_flags(): TlsCertificateFlags
    set_server_identity(identity: SocketConnectable): void
    set_validation_flags(flags: TlsCertificateFlags): void
    /* Methods of Gio.DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class DtlsConnection {
    /* Properties of Gio.DtlsConnection */
    advertised_protocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiated_protocol: string
    readonly peer_certificate: TlsCertificate
    readonly peer_certificate_errors: TlsCertificateFlags
    rehandshake_mode: TlsRehandshakeMode
    require_close_notify: boolean
    /* Methods of Gio.DtlsConnection */
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    get_certificate(): TlsCertificate | null
    get_channel_binding_data(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Gjs.byteArray.ByteArray | null ]
    get_database(): TlsDatabase | null
    get_interaction(): TlsInteraction | null
    get_negotiated_protocol(): string | null
    get_peer_certificate(): TlsCertificate | null
    get_peer_certificate_errors(): TlsCertificateFlags
    get_rehandshake_mode(): TlsRehandshakeMode
    get_require_close_notify(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshake_finish(result: AsyncResult): boolean
    set_advertised_protocols(protocols?: string[] | null): void
    set_certificate(certificate: TlsCertificate): void
    set_database(database?: TlsDatabase | null): void
    set_interaction(interaction?: TlsInteraction | null): void
    set_rehandshake_mode(mode: TlsRehandshakeMode): void
    set_require_close_notify(require_close_notify: boolean): void
    shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean
    shutdown_async(shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    shutdown_finish(result: AsyncResult): boolean
    /* Methods of Gio.DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DtlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Gjs.byteArray.ByteArray): boolean
    vfunc_get_negotiated_protocol(): string | null
    vfunc_handshake(cancellable?: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    vfunc_set_advertised_protocols(protocols?: string[] | null): void
    vfunc_shutdown(shutdown_read: boolean, shutdown_write: boolean, cancellable?: Cancellable | null): boolean
    vfunc_shutdown_async(shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_shutdown_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Signals of Gio.DtlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: DtlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: DtlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    static name: string
}
export class DtlsServerConnection {
    /* Properties of Gio.DtlsServerConnection */
    authentication_mode: TlsAuthenticationMode
    /* Methods of Gio.DatagramBased */
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.DatagramBased */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    static name: string
}
export class File {
    /* Methods of Gio.File */
    append_to(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    append_to_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    append_to_finish(res: AsyncResult): FileOutputStream
    copy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    copy_async(destination: File, flags: FileCopyFlags, io_priority: number, cancellable?: Cancellable | null): void
    copy_attributes(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null): boolean
    copy_finish(res: AsyncResult): boolean
    create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    create_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    create_finish(res: AsyncResult): FileOutputStream
    create_readwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    create_readwrite_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    create_readwrite_finish(res: AsyncResult): FileIOStream
    delete(cancellable?: Cancellable | null): boolean
    delete_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    delete_finish(result: AsyncResult): boolean
    dup(): File
    eject_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_mountable_finish(result: AsyncResult): boolean
    eject_mountable_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_mountable_with_operation_finish(result: AsyncResult): boolean
    enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    enumerate_children_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    enumerate_children_finish(res: AsyncResult): FileEnumerator
    equal(file2: File): boolean
    find_enclosing_mount(cancellable?: Cancellable | null): Mount
    find_enclosing_mount_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    find_enclosing_mount_finish(res: AsyncResult): Mount
    get_basename(): string | null
    get_child(name: string): File
    get_child_for_display_name(display_name: string): File
    get_parent(): File | null
    get_parse_name(): string
    get_path(): string | null
    get_relative_path(descendant: File): string | null
    get_uri(): string
    get_uri_scheme(): string
    has_parent(parent?: File | null): boolean
    has_prefix(prefix: File): boolean
    has_uri_scheme(uri_scheme: string): boolean
    hash(): number
    is_native(): boolean
    load_bytes(cancellable?: Cancellable | null): [ /* returnType */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    load_bytes_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    load_bytes_finish(result: AsyncResult): [ /* returnType */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    load_contents(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    load_contents_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    load_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    load_partial_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* contents */ Gjs.byteArray.ByteArray, /* etag_out */ string | null ]
    make_directory(cancellable?: Cancellable | null): boolean
    make_directory_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    make_directory_finish(result: AsyncResult): boolean
    make_directory_with_parents(cancellable?: Cancellable | null): boolean
    make_symbolic_link(symlink_value: string, cancellable?: Cancellable | null): boolean
    measure_disk_usage_finish(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    monitor(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitor_directory(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    monitor_file(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    mount_enclosing_volume(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mount_enclosing_volume_finish(result: AsyncResult): boolean
    mount_mountable(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mount_mountable_finish(result: AsyncResult): File
    move(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    open_readwrite(cancellable?: Cancellable | null): FileIOStream
    open_readwrite_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    open_readwrite_finish(res: AsyncResult): FileIOStream
    peek_path(): string | null
    poll_mountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    poll_mountable_finish(result: AsyncResult): boolean
    query_default_handler(cancellable?: Cancellable | null): AppInfo
    query_default_handler_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_default_handler_finish(result: AsyncResult): AppInfo
    query_exists(cancellable?: Cancellable | null): boolean
    query_file_type(flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileType
    query_filesystem_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_filesystem_info_finish(res: AsyncResult): FileInfo
    query_info(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    query_info_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_info_finish(res: AsyncResult): FileInfo
    query_settable_attributes(cancellable?: Cancellable | null): FileAttributeInfoList
    query_writable_namespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    read(cancellable?: Cancellable | null): FileInputStream
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_finish(res: AsyncResult): FileInputStream
    replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    replace_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replace_contents(contents: Gjs.byteArray.ByteArray, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_contents_async(contents: Gjs.byteArray.ByteArray, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replace_contents_bytes_async(contents: Gjs.byteArray.ByteArray, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replace_contents_finish(res: AsyncResult): [ /* returnType */ boolean, /* new_etag */ string | null ]
    replace_finish(res: AsyncResult): FileOutputStream
    replace_readwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    replace_readwrite_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    replace_readwrite_finish(res: AsyncResult): FileIOStream
    resolve_relative_path(relative_path: string): File
    set_attribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_byte_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_int32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_int64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_uint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attribute_uint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_attributes_async(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    set_attributes_finish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    set_display_name(display_name: string, cancellable?: Cancellable | null): File
    set_display_name_async(display_name: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    set_display_name_finish(res: AsyncResult): File
    start_mountable(flags: DriveStartFlags, start_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    start_mountable_finish(result: AsyncResult): boolean
    stop_mountable(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    stop_mountable_finish(result: AsyncResult): boolean
    supports_thread_contexts(): boolean
    trash(cancellable?: Cancellable | null): boolean
    trash_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    trash_finish(result: AsyncResult): boolean
    unmount_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmount_mountable_finish(result: AsyncResult): boolean
    unmount_mountable_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmount_mountable_with_operation_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.File */
    vfunc_append_to(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfunc_append_to_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_append_to_finish(res: AsyncResult): FileOutputStream
    vfunc_copy(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    vfunc_copy_async(destination: File, flags: FileCopyFlags, io_priority: number, cancellable?: Cancellable | null): void
    vfunc_copy_finish(res: AsyncResult): boolean
    vfunc_create(flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfunc_create_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_create_finish(res: AsyncResult): FileOutputStream
    vfunc_create_readwrite(flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfunc_create_readwrite_async(flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_create_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_delete_file(cancellable?: Cancellable | null): boolean
    vfunc_delete_file_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_delete_file_finish(result: AsyncResult): boolean
    vfunc_dup(): File
    vfunc_eject_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_mountable_finish(result: AsyncResult): boolean
    vfunc_eject_mountable_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_mountable_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_children(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileEnumerator
    vfunc_enumerate_children_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_enumerate_children_finish(res: AsyncResult): FileEnumerator
    vfunc_equal(file2: File): boolean
    vfunc_find_enclosing_mount(cancellable?: Cancellable | null): Mount
    vfunc_find_enclosing_mount_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_find_enclosing_mount_finish(res: AsyncResult): Mount
    vfunc_get_basename(): string
    vfunc_get_child_for_display_name(display_name: string): File
    vfunc_get_parent(): File | null
    vfunc_get_parse_name(): string
    vfunc_get_path(): string
    vfunc_get_relative_path(descendant: File): string
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string
    vfunc_has_uri_scheme(uri_scheme: string): boolean
    vfunc_hash(): number
    vfunc_is_native(): boolean
    vfunc_make_directory(cancellable?: Cancellable | null): boolean
    vfunc_make_directory_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_make_directory_finish(result: AsyncResult): boolean
    vfunc_make_symbolic_link(symlink_value: string, cancellable?: Cancellable | null): boolean
    vfunc_measure_disk_usage_finish(result: AsyncResult): [ /* returnType */ boolean, /* disk_usage */ number | null, /* num_dirs */ number | null, /* num_files */ number | null ]
    vfunc_monitor_dir(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfunc_monitor_file(flags: FileMonitorFlags, cancellable?: Cancellable | null): FileMonitor
    vfunc_mount_enclosing_volume(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_mount_enclosing_volume_finish(result: AsyncResult): boolean
    vfunc_mount_mountable(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_mount_mountable_finish(result: AsyncResult): File
    vfunc_move(destination: File, flags: FileCopyFlags, cancellable?: Cancellable | null, progress_callback?: FileProgressCallback | null): boolean
    vfunc_open_readwrite(cancellable?: Cancellable | null): FileIOStream
    vfunc_open_readwrite_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_open_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_poll_mountable(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_poll_mountable_finish(result: AsyncResult): boolean
    vfunc_prefix_matches(file: File): boolean
    vfunc_query_filesystem_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfunc_query_filesystem_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_query_filesystem_info_finish(res: AsyncResult): FileInfo
    vfunc_query_info(attributes: string, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_query_info_finish(res: AsyncResult): FileInfo
    vfunc_query_settable_attributes(cancellable?: Cancellable | null): FileAttributeInfoList
    vfunc_query_writable_namespaces(cancellable?: Cancellable | null): FileAttributeInfoList
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_read_finish(res: AsyncResult): FileInputStream
    vfunc_read_fn(cancellable?: Cancellable | null): FileInputStream
    vfunc_replace(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileOutputStream
    vfunc_replace_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_replace_finish(res: AsyncResult): FileOutputStream
    vfunc_replace_readwrite(etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable?: Cancellable | null): FileIOStream
    vfunc_replace_readwrite_async(etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_replace_readwrite_finish(res: AsyncResult): FileIOStream
    vfunc_resolve_relative_path(relative_path: string): File
    vfunc_set_attribute(attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfunc_set_attributes_async(info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_set_attributes_finish(result: AsyncResult): [ /* returnType */ boolean, /* info */ FileInfo ]
    vfunc_set_attributes_from_info(info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfunc_set_display_name(display_name: string, cancellable?: Cancellable | null): File
    vfunc_set_display_name_async(display_name: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_set_display_name_finish(res: AsyncResult): File
    vfunc_start_mountable(flags: DriveStartFlags, start_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_start_mountable_finish(result: AsyncResult): boolean
    vfunc_stop_mountable(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_stop_mountable_finish(result: AsyncResult): boolean
    vfunc_trash(cancellable?: Cancellable | null): boolean
    vfunc_trash_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_trash_finish(result: AsyncResult): boolean
    vfunc_unmount_mountable(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_unmount_mountable_finish(result: AsyncResult): boolean
    vfunc_unmount_mountable_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_unmount_mountable_with_operation_finish(result: AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_commandline_arg(arg: string): File
    static new_for_commandline_arg_and_cwd(arg: string, cwd: string): File
    static new_for_path(path: string): File
    static new_for_uri(uri: string): File
    static new_tmp(tmpl?: string | null): [ /* returnType */ File, /* iostream */ FileIOStream ]
    static parse_name(parse_name: string): File
}
export class FileDescriptorBased {
    /* Methods of Gio.FileDescriptorBased */
    get_fd(): number
    /* Virtual methods of Gio.FileDescriptorBased */
    vfunc_get_fd(): number
    static name: string
}
export class Icon {
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.Icon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    static name: string
    /* Static methods and pseudo-constructors */
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
}
export class Initable {
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Initable */
    vfunc_init(cancellable?: Cancellable | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
}
export class ListModel {
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type
    get_n_items(): number
    get_item(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListModel */
    vfunc_get_item(position: number): GObject.Object | null
    vfunc_get_item_type(): GObject.Type
    vfunc_get_n_items(): number
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ListModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ListModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    static name: string
}
export class LoadableIcon {
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.LoadableIcon */
    vfunc_load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.Icon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    static name: string
}
export class MemoryMonitor {
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryMonitor */
    vfunc_low_memory_warning(level: MemoryMonitorWarningLevel): void
    /* Virtual methods of Gio.Initable */
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio.MemoryMonitor */
    connect(sigName: "low-memory-warning", callback: (($obj: MemoryMonitor, level: MemoryMonitorWarningLevel) => void)): number
    connect_after(sigName: "low-memory-warning", callback: (($obj: MemoryMonitor, level: MemoryMonitorWarningLevel) => void)): number
    emit(sigName: "low-memory-warning", level: MemoryMonitorWarningLevel): void
    static name: string
    /* Static methods and pseudo-constructors */
    static dup_default(): MemoryMonitor
}
export class Mount {
    /* Methods of Gio.Mount */
    can_eject(): boolean
    can_unmount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_with_operation_finish(result: AsyncResult): boolean
    get_default_location(): File
    get_drive(): Drive | null
    get_icon(): Icon
    get_name(): string
    get_root(): File
    get_sort_key(): string | null
    get_symbolic_icon(): Icon
    get_uuid(): string | null
    get_volume(): Volume | null
    guess_content_type(force_rescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    guess_content_type_finish(result: AsyncResult): string[]
    guess_content_type_sync(force_rescan: boolean, cancellable?: Cancellable | null): string[]
    is_shadowed(): boolean
    remount(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    remount_finish(result: AsyncResult): boolean
    shadow(): void
    unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmount_finish(result: AsyncResult): boolean
    unmount_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    unmount_with_operation_finish(result: AsyncResult): boolean
    unshadow(): void
    /* Virtual methods of Gio.Mount */
    vfunc_can_eject(): boolean
    vfunc_can_unmount(): boolean
    vfunc_changed(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_get_default_location(): File
    vfunc_get_drive(): Drive | null
    vfunc_get_icon(): Icon
    vfunc_get_name(): string
    vfunc_get_root(): File
    vfunc_get_sort_key(): string | null
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_uuid(): string | null
    vfunc_get_volume(): Volume | null
    vfunc_guess_content_type(force_rescan: boolean, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_guess_content_type_finish(result: AsyncResult): string[]
    vfunc_guess_content_type_sync(force_rescan: boolean, cancellable?: Cancellable | null): string[]
    vfunc_pre_unmount(): void
    vfunc_remount(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_remount_finish(result: AsyncResult): boolean
    vfunc_unmount(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_unmount_finish(result: AsyncResult): boolean
    vfunc_unmount_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_unmount_with_operation_finish(result: AsyncResult): boolean
    vfunc_unmounted(): void
    /* Signals of Gio.Mount */
    connect(sigName: "changed", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Mount) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "pre-unmount", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "pre-unmount", callback: (($obj: Mount) => void)): number
    emit(sigName: "pre-unmount"): void
    connect(sigName: "unmounted", callback: (($obj: Mount) => void)): number
    connect_after(sigName: "unmounted", callback: (($obj: Mount) => void)): number
    emit(sigName: "unmounted"): void
    static name: string
}
export class NetworkMonitor {
    /* Properties of Gio.NetworkMonitor */
    readonly connectivity: NetworkConnectivity
    readonly network_available: boolean
    readonly network_metered: boolean
    /* Methods of Gio.NetworkMonitor */
    can_reach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    can_reach_async(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    can_reach_finish(result: AsyncResult): boolean
    get_connectivity(): NetworkConnectivity
    get_network_available(): boolean
    get_network_metered(): boolean
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.NetworkMonitor */
    vfunc_can_reach(connectable: SocketConnectable, cancellable?: Cancellable | null): boolean
    vfunc_can_reach_async(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_can_reach_finish(result: AsyncResult): boolean
    vfunc_network_changed(network_available: boolean): void
    /* Virtual methods of Gio.Initable */
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Signals of Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: (($obj: NetworkMonitor, network_available: boolean) => void)): number
    connect_after(sigName: "network-changed", callback: (($obj: NetworkMonitor, network_available: boolean) => void)): number
    emit(sigName: "network-changed", network_available: boolean): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default(): NetworkMonitor
}
export interface PollableInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class PollableInputStream {
    /* Fields of Gio.InputStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Virtual methods of Gio.PollableInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PollableInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PollableInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PollableInputStream_ConstructProps)
    _init (config?: PollableInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PollableOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class PollableOutputStream {
    /* Fields of Gio.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Virtual methods of Gio.PollableOutputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    vfunc_writev_nonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PollableOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PollableOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PollableOutputStream_ConstructProps)
    _init (config?: PollableOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export class Proxy {
    /* Methods of Gio.Proxy */
    connect(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream
    connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): IOStream
    supports_hostname(): boolean
    /* Virtual methods of Gio.Proxy */
    vfunc_connect(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null): IOStream
    vfunc_connect_async(connection: IOStream, proxy_address: ProxyAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_connect_finish(result: AsyncResult): IOStream
    vfunc_supports_hostname(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default_for_protocol(protocol: string): Proxy
}
export class ProxyResolver {
    /* Methods of Gio.ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookup_async(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_finish(result: AsyncResult): string[]
    /* Virtual methods of Gio.ProxyResolver */
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable?: Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: AsyncResult): string[]
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default(): ProxyResolver
}
export class RemoteActionGroup {
    /* Methods of Gio.RemoteActionGroup */
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Virtual methods of Gio.RemoteActionGroup */
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of Gio.ActionGroup */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: RemoteActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: RemoteActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: RemoteActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: RemoteActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: RemoteActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: RemoteActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: RemoteActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: RemoteActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    static name: string
}
export class Seekable {
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Seekable */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    static name: string
}
export class SocketConnectable {
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketConnectable */
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    static name: string
}
export class TlsBackend {
    /* Methods of Gio.TlsBackend */
    get_certificate_type(): GObject.Type
    get_client_connection_type(): GObject.Type
    get_default_database(): TlsDatabase
    get_dtls_client_connection_type(): GObject.Type
    get_dtls_server_connection_type(): GObject.Type
    get_file_database_type(): GObject.Type
    get_server_connection_type(): GObject.Type
    set_default_database(database?: TlsDatabase | null): void
    supports_dtls(): boolean
    supports_tls(): boolean
    /* Virtual methods of Gio.TlsBackend */
    vfunc_get_default_database(): TlsDatabase
    vfunc_supports_dtls(): boolean
    vfunc_supports_tls(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_default(): TlsBackend
}
export interface TlsClientConnection_ConstructProps extends TlsConnection_ConstructProps {
    server_identity?: SocketConnectable
    use_ssl3?: boolean
    validation_flags?: TlsCertificateFlags
}
export class TlsClientConnection {
    /* Properties of Gio.TlsClientConnection */
    readonly accepted_cas: object[]
    server_identity: SocketConnectable
    use_ssl3: boolean
    validation_flags: TlsCertificateFlags
    /* Properties of Gio.TlsConnection */
    advertised_protocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiated_protocol: string
    readonly peer_certificate: TlsCertificate
    readonly peer_certificate_errors: TlsCertificateFlags
    rehandshake_mode: TlsRehandshakeMode
    require_close_notify: boolean
    use_system_certdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.TlsConnection */
    parent_instance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsClientConnection */
    copy_session_state(source: TlsClientConnection): void
    get_accepted_cas(): any
    get_server_identity(): SocketConnectable
    get_use_ssl3(): boolean
    get_validation_flags(): TlsCertificateFlags
    set_server_identity(identity: SocketConnectable): void
    set_use_ssl3(use_ssl3: boolean): void
    set_validation_flags(flags: TlsCertificateFlags): void
    /* Methods of Gio.TlsConnection */
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    get_certificate(): TlsCertificate | null
    get_channel_binding_data(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Gjs.byteArray.ByteArray | null ]
    get_database(): TlsDatabase | null
    get_interaction(): TlsInteraction | null
    get_negotiated_protocol(): string | null
    get_peer_certificate(): TlsCertificate | null
    get_peer_certificate_errors(): TlsCertificateFlags
    get_rehandshake_mode(): TlsRehandshakeMode
    get_require_close_notify(): boolean
    get_use_system_certdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshake_finish(result: AsyncResult): boolean
    set_advertised_protocols(protocols?: string[] | null): void
    set_certificate(certificate: TlsCertificate): void
    set_database(database?: TlsDatabase | null): void
    set_interaction(interaction?: TlsInteraction | null): void
    set_rehandshake_mode(mode: TlsRehandshakeMode): void
    set_require_close_notify(require_close_notify: boolean): void
    set_use_system_certdb(use_system_certdb: boolean): void
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsClientConnection */
    vfunc_copy_session_state(source: TlsClientConnection): void
    /* Virtual methods of Gio.TlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Gjs.byteArray.ByteArray): boolean
    vfunc_handshake(cancellable?: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsClientConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsClientConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accepted-cas", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepted-cas", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::server-identity", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-identity", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ssl3", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ssl3", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::validation-flags", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::validation-flags", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::database", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsClientConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsClientConnection_ConstructProps)
    _init (config?: TlsClientConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsFileDatabase_ConstructProps extends TlsDatabase_ConstructProps {
    anchors?: string
}
export class TlsFileDatabase {
    /* Properties of Gio.TlsFileDatabase */
    anchors: string
    /* Fields of Gio.TlsDatabase */
    parent_instance: GObject.Object
    priv: TlsDatabasePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    create_certificate_handle(certificate: TlsCertificate): string | null
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[]
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsDatabase */
    vfunc_create_certificate_handle(certificate: TlsCertificate): string | null
    vfunc_lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    vfunc_lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    vfunc_lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[]
    vfunc_verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    vfunc_verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anchors", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchors", callback: (($obj: TlsFileDatabase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsFileDatabase_ConstructProps)
    _init (config?: TlsFileDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsServerConnection_ConstructProps extends TlsConnection_ConstructProps {
    authentication_mode?: TlsAuthenticationMode
}
export class TlsServerConnection {
    /* Properties of Gio.TlsServerConnection */
    authentication_mode: TlsAuthenticationMode
    /* Properties of Gio.TlsConnection */
    advertised_protocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiated_protocol: string
    readonly peer_certificate: TlsCertificate
    readonly peer_certificate_errors: TlsCertificateFlags
    rehandshake_mode: TlsRehandshakeMode
    require_close_notify: boolean
    use_system_certdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.TlsConnection */
    parent_instance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsConnection */
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    get_certificate(): TlsCertificate | null
    get_channel_binding_data(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Gjs.byteArray.ByteArray | null ]
    get_database(): TlsDatabase | null
    get_interaction(): TlsInteraction | null
    get_negotiated_protocol(): string | null
    get_peer_certificate(): TlsCertificate | null
    get_peer_certificate_errors(): TlsCertificateFlags
    get_rehandshake_mode(): TlsRehandshakeMode
    get_require_close_notify(): boolean
    get_use_system_certdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshake_finish(result: AsyncResult): boolean
    set_advertised_protocols(protocols?: string[] | null): void
    set_certificate(certificate: TlsCertificate): void
    set_database(database?: TlsDatabase | null): void
    set_interaction(interaction?: TlsInteraction | null): void
    set_rehandshake_mode(mode: TlsRehandshakeMode): void
    set_require_close_notify(require_close_notify: boolean): void
    set_use_system_certdb(use_system_certdb: boolean): void
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Gjs.byteArray.ByteArray): boolean
    vfunc_handshake(cancellable?: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsServerConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsServerConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authentication-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authentication-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::database", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsServerConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsServerConnection_ConstructProps)
    _init (config?: TlsServerConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export class Volume {
    /* Methods of Gio.Volume */
    can_eject(): boolean
    can_mount(): boolean
    eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_finish(result: AsyncResult): boolean
    eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    eject_with_operation_finish(result: AsyncResult): boolean
    enumerate_identifiers(): string[]
    get_activation_root(): File | null
    get_drive(): Drive | null
    get_icon(): Icon
    get_identifier(kind: string): string | null
    get_mount(): Mount | null
    get_name(): string
    get_sort_key(): string | null
    get_symbolic_icon(): Icon
    get_uuid(): string | null
    mount(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    mount_finish(result: AsyncResult): boolean
    should_automount(): boolean
    /* Virtual methods of Gio.Volume */
    vfunc_can_eject(): boolean
    vfunc_can_mount(): boolean
    vfunc_changed(): void
    vfunc_eject(flags: MountUnmountFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_finish(result: AsyncResult): boolean
    vfunc_eject_with_operation(flags: MountUnmountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_eject_with_operation_finish(result: AsyncResult): boolean
    vfunc_enumerate_identifiers(): string[]
    vfunc_get_activation_root(): File | null
    vfunc_get_drive(): Drive | null
    vfunc_get_icon(): Icon
    vfunc_get_identifier(kind: string): string | null
    vfunc_get_mount(): Mount | null
    vfunc_get_name(): string
    vfunc_get_sort_key(): string | null
    vfunc_get_symbolic_icon(): Icon
    vfunc_get_uuid(): string | null
    vfunc_mount_finish(result: AsyncResult): boolean
    vfunc_mount_fn(flags: MountMountFlags, mount_operation?: MountOperation | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_removed(): void
    vfunc_should_automount(): boolean
    /* Signals of Gio.Volume */
    connect(sigName: "changed", callback: (($obj: Volume) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Volume) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "removed", callback: (($obj: Volume) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Volume) => void)): number
    emit(sigName: "removed"): void
    static name: string
}
export interface AppInfoMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppInfoMonitor {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Signals of Gio.AppInfoMonitor */
    connect(sigName: "changed", callback: (($obj: AppInfoMonitor) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AppInfoMonitor) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppInfoMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppInfoMonitor_ConstructProps)
    _init (config?: AppInfoMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): AppInfoMonitor
    static $gtype: GObject.Type
}
export interface AppLaunchContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class AppLaunchContext {
    /* Fields of Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.AppLaunchContext */
    get_display(info: AppInfo, files: File[]): string
    get_environment(): string[]
    get_startup_notify_id(info: AppInfo, files: File[]): string
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
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
    /* Virtual methods of Gio.AppLaunchContext */
    vfunc_get_display(info: AppInfo, files: File[]): string
    vfunc_get_startup_notify_id(info: AppInfo, files: File[]): string
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launched", callback: (($obj: AppLaunchContext, info: AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: AppLaunchContext, info: AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
    action_group?: ActionGroup
    application_id?: string
    flags?: ApplicationFlags
    inactivity_timeout?: number
    resource_base_path?: string
}
export class Application {
    /* Properties of Gio.Application */
    action_group: ActionGroup
    application_id: string
    flags: ApplicationFlags
    inactivity_timeout: number
    readonly is_busy: boolean
    readonly is_registered: boolean
    readonly is_remote: boolean
    resource_base_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Application */
    activate(): void
    add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description?: string | null): void
    add_main_option_entries(entries: GLib.OptionEntry[]): void
    add_option_group(group: GLib.OptionGroup): void
    bind_busy_property(object: GObject.Object, property: string): void
    get_application_id(): string
    get_dbus_connection(): DBusConnection
    get_dbus_object_path(): string
    get_flags(): ApplicationFlags
    get_inactivity_timeout(): number
    get_is_busy(): boolean
    get_is_registered(): boolean
    get_is_remote(): boolean
    get_resource_base_path(): string | null
    hold(): void
    mark_busy(): void
    open(files: File[], hint: string): void
    quit(): void
    register(cancellable?: Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    send_notification(id: string | null, notification: Notification): void
    set_action_group(action_group?: ActionGroup | null): void
    set_application_id(application_id?: string | null): void
    set_default(): void
    set_flags(flags: ApplicationFlags): void
    set_inactivity_timeout(inactivity_timeout: number): void
    set_option_context_description(description?: string | null): void
    set_option_context_parameter_string(parameter_string?: string | null): void
    set_option_context_summary(summary?: string | null): void
    set_resource_base_path(resource_path?: string | null): void
    unbind_busy_property(object: GObject.Object, property: string): void
    unmark_busy(): void
    withdraw_notification(id: string): void
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
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    add_action(action: Action): void
    add_action_entries(entries: ActionEntry[], user_data?: object | null): void
    lookup_action(action_name: string): Action
    remove_action(action_name: string): void
    /* Virtual methods of Gio.Application */
    vfunc_activate(): void
    vfunc_add_platform_data(builder: GLib.VariantBuilder): void
    vfunc_after_emit(platform_data: GLib.Variant): void
    vfunc_before_emit(platform_data: GLib.Variant): void
    vfunc_command_line(command_line: ApplicationCommandLine): number
    vfunc_dbus_register(connection: DBusConnection, object_path: string): boolean
    vfunc_dbus_unregister(connection: DBusConnection, object_path: string): void
    vfunc_handle_local_options(options: GLib.VariantDict): number
    vfunc_local_command_line(arguments_: string[]): [ /* returnType */ boolean, /* arguments_ */ string[], /* exit_status */ number ]
    vfunc_name_lost(): boolean
    vfunc_open(files: File[], hint: string): void
    vfunc_quit_mainloop(): void
    vfunc_run_mainloop(): void
    vfunc_shutdown(): void
    vfunc_startup(): void
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfunc_add_action(action: Action): void
    vfunc_lookup_action(action_name: string): Action
    vfunc_remove_action(action_name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Application */
    connect(sigName: "activate", callback: (($obj: Application) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Application) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: (($obj: Application, command_line: ApplicationCommandLine) => number)): number
    connect_after(sigName: "command-line", callback: (($obj: Application, command_line: ApplicationCommandLine) => number)): number
    emit(sigName: "command-line", command_line: ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    connect_after(sigName: "handle-local-options", callback: (($obj: Application, options: GLib.VariantDict) => number)): number
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    connect_after(sigName: "name-lost", callback: (($obj: Application) => boolean)): number
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: (($obj: Application, files: File[], hint: string) => void)): number
    connect_after(sigName: "open", callback: (($obj: Application, files: File[], hint: string) => void)): number
    emit(sigName: "open", files: File[], hint: string): void
    connect(sigName: "shutdown", callback: (($obj: Application) => void)): number
    connect_after(sigName: "shutdown", callback: (($obj: Application) => void)): number
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: (($obj: Application) => void)): number
    connect_after(sigName: "startup", callback: (($obj: Application) => void)): number
    emit(sigName: "startup"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: Application, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: Application, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: Application, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: Application, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: Application, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: Application, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: Application, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application_id: string | null, flags: ApplicationFlags): Application
    static get_default(): Application
    static id_is_valid(application_id: string): boolean
    static $gtype: GObject.Type
}
export interface ApplicationCommandLine_ConstructProps extends GObject.Object_ConstructProps {
    "arguments"?: GLib.Variant
    options?: GLib.Variant
    platform_data?: GLib.Variant
}
export class ApplicationCommandLine {
    /* Properties of Gio.ApplicationCommandLine */
    readonly is_remote: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ApplicationCommandLine */
    create_file_for_arg(arg: string): File
    get_arguments(): string[]
    get_cwd(): string | null
    get_environ(): string[]
    get_exit_status(): number
    get_is_remote(): boolean
    get_options_dict(): GLib.VariantDict
    get_platform_data(): GLib.Variant | null
    get_stdin(): InputStream
    getenv(name: string): string
    set_exit_status(exit_status: number): void
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
    /* Virtual methods of Gio.ApplicationCommandLine */
    vfunc_get_stdin(): InputStream
    vfunc_print_literal(message: string): void
    vfunc_printerr_literal(message: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: ApplicationCommandLine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationCommandLine_ConstructProps)
    _init (config?: ApplicationCommandLine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BufferedInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    buffer_size?: number
}
export class BufferedInputStream {
    /* Properties of Gio.BufferedInputStream */
    buffer_size: number
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio.BufferedInputStream */
    parent_instance: FilterInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: Gjs.byteArray.ByteArray, offset: number): number
    peek_buffer(): Gjs.byteArray.ByteArray
    read_byte(cancellable?: Cancellable | null): number
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfunc_fill(count: number, cancellable?: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_fill_finish(result: AsyncResult): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-size", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: BufferedInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferedInputStream_ConstructProps)
    _init (config?: BufferedInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: InputStream): BufferedInputStream
    static new_sized(base_stream: InputStream, size: number): BufferedInputStream
    static $gtype: GObject.Type
}
export interface BufferedOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    auto_grow?: boolean
    buffer_size?: number
}
export class BufferedOutputStream {
    /* Properties of Gio.BufferedOutputStream */
    auto_grow: boolean
    buffer_size: number
    /* Fields of Gio.BufferedOutputStream */
    parent_instance: FilterOutputStream
    priv: BufferedOutputStreamPrivate
    /* Fields of Gio.FilterOutputStream */
    base_stream: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.BufferedOutputStream */
    get_auto_grow(): boolean
    get_buffer_size(): number
    set_auto_grow(auto_grow: boolean): void
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedOutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-grow", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-grow", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: BufferedOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferedOutputStream_ConstructProps)
    _init (config?: BufferedOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: OutputStream): BufferedOutputStream
    static new_sized(base_stream: OutputStream, size: number): BufferedOutputStream
    static $gtype: GObject.Type
}
export interface BytesIcon_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: Gjs.byteArray.ByteArray
}
export class BytesIcon {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.BytesIcon */
    get_bytes(): Gjs.byteArray.ByteArray
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
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.BytesIcon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    vfunc_load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BytesIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BytesIcon_ConstructProps)
    _init (config?: BytesIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bytes: Gjs.byteArray.ByteArray): BytesIcon
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
    static $gtype: GObject.Type
}
export interface Cancellable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Cancellable {
    /* Fields of Gio.Cancellable */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handler_id: number): void
    get_fd(): number
    is_cancelled(): boolean
    make_pollfd(pollfd: GLib.PollFD): boolean
    pop_current(): void
    push_current(): void
    release_fd(): void
    reset(): void
    set_error_if_cancelled(): boolean
    source_new(): GLib.Source
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
    /* Virtual methods of Gio.Cancellable */
    vfunc_cancelled(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Cancellable */
    connect(sigName: "cancelled", callback: (($obj: Cancellable) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Cancellable) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cancellable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cancellable_ConstructProps)
    _init (config?: Cancellable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Cancellable
    static get_current(): Cancellable | null
    static $gtype: GObject.Type
}
export interface CharsetConverter_ConstructProps extends GObject.Object_ConstructProps {
    from_charset?: string
    to_charset?: string
    use_fallback?: boolean
}
export class CharsetConverter {
    /* Properties of Gio.CharsetConverter */
    use_fallback: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.CharsetConverter */
    get_num_fallbacks(): number
    get_use_fallback(): boolean
    set_use_fallback(use_fallback: boolean): void
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
    /* Methods of Gio.Converter */
    convert(inbuf: Gjs.byteArray.ByteArray, outbuf: Gjs.byteArray.ByteArray, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.CharsetConverter */
    vfunc_convert(inbuf: Gjs.byteArray.ByteArray | null, outbuf: Gjs.byteArray.ByteArray | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfunc_reset(): void
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::use-fallback", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-fallback", callback: (($obj: CharsetConverter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CharsetConverter_ConstructProps)
    _init (config?: CharsetConverter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(to_charset: string, from_charset: string): CharsetConverter
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ConverterInputStream_ConstructProps extends FilterInputStream_ConstructProps {
    converter?: Converter
}
export class ConverterInputStream {
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio.ConverterInputStream */
    parent_instance: FilterInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ConverterInputStream */
    get_converter(): Converter
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.ConverterInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: ConverterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConverterInputStream_ConstructProps)
    _init (config?: ConverterInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: InputStream, converter: Converter): ConverterInputStream
    static $gtype: GObject.Type
}
export interface ConverterOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    converter?: Converter
}
export class ConverterOutputStream {
    /* Fields of Gio.ConverterOutputStream */
    parent_instance: FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    base_stream: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ConverterOutputStream */
    get_converter(): Converter
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.ConverterOutputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    vfunc_writev_nonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConverterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConverterOutputStream_ConstructProps)
    _init (config?: ConverterOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: OutputStream, converter: Converter): ConverterOutputStream
    static $gtype: GObject.Type
}
export interface Credentials_ConstructProps extends GObject.Object_ConstructProps {
}
export class Credentials {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Credentials */
    get_unix_pid(): number
    get_unix_user(): number
    is_same_user(other_credentials: Credentials): boolean
    set_native(native_type: CredentialsType, native: object): void
    set_unix_user(uid: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Credentials, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Credentials_ConstructProps)
    _init (config?: Credentials_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Credentials
    static $gtype: GObject.Type
}
export interface DBusActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusActionGroup {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.RemoteActionGroup */
    activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of Gio.DBusActionGroup */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfunc_activate_action_full(action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant): void
    vfunc_change_action_state_full(action_name: string, value: GLib.Variant, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: DBusActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: DBusActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: DBusActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: DBusActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: DBusActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: DBusActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: DBusActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: DBusActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusActionGroup_ConstructProps)
    _init (config?: DBusActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusActionGroup
    static $gtype: GObject.Type
}
export interface DBusAuthObserver_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusAuthObserver {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusAuthObserver */
    allow_mechanism(mechanism: string): boolean
    authorize_authenticated_peer(stream: IOStream, credentials?: Credentials | null): boolean
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
    /* Signals of Gio.DBusAuthObserver */
    connect(sigName: "allow-mechanism", callback: (($obj: DBusAuthObserver, mechanism: string) => boolean)): number
    connect_after(sigName: "allow-mechanism", callback: (($obj: DBusAuthObserver, mechanism: string) => boolean)): number
    emit(sigName: "allow-mechanism", mechanism: string): void
    connect(sigName: "authorize-authenticated-peer", callback: (($obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    connect_after(sigName: "authorize-authenticated-peer", callback: (($obj: DBusAuthObserver, stream: IOStream, credentials?: Credentials | null) => boolean)): number
    emit(sigName: "authorize-authenticated-peer", stream: IOStream, credentials?: Credentials | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusAuthObserver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusAuthObserver_ConstructProps)
    _init (config?: DBusAuthObserver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusAuthObserver
    static $gtype: GObject.Type
}
export interface DBusConnection_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    authentication_observer?: DBusAuthObserver
    exit_on_close?: boolean
    flags?: DBusConnectionFlags
    guid?: string
    stream?: IOStream
}
export class DBusConnection {
    /* Properties of Gio.DBusConnection */
    readonly capabilities: DBusCapabilityFlags
    readonly closed: boolean
    exit_on_close: boolean
    readonly unique_name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusConnection */
    add_filter(filter_function: DBusMessageFilterFunction): number
    call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    call_with_unix_fd_list_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    close(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(res: AsyncResult): boolean
    close_sync(cancellable?: Cancellable | null): boolean
    emit_signal(destination_bus_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters?: GLib.Variant | null): boolean
    export_action_group(object_path: string, action_group: ActionGroup): number
    export_menu_model(object_path: string, menu: MenuModel): number
    flush(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(res: AsyncResult): boolean
    flush_sync(cancellable?: Cancellable | null): boolean
    get_capabilities(): DBusCapabilityFlags
    get_exit_on_close(): boolean
    get_flags(): DBusConnectionFlags
    get_guid(): string
    get_last_serial(): number
    get_peer_credentials(): Credentials | null
    get_stream(): IOStream
    get_unique_name(): string | null
    is_closed(): boolean
    register_object(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure?: Function, get_property_closure?: Function, set_property_closure?: Function): number
    register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number
    remove_filter(filter_id: number): void
    send_message(message: DBusMessage, flags: DBusSendMessageFlags): [ /* returnType */ boolean, /* out_serial */ number | null ]
    send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* out_serial */ number | null
    send_message_with_reply_finish(res: AsyncResult): DBusMessage
    send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, cancellable?: Cancellable | null): [ /* returnType */ DBusMessage, /* out_serial */ number | null ]
    set_exit_on_close(exit_on_close: boolean): void
    signal_subscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback): number
    signal_unsubscribe(subscription_id: number): void
    start_message_processing(): void
    unexport_action_group(export_id: number): void
    unexport_menu_model(export_id: number): void
    unregister_object(registration_id: number): boolean
    unregister_subtree(registration_id: number): boolean
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
    init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusConnection */
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_init_finish(res: AsyncResult): boolean
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusConnection */
    connect(sigName: "closed", callback: (($obj: DBusConnection, remote_peer_vanished: boolean, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "closed", callback: (($obj: DBusConnection, remote_peer_vanished: boolean, error?: GLib.Error | null) => void)): number
    emit(sigName: "closed", remote_peer_vanished: boolean, error?: GLib.Error | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exit-on-close", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exit-on-close", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unique-name", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unique-name", callback: (($obj: DBusConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusConnection_ConstructProps)
    _init (config?: DBusConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: AsyncResult): DBusConnection
    static new_for_address_finish(res: AsyncResult): DBusConnection
    static new_for_address_sync(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static new_sync(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusConnection
    static new_for_address(address: string, flags: DBusConnectionFlags, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusInterfaceSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_flags?: DBusInterfaceSkeletonFlags
}
export class DBusInterfaceSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): DBusConnection
    get_connections(): DBusConnection[]
    get_flags(): DBusInterfaceSkeletonFlags
    get_info(): DBusInterfaceInfo
    get_object_path(): string
    get_properties(): GLib.Variant
    has_connection(connection: DBusConnection): boolean
    set_flags(flags: DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: DBusConnection): void
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
    /* Methods of Gio.DBusInterface */
    get_object(): DBusObject
    set_object(object?: DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: DBusMethodInvocation): boolean
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    vfunc_dup_object(): DBusObject
    vfunc_set_object(object?: DBusObject | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-flags", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DBusInterfaceSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusInterfaceSkeleton_ConstructProps)
    _init (config?: DBusInterfaceSkeleton_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusMenuModel_ConstructProps extends MenuModel_ConstructProps {
}
export class DBusMenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: DBusMenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMenuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMenuModel_ConstructProps)
    _init (config?: DBusMenuModel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusMenuModel
    static $gtype: GObject.Type
}
export interface DBusMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMessage {
    /* Properties of Gio.DBusMessage */
    readonly locked: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusMessage */
    copy(): DBusMessage
    get_arg0(): string
    get_body(): GLib.Variant
    get_byte_order(): DBusMessageByteOrder
    get_destination(): string
    get_error_name(): string
    get_flags(): DBusMessageFlags
    get_header(header_field: DBusMessageHeaderField): GLib.Variant | null
    get_header_fields(): Gjs.byteArray.ByteArray
    get_interface(): string
    get_locked(): boolean
    get_member(): string
    get_message_type(): DBusMessageType
    get_num_unix_fds(): number
    get_path(): string
    get_reply_serial(): number
    get_sender(): string
    get_serial(): number
    get_signature(): string
    get_unix_fd_list(): UnixFDList
    lock(): void
    new_method_error_literal(error_name: string, error_message: string): DBusMessage
    new_method_reply(): DBusMessage
    print(indent: number): string
    set_body(body: GLib.Variant): void
    set_byte_order(byte_order: DBusMessageByteOrder): void
    set_destination(value: string): void
    set_error_name(value: string): void
    set_flags(flags: DBusMessageFlags): void
    set_header(header_field: DBusMessageHeaderField, value?: GLib.Variant | null): void
    set_interface(value: string): void
    set_member(value: string): void
    set_message_type(type: DBusMessageType): void
    set_num_unix_fds(value: number): void
    set_path(value: string): void
    set_reply_serial(value: number): void
    set_sender(value: string): void
    set_serial(serial: number): void
    set_signature(value: string): void
    set_unix_fd_list(fd_list?: UnixFDList | null): void
    to_blob(capabilities: DBusCapabilityFlags): Gjs.byteArray.ByteArray
    to_gerror(): boolean
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
    connect(sigName: "notify", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locked", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: DBusMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMessage_ConstructProps)
    _init (config?: DBusMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DBusMessage
    static new_from_blob(blob: Gjs.byteArray.ByteArray, capabilities: DBusCapabilityFlags): DBusMessage
    static new_method_call(name: string | null, path: string, interface_: string | null, method: string): DBusMessage
    static new_signal(path: string, interface_: string, signal: string): DBusMessage
    static bytes_needed(blob: Gjs.byteArray.ByteArray): number
    static $gtype: GObject.Type
}
export interface DBusMethodInvocation_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusMethodInvocation {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusMethodInvocation */
    get_connection(): DBusConnection
    get_interface_name(): string
    get_message(): DBusMessage
    get_method_info(): DBusMethodInfo
    get_method_name(): string
    get_object_path(): string
    get_parameters(): GLib.Variant
    get_property_info(): DBusPropertyInfo
    get_sender(): string
    return_dbus_error(error_name: string, error_message: string): void
    return_error_literal(domain: GLib.Quark, code: number, message: string): void
    return_gerror(error: GLib.Error): void
    return_value(parameters?: GLib.Variant | null): void
    return_value_with_unix_fd_list(parameters?: GLib.Variant | null, fd_list?: UnixFDList | null): void
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
    connect(sigName: "notify", callback: (($obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusMethodInvocation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusMethodInvocation_ConstructProps)
    _init (config?: DBusMethodInvocation_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusObjectManagerClient_ConstructProps extends GObject.Object_ConstructProps {
    bus_type?: BusType
    connection?: DBusConnection
    flags?: DBusObjectManagerClientFlags
    get_proxy_type_destroy_notify?: object
    get_proxy_type_func?: object
    get_proxy_type_user_data?: object
    name?: string
    object_path?: string
}
export class DBusObjectManagerClient {
    /* Properties of Gio.DBusObjectManagerClient */
    readonly name_owner: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerClient */
    get_connection(): DBusConnection
    get_flags(): DBusObjectManagerClientFlags
    get_name(): string
    get_name_owner(): string | null
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
    init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): DBusInterface
    get_object(object_path: string): DBusObject
    get_object_path(): string
    get_objects(): DBusObject[]
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusObjectManagerClient */
    vfunc_interface_proxy_properties_changed(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_interface_proxy_signal(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_init_finish(res: AsyncResult): boolean
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface
    vfunc_get_object(object_path: string): DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): DBusObject[]
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void
    vfunc_object_added(object: DBusObject): void
    vfunc_object_removed(object: DBusObject): void
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManagerClient */
    connect(sigName: "interface-proxy-properties-changed", callback: (($obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "interface-proxy-properties-changed", callback: (($obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "interface-proxy-properties-changed", object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "interface-proxy-signal", callback: (($obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "interface-proxy-signal", callback: (($obj: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "interface-proxy-signal", object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManagerClient, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::name-owner", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: DBusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectManagerClient_ConstructProps)
    _init (config?: DBusObjectManagerClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: AsyncResult): DBusObjectManagerClient
    static new_for_bus_finish(res: AsyncResult): DBusObjectManagerClient
    static new_for_bus_sync(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static new_sync(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null): DBusObjectManagerClient
    static new_for_bus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func?: DBusProxyTypeFunc | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusObjectManagerServer_ConstructProps extends GObject.Object_ConstructProps {
    connection?: DBusConnection
    object_path?: string
}
export class DBusObjectManagerServer {
    /* Properties of Gio.DBusObjectManagerServer */
    connection: DBusConnection
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectManagerServer */
    export(object: DBusObjectSkeleton): void
    export_uniquely(object: DBusObjectSkeleton): void
    get_connection(): DBusConnection
    is_exported(object: DBusObjectSkeleton): boolean
    set_connection(connection?: DBusConnection | null): void
    unexport(object_path: string): boolean
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
    /* Methods of Gio.DBusObjectManager */
    get_interface(object_path: string, interface_name: string): DBusInterface
    get_object(object_path: string): DBusObject
    get_object_path(): string
    get_objects(): DBusObject[]
    /* Virtual methods of Gio.DBusObjectManagerServer */
    vfunc_get_interface(object_path: string, interface_name: string): DBusInterface
    vfunc_get_object(object_path: string): DBusObject
    vfunc_get_object_path(): string
    vfunc_get_objects(): DBusObject[]
    vfunc_interface_added(object: DBusObject, interface_: DBusInterface): void
    vfunc_interface_removed(object: DBusObject, interface_: DBusInterface): void
    vfunc_object_added(object: DBusObject): void
    vfunc_object_removed(object: DBusObject): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectManager */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", object: DBusObject, interface: DBusInterface): void
    connect(sigName: "object-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-added", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-added", object: DBusObject): void
    connect(sigName: "object-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    connect_after(sigName: "object-removed", callback: (($obj: DBusObjectManagerServer, object: DBusObject) => void)): number
    emit(sigName: "object-removed", object: DBusObject): void
    connect(sigName: "notify::connection", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DBusObjectManagerServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectManagerServer_ConstructProps)
    _init (config?: DBusObjectManagerServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): DBusObjectManagerServer
    static $gtype: GObject.Type
}
export interface DBusObjectProxy_ConstructProps extends GObject.Object_ConstructProps {
    g_connection?: DBusConnection
    g_object_path?: string
}
export class DBusObjectProxy {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectProxy */
    get_connection(): DBusConnection
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
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): DBusInterface
    get_interfaces(): DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio.DBusObjectProxy */
    vfunc_get_interface(interface_name: string): DBusInterface
    vfunc_get_interfaces(): DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: DBusInterface): void
    vfunc_interface_removed(interface_: DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectProxy, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectProxy_ConstructProps)
    _init (config?: DBusObjectProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: DBusConnection, object_path: string): DBusObjectProxy
    static $gtype: GObject.Type
}
export interface DBusObjectSkeleton_ConstructProps extends GObject.Object_ConstructProps {
    g_object_path?: string
}
export class DBusObjectSkeleton {
    /* Properties of Gio.DBusObjectSkeleton */
    g_object_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusObjectSkeleton */
    add_interface(interface_: DBusInterfaceSkeleton): void
    flush(): void
    remove_interface(interface_: DBusInterfaceSkeleton): void
    remove_interface_by_name(interface_name: string): void
    set_object_path(object_path: string): void
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
    /* Methods of Gio.DBusObject */
    get_interface(interface_name: string): DBusInterface
    get_interfaces(): DBusInterface[]
    get_object_path(): string
    /* Virtual methods of Gio.DBusObjectSkeleton */
    vfunc_authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean
    vfunc_get_interface(interface_name: string): DBusInterface
    vfunc_get_interfaces(): DBusInterface[]
    vfunc_get_object_path(): string
    vfunc_interface_added(interface_: DBusInterface): void
    vfunc_interface_removed(interface_: DBusInterface): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObjectSkeleton */
    connect(sigName: "authorize-method", callback: (($obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "authorize-method", callback: (($obj: DBusObjectSkeleton, interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean)): number
    emit(sigName: "authorize-method", interface: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusObject */
    connect(sigName: "interface-added", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-added", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-added", interface: DBusInterface): void
    connect(sigName: "interface-removed", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    connect_after(sigName: "interface-removed", callback: (($obj: DBusObjectSkeleton, interface: DBusInterface) => void)): number
    emit(sigName: "interface-removed", interface: DBusInterface): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DBusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusObjectSkeleton_ConstructProps)
    _init (config?: DBusObjectSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object_path: string): DBusObjectSkeleton
    static $gtype: GObject.Type
}
export interface DBusProxy_ConstructProps extends GObject.Object_ConstructProps {
    g_bus_type?: BusType
    g_connection?: DBusConnection
    g_default_timeout?: number
    g_flags?: DBusProxyFlags
    g_interface_info?: DBusInterfaceInfo
    g_interface_name?: string
    g_name?: string
    g_object_path?: string
}
export class DBusProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    call_finish(res: AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable?: Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list?: UnixFDList | null, cancellable?: Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): DBusConnection
    get_default_timeout(): number
    get_flags(): DBusProxyFlags
    get_interface_info(): DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: DBusInterfaceInfo | null): void
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
    init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    init_finish(res: AsyncResult): boolean
    new_finish(res: AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): DBusObject
    get_info(): DBusInterfaceInfo
    set_object(object?: DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    vfunc_init_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_init_finish(res: AsyncResult): boolean
    vfunc_dup_object(): DBusObject
    vfunc_get_info(): DBusInterfaceInfo
    vfunc_set_object(object?: DBusObject | null): void
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DBusProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DBusProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DBusProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusProxy_ConstructProps)
    _init (config?: DBusProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: AsyncResult): DBusProxy
    static new_for_bus_finish(res: AsyncResult): DBusProxy
    static new_for_bus_sync(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Cancellable | null): DBusProxy
    static new_sync(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Cancellable | null): DBusProxy
    static new_for_bus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DBusServer_ConstructProps extends GObject.Object_ConstructProps {
    address?: string
    authentication_observer?: DBusAuthObserver
    flags?: DBusServerFlags
    guid?: string
}
export class DBusServer {
    /* Properties of Gio.DBusServer */
    readonly active: boolean
    readonly client_address: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusServer */
    get_client_address(): string
    get_flags(): DBusServerFlags
    get_guid(): string
    is_active(): boolean
    start(): void
    stop(): void
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
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DBusServer */
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusServer */
    connect(sigName: "new-connection", callback: (($obj: DBusServer, connection: DBusConnection) => boolean)): number
    connect_after(sigName: "new-connection", callback: (($obj: DBusServer, connection: DBusConnection) => boolean)): number
    emit(sigName: "new-connection", connection: DBusConnection): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-address", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-address", callback: (($obj: DBusServer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusServer_ConstructProps)
    _init (config?: DBusServer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_sync(address: string, flags: DBusServerFlags, guid: string, observer?: DBusAuthObserver | null, cancellable?: Cancellable | null): DBusServer
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DataInputStream_ConstructProps extends BufferedInputStream_ConstructProps {
    byte_order?: DataStreamByteOrder
    newline_type?: DataStreamNewlineType
}
export class DataInputStream {
    /* Properties of Gio.DataInputStream */
    byte_order: DataStreamByteOrder
    newline_type: DataStreamNewlineType
    /* Properties of Gio.BufferedInputStream */
    buffer_size: number
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio.DataInputStream */
    parent_instance: BufferedInputStream
    /* Fields of Gio.FilterInputStream */
    base_stream: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DataInputStream */
    get_byte_order(): DataStreamByteOrder
    get_newline_type(): DataStreamNewlineType
    read_byte(cancellable?: Cancellable | null): number
    read_int16(cancellable?: Cancellable | null): number
    read_int32(cancellable?: Cancellable | null): number
    read_int64(cancellable?: Cancellable | null): number
    read_line(cancellable?: Cancellable | null): [ /* returnType */ Gjs.byteArray.ByteArray | null, /* length */ number | null ]
    read_line_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_line_finish(result: AsyncResult): [ /* returnType */ Gjs.byteArray.ByteArray | null, /* length */ number | null ]
    read_line_finish_utf8(result: AsyncResult): [ /* returnType */ string | null, /* length */ number | null ]
    read_line_utf8(cancellable?: Cancellable | null): [ /* returnType */ string | null, /* length */ number | null ]
    read_uint16(cancellable?: Cancellable | null): number
    read_uint32(cancellable?: Cancellable | null): number
    read_uint64(cancellable?: Cancellable | null): number
    read_until(stop_chars: string, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    read_until_async(stop_chars: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_until_finish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    read_upto(stop_chars: string, stop_chars_len: number, cancellable?: Cancellable | null): [ /* returnType */ string, /* length */ number | null ]
    read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_upto_finish(result: AsyncResult): [ /* returnType */ string, /* length */ number | null ]
    set_byte_order(order: DataStreamByteOrder): void
    set_newline_type(type: DataStreamNewlineType): void
    /* Methods of Gio.BufferedInputStream */
    fill(count: number, cancellable?: Cancellable | null): number
    fill_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    fill_finish(result: AsyncResult): number
    get_available(): number
    get_buffer_size(): number
    peek(buffer: Gjs.byteArray.ByteArray, offset: number): number
    peek_buffer(): Gjs.byteArray.ByteArray
    set_buffer_size(size: number): void
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.BufferedInputStream */
    vfunc_fill(count: number, cancellable?: Cancellable | null): number
    vfunc_fill_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_fill_finish(result: AsyncResult): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::newline-type", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::buffer-size", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-size", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::close-base-stream", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: DataInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataInputStream_ConstructProps)
    _init (config?: DataInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: InputStream): DataInputStream
    static $gtype: GObject.Type
}
export interface DataOutputStream_ConstructProps extends FilterOutputStream_ConstructProps {
    byte_order?: DataStreamByteOrder
}
export class DataOutputStream {
    /* Properties of Gio.DataOutputStream */
    byte_order: DataStreamByteOrder
    /* Fields of Gio.DataOutputStream */
    parent_instance: FilterOutputStream
    /* Fields of Gio.FilterOutputStream */
    base_stream: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DataOutputStream */
    get_byte_order(): DataStreamByteOrder
    put_byte(data: number, cancellable?: Cancellable | null): boolean
    put_int16(data: number, cancellable?: Cancellable | null): boolean
    put_int32(data: number, cancellable?: Cancellable | null): boolean
    put_int64(data: number, cancellable?: Cancellable | null): boolean
    put_string(str: string, cancellable?: Cancellable | null): boolean
    put_uint16(data: number, cancellable?: Cancellable | null): boolean
    put_uint32(data: number, cancellable?: Cancellable | null): boolean
    put_uint64(data: number, cancellable?: Cancellable | null): boolean
    set_byte_order(order: DataStreamByteOrder): void
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.DataOutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::byte-order", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-order", callback: (($obj: DataOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataOutputStream_ConstructProps)
    _init (config?: DataOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: OutputStream): DataOutputStream
    static $gtype: GObject.Type
}
export interface DesktopAppInfo_ConstructProps extends GObject.Object_ConstructProps {
    filename?: string
}
export class DesktopAppInfo {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DesktopAppInfo */
    get_action_name(action_name: string): string
    get_boolean(key: string): boolean
    get_categories(): string
    get_filename(): string
    get_generic_name(): string
    get_is_hidden(): boolean
    get_keywords(): string[]
    get_locale_string(key: string): string | null
    get_nodisplay(): boolean
    get_show_in(desktop_env?: string | null): boolean
    get_startup_wm_class(): string
    get_string(key: string): string
    get_string_list(key: string): string[]
    has_key(key: string): boolean
    launch_action(action_name: string, launch_context?: AppLaunchContext | null): void
    launch_uris_as_manager(uris: string[], launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags): boolean
    launch_uris_as_manager_with_fds(uris: string[], launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean
    list_actions(): string[]
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
    /* Methods of Gio.AppInfo */
    add_supports_type(content_type: string): boolean
    can_delete(): boolean
    can_remove_supports_type(): boolean
    delete(): boolean
    dup(): AppInfo
    equal(appinfo2: AppInfo): boolean
    get_commandline(): string
    get_description(): string
    get_display_name(): string
    get_executable(): string
    get_icon(): Icon
    get_id(): string
    get_name(): string
    get_supported_types(): string[]
    launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    launch_uris_async(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    launch_uris_finish(result: AsyncResult): boolean
    remove_supports_type(content_type: string): boolean
    set_as_default_for_extension(extension: string): boolean
    set_as_default_for_type(content_type: string): boolean
    set_as_last_used_for_type(content_type: string): boolean
    should_show(): boolean
    supports_files(): boolean
    supports_uris(): boolean
    /* Virtual methods of Gio.DesktopAppInfo */
    vfunc_add_supports_type(content_type: string): boolean
    vfunc_can_delete(): boolean
    vfunc_can_remove_supports_type(): boolean
    vfunc_do_delete(): boolean
    vfunc_dup(): AppInfo
    vfunc_equal(appinfo2: AppInfo): boolean
    vfunc_get_commandline(): string
    vfunc_get_description(): string
    vfunc_get_display_name(): string
    vfunc_get_executable(): string
    vfunc_get_icon(): Icon
    vfunc_get_id(): string
    vfunc_get_name(): string
    vfunc_get_supported_types(): string[]
    vfunc_launch(files?: File[] | null, context?: AppLaunchContext | null): boolean
    vfunc_launch_uris(uris?: string[] | null, context?: AppLaunchContext | null): boolean
    vfunc_launch_uris_async(uris?: string[] | null, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_launch_uris_finish(result: AsyncResult): boolean
    vfunc_remove_supports_type(content_type: string): boolean
    vfunc_set_as_default_for_extension(extension: string): boolean
    vfunc_set_as_default_for_type(content_type: string): boolean
    vfunc_set_as_last_used_for_type(content_type: string): boolean
    vfunc_should_show(): boolean
    vfunc_supports_files(): boolean
    vfunc_supports_uris(): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DesktopAppInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DesktopAppInfo_ConstructProps)
    _init (config?: DesktopAppInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktop_id: string): DesktopAppInfo
    static new_from_filename(filename: string): DesktopAppInfo
    static new_from_keyfile(key_file: GLib.KeyFile): DesktopAppInfo
    static get_implementations(interface: string): DesktopAppInfo[]
    static search(search_string: string): any
    static set_desktop_env(desktop_env: string): void
    static create_from_commandline(commandline: string, application_name: string | null, flags: AppInfoCreateFlags): AppInfo
    static get_all(): AppInfo[]
    static get_all_for_type(content_type: string): AppInfo[]
    static get_default_for_type(content_type: string, must_support_uris: boolean): AppInfo | null
    static get_default_for_uri_scheme(uri_scheme: string): AppInfo | null
    static get_fallback_for_type(content_type: string): AppInfo[]
    static get_recommended_for_type(content_type: string): AppInfo[]
    static launch_default_for_uri(uri: string, context?: AppLaunchContext | null): boolean
    static launch_default_for_uri_async(uri: string, context?: AppLaunchContext | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    static launch_default_for_uri_finish(result: AsyncResult): boolean
    static reset_type_associations(content_type: string): void
    static $gtype: GObject.Type
}
export interface Emblem_ConstructProps extends GObject.Object_ConstructProps {
    icon?: GObject.Object
    origin?: EmblemOrigin
}
export class Emblem {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Emblem */
    get_icon(): Icon
    get_origin(): EmblemOrigin
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
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.Emblem */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Emblem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Emblem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Emblem_ConstructProps)
    _init (config?: Emblem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon): Emblem
    static new_with_origin(icon: Icon, origin: EmblemOrigin): Emblem
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
    static $gtype: GObject.Type
}
export interface EmblemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    gicon?: Icon
}
export class EmblemedIcon {
    /* Fields of Gio.EmblemedIcon */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.EmblemedIcon */
    add_emblem(emblem: Emblem): void
    clear_emblems(): void
    get_emblems(): Emblem[]
    get_icon(): Icon
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
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.EmblemedIcon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EmblemedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EmblemedIcon_ConstructProps)
    _init (config?: EmblemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(icon: Icon, emblem?: Emblem | null): EmblemedIcon
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
    static $gtype: GObject.Type
}
export interface FileEnumerator_ConstructProps extends GObject.Object_ConstructProps {
    container?: File
}
export class FileEnumerator {
    /* Fields of Gio.FileEnumerator */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileEnumerator */
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_child(info: FileInfo): File
    get_container(): File
    has_pending(): boolean
    is_closed(): boolean
    iterate(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* out_info */ FileInfo | null, /* out_child */ File | null ]
    next_file(cancellable?: Cancellable | null): FileInfo | null
    next_files_async(num_files: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    next_files_finish(result: AsyncResult): FileInfo[]
    set_pending(pending: boolean): void
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
    /* Virtual methods of Gio.FileEnumerator */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_next_file(cancellable?: Cancellable | null): FileInfo | null
    vfunc_next_files_async(num_files: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_next_files_finish(result: AsyncResult): FileInfo[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileEnumerator_ConstructProps)
    _init (config?: FileEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIOStream_ConstructProps extends IOStream_ConstructProps {
}
export class FileIOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.FileIOStream */
    parent_instance: IOStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileIOStream */
    get_etag(): string
    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileIOStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: FileIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileIOStream_ConstructProps)
    _init (config?: FileIOStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileIcon_ConstructProps extends GObject.Object_ConstructProps {
    file?: File
}
export class FileIcon {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileIcon */
    get_file(): File
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
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Methods of Gio.LoadableIcon */
    load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of Gio.FileIcon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    vfunc_load(size: number, cancellable?: Cancellable | null): [ /* returnType */ InputStream, /* type */ string | null ]
    vfunc_load_async(size: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_load_finish(res: AsyncResult): [ /* returnType */ InputStream, /* type */ string | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileIcon_ConstructProps)
    _init (config?: FileIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: File): FileIcon
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
    static $gtype: GObject.Type
}
export interface FileInfo_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileInfo {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileInfo */
    clear_status(): void
    copy_into(dest_info: FileInfo): void
    dup(): FileInfo
    get_attribute_as_string(attribute: string): string | null
    get_attribute_boolean(attribute: string): boolean
    get_attribute_byte_string(attribute: string): string | null
    get_attribute_data(attribute: string): [ /* returnType */ boolean, /* type */ FileAttributeType | null, /* value_pp */ object | null, /* status */ FileAttributeStatus | null ]
    get_attribute_int32(attribute: string): number
    get_attribute_int64(attribute: string): number
    get_attribute_object(attribute: string): GObject.Object | null
    get_attribute_status(attribute: string): FileAttributeStatus
    get_attribute_string(attribute: string): string | null
    get_attribute_stringv(attribute: string): string[] | null
    get_attribute_type(attribute: string): FileAttributeType
    get_attribute_uint32(attribute: string): number
    get_attribute_uint64(attribute: string): number
    get_content_type(): string | null
    get_deletion_date(): GLib.DateTime | null
    get_display_name(): string
    get_edit_name(): string
    get_etag(): string
    get_file_type(): FileType
    get_icon(): Icon
    get_is_backup(): boolean
    get_is_hidden(): boolean
    get_is_symlink(): boolean
    get_modification_date_time(): GLib.DateTime | null
    get_modification_time(): /* result */ GLib.TimeVal
    get_name(): string
    get_size(): number
    get_sort_order(): number
    get_symbolic_icon(): Icon
    get_symlink_target(): string
    has_attribute(attribute: string): boolean
    has_namespace(name_space: string): boolean
    list_attributes(name_space?: string | null): string[] | null
    remove_attribute(attribute: string): void
    set_attribute(attribute: string, type: FileAttributeType, value_p: object): void
    set_attribute_boolean(attribute: string, attr_value: boolean): void
    set_attribute_byte_string(attribute: string, attr_value: string): void
    set_attribute_int32(attribute: string, attr_value: number): void
    set_attribute_int64(attribute: string, attr_value: number): void
    set_attribute_mask(mask: FileAttributeMatcher): void
    set_attribute_object(attribute: string, attr_value: GObject.Object): void
    set_attribute_status(attribute: string, status: FileAttributeStatus): boolean
    set_attribute_string(attribute: string, attr_value: string): void
    set_attribute_stringv(attribute: string, attr_value: string[]): void
    set_attribute_uint32(attribute: string, attr_value: number): void
    set_attribute_uint64(attribute: string, attr_value: number): void
    set_content_type(content_type: string): void
    set_display_name(display_name: string): void
    set_edit_name(edit_name: string): void
    set_file_type(type: FileType): void
    set_icon(icon: Icon): void
    set_is_hidden(is_hidden: boolean): void
    set_is_symlink(is_symlink: boolean): void
    set_modification_date_time(mtime: GLib.DateTime): void
    set_modification_time(mtime: GLib.TimeVal): void
    set_name(name: string): void
    set_size(size: number): void
    set_sort_order(sort_order: number): void
    set_symbolic_icon(icon: Icon): void
    set_symlink_target(symlink_target: string): void
    unset_attribute_mask(): void
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
    connect(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileInfo_ConstructProps)
    _init (config?: FileInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FileInfo
    static $gtype: GObject.Type
}
export interface FileInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class FileInputStream {
    /* Fields of Gio.FileInputStream */
    parent_instance: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileInputStream */
    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileInputStream */
    vfunc_can_seek(): boolean
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_can_truncate(): boolean
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileInputStream_ConstructProps)
    _init (config?: FileInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileMonitor_ConstructProps extends GObject.Object_ConstructProps {
    rate_limit?: number
}
export class FileMonitor {
    /* Properties of Gio.FileMonitor */
    readonly cancelled: boolean
    rate_limit: number
    /* Fields of Gio.FileMonitor */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileMonitor */
    cancel(): boolean
    emit_event(child: File, other_file: File, event_type: FileMonitorEvent): void
    is_cancelled(): boolean
    set_rate_limit(limit_msecs: number): void
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
    /* Virtual methods of Gio.FileMonitor */
    vfunc_cancel(): boolean
    vfunc_changed(file: File, other_file: File, event_type: FileMonitorEvent): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FileMonitor */
    connect(sigName: "changed", callback: (($obj: FileMonitor, file: File, other_file: File | null, event_type: FileMonitorEvent) => void)): number
    connect_after(sigName: "changed", callback: (($obj: FileMonitor, file: File, other_file: File | null, event_type: FileMonitorEvent) => void)): number
    emit(sigName: "changed", file: File, other_file: File | null, event_type: FileMonitorEvent): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancelled", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancelled", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate-limit", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate-limit", callback: (($obj: FileMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileMonitor_ConstructProps)
    _init (config?: FileMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileOutputStream_ConstructProps extends OutputStream_ConstructProps {
}
export class FileOutputStream {
    /* Fields of Gio.FileOutputStream */
    parent_instance: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FileOutputStream */
    get_etag(): string
    query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    query_info_finish(result: AsyncResult): FileInfo
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.FileOutputStream */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_get_etag(): string
    vfunc_query_info(attributes: string, cancellable?: Cancellable | null): FileInfo
    vfunc_query_info_async(attributes: string, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_query_info_finish(result: AsyncResult): FileInfo
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(size: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileOutputStream_ConstructProps)
    _init (config?: FileOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilenameCompleter_ConstructProps extends GObject.Object_ConstructProps {
}
export class FilenameCompleter {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FilenameCompleter */
    get_completion_suffix(initial_text: string): string
    get_completions(initial_text: string): string[]
    set_dirs_only(dirs_only: boolean): void
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
    /* Virtual methods of Gio.FilenameCompleter */
    vfunc_got_completion_data(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.FilenameCompleter */
    connect(sigName: "got-completion-data", callback: (($obj: FilenameCompleter) => void)): number
    connect_after(sigName: "got-completion-data", callback: (($obj: FilenameCompleter) => void)): number
    emit(sigName: "got-completion-data"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilenameCompleter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilenameCompleter_ConstructProps)
    _init (config?: FilenameCompleter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilenameCompleter
    static $gtype: GObject.Type
}
export interface FilterInputStream_ConstructProps extends InputStream_ConstructProps {
    base_stream?: InputStream
    close_base_stream?: boolean
}
export class FilterInputStream {
    /* Properties of Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio.FilterInputStream */
    parent_instance: InputStream
    base_stream: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FilterInputStream */
    get_base_stream(): InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FilterOutputStream_ConstructProps extends OutputStream_ConstructProps {
    base_stream?: OutputStream
    close_base_stream?: boolean
}
export class FilterOutputStream {
    /* Fields of Gio.FilterOutputStream */
    parent_instance: OutputStream
    base_stream: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.FilterOutputStream */
    get_base_stream(): OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface IOModule_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class IOModule {
    /* Fields of GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.IOModule */
    load(): void
    unload(): void
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IOModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IOModule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IOModule_ConstructProps)
    _init (config?: IOModule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): IOModule
    static query(): string[]
    static $gtype: GObject.Type
}
export interface IOStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class IOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.IOStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: IOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IOStream_ConstructProps)
    _init (config?: IOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static splice_finish(result: AsyncResult): boolean
    static $gtype: GObject.Type
}
export interface InetAddress_ConstructProps extends GObject.Object_ConstructProps {
    bytes?: object
    family?: SocketFamily
}
export class InetAddress {
    /* Properties of Gio.InetAddress */
    readonly is_any: boolean
    readonly is_link_local: boolean
    readonly is_loopback: boolean
    readonly is_mc_global: boolean
    readonly is_mc_link_local: boolean
    readonly is_mc_node_local: boolean
    readonly is_mc_org_local: boolean
    readonly is_mc_site_local: boolean
    readonly is_multicast: boolean
    readonly is_site_local: boolean
    /* Fields of Gio.InetAddress */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.InetAddress */
    equal(other_address: InetAddress): boolean
    get_family(): SocketFamily
    get_is_any(): boolean
    get_is_link_local(): boolean
    get_is_loopback(): boolean
    get_is_mc_global(): boolean
    get_is_mc_link_local(): boolean
    get_is_mc_node_local(): boolean
    get_is_mc_org_local(): boolean
    get_is_mc_site_local(): boolean
    get_is_multicast(): boolean
    get_is_site_local(): boolean
    get_native_size(): number
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
    /* Virtual methods of Gio.InetAddress */
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-any", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-any", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loopback", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loopback", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-global", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-global", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-link-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-node-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-node-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-org-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-org-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-mc-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-mc-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-multicast", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-multicast", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-site-local", callback: (($obj: InetAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetAddress_ConstructProps)
    _init (config?: InetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_any(family: SocketFamily): InetAddress
    static new_from_bytes(bytes: Gjs.byteArray.ByteArray, family: SocketFamily): InetAddress
    static new_from_string(string: string): InetAddress
    static new_loopback(family: SocketFamily): InetAddress
    static $gtype: GObject.Type
}
export interface InetAddressMask_ConstructProps extends GObject.Object_ConstructProps {
    address?: InetAddress
    length?: number
}
export class InetAddressMask {
    /* Properties of Gio.InetAddressMask */
    address: InetAddress
    readonly family: SocketFamily
    length: number
    /* Fields of Gio.InetAddressMask */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.InetAddressMask */
    equal(mask2: InetAddressMask): boolean
    get_address(): InetAddress
    get_family(): SocketFamily
    get_length(): number
    matches(address: InetAddress): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InetAddressMask */
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: InetAddressMask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetAddressMask_ConstructProps)
    _init (config?: InetAddressMask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(addr: InetAddress, length: number): InetAddressMask
    static new_from_string(mask_string: string): InetAddressMask
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface InetSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    address?: InetAddress
    flowinfo?: number
    port?: number
    scope_id?: number
}
export class InetSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.InetSocketAddress */
    parent_instance: SocketAddress
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object | null, destlen: number): boolean
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: InetSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InetSocketAddress_ConstructProps)
    _init (config?: InetSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: InetAddress, port: number): InetSocketAddress
    static new_from_string(address: string, port: number): InetSocketAddress
    static $gtype: GObject.Type
}
export interface InputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class InputStream {
    /* Fields of Gio.InputStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputStream_ConstructProps)
    _init (config?: InputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ListStore_ConstructProps extends GObject.Object_ConstructProps {
    item_type?: GObject.Type
}
export class ListStore {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ListStore */
    append(item: GObject.Object): void
    find(item: GObject.Object): [ /* returnType */ boolean, /* position */ number | null ]
    find_with_equal_func(item: GObject.Object, equal_func: GLib.EqualFunc): [ /* returnType */ boolean, /* position */ number | null ]
    insert(position: number, item: GObject.Object): void
    insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc): number
    remove(position: number): void
    remove_all(): void
    sort(compare_func: GLib.CompareDataFunc): void
    splice(position: number, n_removals: number, additions: GObject.Object[]): void
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
    /* Methods of Gio.ListModel */
    get_item_type(): GObject.Type
    get_n_items(): number
    get_item(position: number): GObject.Object | null
    items_changed(position: number, removed: number, added: number): void
    /* Virtual methods of Gio.ListStore */
    vfunc_get_item(position: number): GObject.Object | null
    vfunc_get_item_type(): GObject.Type
    vfunc_get_n_items(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ListModel */
    connect(sigName: "items-changed", callback: (($obj: ListStore, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: ListStore, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListStore_ConstructProps)
    _init (config?: ListStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(item_type: GObject.Type): ListStore
    static $gtype: GObject.Type
}
export interface MemoryInputStream_ConstructProps extends InputStream_ConstructProps {
}
export class MemoryInputStream {
    /* Fields of Gio.MemoryInputStream */
    parent_instance: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MemoryInputStream */
    add_bytes(bytes: Gjs.byteArray.ByteArray): void
    add_data(data: Gjs.byteArray.ByteArray, destroy?: GLib.DestroyNotify | null): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryInputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryInputStream_ConstructProps)
    _init (config?: MemoryInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MemoryInputStream
    static new_from_bytes(bytes: Gjs.byteArray.ByteArray): MemoryInputStream
    static new_from_data(data: Gjs.byteArray.ByteArray, destroy?: GLib.DestroyNotify | null): MemoryInputStream
    static $gtype: GObject.Type
}
export interface MemoryOutputStream_ConstructProps extends OutputStream_ConstructProps {
    data?: object
    size?: number
}
export class MemoryOutputStream {
    /* Properties of Gio.MemoryOutputStream */
    readonly data_size: number
    /* Fields of Gio.MemoryOutputStream */
    parent_instance: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MemoryOutputStream */
    get_data(): object | null
    get_data_size(): number
    get_size(): number
    steal_as_bytes(): Gjs.byteArray.ByteArray
    steal_data(): object | null
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
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
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Methods of Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.MemoryOutputStream */
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    vfunc_writev_nonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-size", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-size", callback: (($obj: MemoryOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MemoryOutputStream_ConstructProps)
    _init (config?: MemoryOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_resizable(): MemoryOutputStream
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends MenuModel_ConstructProps {
}
export class Menu {
    /* Fields of Gio.MenuModel */
    parent_instance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Menu */
    append(label?: string | null, detailed_action?: string | null): void
    append_item(item: MenuItem): void
    append_section(label: string | null, section: MenuModel): void
    append_submenu(label: string | null, submenu: MenuModel): void
    freeze(): void
    insert(position: number, label?: string | null, detailed_action?: string | null): void
    insert_item(position: number, item: MenuItem): void
    insert_section(position: number, label: string | null, section: MenuModel): void
    insert_submenu(position: number, label: string | null, submenu: MenuModel): void
    prepend(label?: string | null, detailed_action?: string | null): void
    prepend_item(item: MenuItem): void
    prepend_section(label: string | null, section: MenuModel): void
    prepend_submenu(label: string | null, submenu: MenuModel): void
    remove(position: number): void
    remove_all(): void
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: Menu, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: Menu, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuAttributeIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuAttributeIter {
    /* Fields of Gio.MenuAttributeIter */
    parent_instance: GObject.Object
    priv: MenuAttributeIterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MenuAttributeIter */
    get_name(): string
    get_next(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    get_value(): GLib.Variant
    next(): boolean
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
    /* Virtual methods of Gio.MenuAttributeIter */
    vfunc_get_next(): [ /* returnType */ boolean, /* out_name */ string | null, /* value */ GLib.Variant | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuAttributeIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuAttributeIter_ConstructProps)
    _init (config?: MenuAttributeIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuItem {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MenuItem */
    get_attribute_value(attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    get_link(link: string): MenuModel
    set_action_and_target_value(action?: string | null, target_value?: GLib.Variant | null): void
    set_attribute_value(attribute: string, value?: GLib.Variant | null): void
    set_detailed_action(detailed_action: string): void
    set_icon(icon: Icon): void
    set_label(label?: string | null): void
    set_link(link: string, model?: MenuModel | null): void
    set_section(section?: MenuModel | null): void
    set_submenu(submenu?: MenuModel | null): void
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
    connect(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(label?: string | null, detailed_action?: string | null): MenuItem
    static new_from_model(model: MenuModel, item_index: number): MenuItem
    static new_section(label: string | null, section: MenuModel): MenuItem
    static new_submenu(label: string | null, submenu: MenuModel): MenuItem
    static $gtype: GObject.Type
}
export interface MenuLinkIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuLinkIter {
    /* Fields of Gio.MenuLinkIter */
    parent_instance: GObject.Object
    priv: MenuLinkIterPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MenuLinkIter */
    get_name(): string
    get_next(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    get_value(): MenuModel
    next(): boolean
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
    /* Virtual methods of Gio.MenuLinkIter */
    vfunc_get_next(): [ /* returnType */ boolean, /* out_link */ string | null, /* value */ MenuModel | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuLinkIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuLinkIter_ConstructProps)
    _init (config?: MenuLinkIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MenuModel_ConstructProps extends GObject.Object_ConstructProps {
}
export class MenuModel {
    /* Fields of Gio.MenuModel */
    parent_instance: GObject.Object
    priv: MenuModelPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MenuModel */
    get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    get_item_link(item_index: number, link: string): MenuModel
    get_n_items(): number
    is_mutable(): boolean
    items_changed(position: number, removed: number, added: number): void
    iterate_item_attributes(item_index: number): MenuAttributeIter
    iterate_item_links(item_index: number): MenuLinkIter
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
    /* Virtual methods of Gio.MenuModel */
    vfunc_get_item_attribute_value(item_index: number, attribute: string, expected_type?: GLib.VariantType | null): GLib.Variant
    vfunc_get_item_attributes(item_index: number): /* attributes */ GLib.HashTable
    vfunc_get_item_link(item_index: number, link: string): MenuModel
    vfunc_get_item_links(item_index: number): /* links */ GLib.HashTable
    vfunc_get_n_items(): number
    vfunc_is_mutable(): boolean
    vfunc_iterate_item_attributes(item_index: number): MenuAttributeIter
    vfunc_iterate_item_links(item_index: number): MenuLinkIter
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.MenuModel */
    connect(sigName: "items-changed", callback: (($obj: MenuModel, position: number, removed: number, added: number) => void)): number
    connect_after(sigName: "items-changed", callback: (($obj: MenuModel, position: number, removed: number, added: number) => void)): number
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuModel_ConstructProps)
    _init (config?: MenuModel_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MountOperation_ConstructProps extends GObject.Object_ConstructProps {
    anonymous?: boolean
    choice?: number
    domain?: string
    is_tcrypt_hidden_volume?: boolean
    is_tcrypt_system_volume?: boolean
    password?: string
    password_save?: PasswordSave
    pim?: number
    username?: string
}
export class MountOperation {
    /* Properties of Gio.MountOperation */
    anonymous: boolean
    choice: number
    domain: string
    is_tcrypt_hidden_volume: boolean
    is_tcrypt_system_volume: boolean
    password: string
    password_save: PasswordSave
    pim: number
    username: string
    /* Fields of Gio.MountOperation */
    parent_instance: GObject.Object
    priv: MountOperationPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.MountOperation */
    get_anonymous(): boolean
    get_choice(): number
    get_domain(): string
    get_is_tcrypt_hidden_volume(): boolean
    get_is_tcrypt_system_volume(): boolean
    get_password(): string
    get_password_save(): PasswordSave
    get_pim(): number
    get_username(): string
    reply(result: MountOperationResult): void
    set_anonymous(anonymous: boolean): void
    set_choice(choice: number): void
    set_domain(domain: string): void
    set_is_tcrypt_hidden_volume(hidden_volume: boolean): void
    set_is_tcrypt_system_volume(system_volume: boolean): void
    set_password(password: string): void
    set_password_save(save: PasswordSave): void
    set_pim(pim: number): void
    set_username(username: string): void
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
    vfunc_ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    vfunc_ask_question(message: string, choices: string[]): void
    vfunc_reply(result: MountOperationResult): void
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
    /* Signals of Gio.MountOperation */
    connect(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    connect_after(sigName: "aborted", callback: (($obj: MountOperation) => void)): number
    emit(sigName: "aborted"): void
    connect(sigName: "ask-password", callback: (($obj: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void)): number
    connect_after(sigName: "ask-password", callback: (($obj: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void)): number
    emit(sigName: "ask-password", message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void
    connect(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    connect_after(sigName: "ask-question", callback: (($obj: MountOperation, message: string, choices: string[]) => void)): number
    emit(sigName: "ask-question", message: string, choices: string[]): void
    connect(sigName: "reply", callback: (($obj: MountOperation, result: MountOperationResult) => void)): number
    connect_after(sigName: "reply", callback: (($obj: MountOperation, result: MountOperationResult) => void)): number
    emit(sigName: "reply", result: MountOperationResult): void
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
export interface NativeSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
}
export class NativeSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.NativeSocketAddress */
    parent_instance: SocketAddress
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object | null, destlen: number): boolean
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: NativeSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NativeSocketAddress_ConstructProps)
    _init (config?: NativeSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(native: object | null, len: number): NativeSocketAddress
    static $gtype: GObject.Type
}
export interface NativeVolumeMonitor_ConstructProps extends VolumeMonitor_ConstructProps {
}
export class NativeVolumeMonitor {
    /* Fields of Gio.NativeVolumeMonitor */
    parent_instance: VolumeMonitor
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    get_connected_drives(): Drive[]
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): Mount[]
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): Volume[]
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
    /* Virtual methods of Gio.VolumeMonitor */
    vfunc_drive_changed(drive: Drive): void
    vfunc_drive_connected(drive: Drive): void
    vfunc_drive_disconnected(drive: Drive): void
    vfunc_drive_eject_button(drive: Drive): void
    vfunc_drive_stop_button(drive: Drive): void
    vfunc_get_connected_drives(): Drive[]
    vfunc_get_mount_for_uuid(uuid: string): Mount
    vfunc_get_mounts(): Mount[]
    vfunc_get_volume_for_uuid(uuid: string): Volume
    vfunc_get_volumes(): Volume[]
    vfunc_mount_added(mount: Mount): void
    vfunc_mount_changed(mount: Mount): void
    vfunc_mount_pre_unmount(mount: Mount): void
    vfunc_mount_removed(mount: Mount): void
    vfunc_volume_added(volume: Volume): void
    vfunc_volume_changed(volume: Volume): void
    vfunc_volume_removed(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: (($obj: NativeVolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: (($obj: NativeVolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: (($obj: NativeVolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NativeVolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NativeVolumeMonitor_ConstructProps)
    _init (config?: NativeVolumeMonitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NetworkAddress_ConstructProps extends GObject.Object_ConstructProps {
    hostname?: string
    port?: number
    scheme?: string
}
export class NetworkAddress {
    /* Fields of Gio.NetworkAddress */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.NetworkAddress */
    get_hostname(): string
    get_port(): number
    get_scheme(): string
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.NetworkAddress */
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkAddress_ConstructProps)
    _init (config?: NetworkAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number): NetworkAddress
    static new_loopback(port: number): NetworkAddress
    static parse(host_and_port: string, default_port: number): NetworkAddress
    static parse_uri(uri: string, default_port: number): NetworkAddress
    static $gtype: GObject.Type
}
export interface NetworkService_ConstructProps extends GObject.Object_ConstructProps {
    domain?: string
    protocol?: string
    scheme?: string
    service?: string
}
export class NetworkService {
    /* Properties of Gio.NetworkService */
    scheme: string
    /* Fields of Gio.NetworkService */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.NetworkService */
    get_domain(): string
    get_protocol(): string
    get_scheme(): string
    get_service(): string
    set_scheme(scheme: string): void
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.NetworkService */
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::scheme", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: string, protocol: string, domain: string): NetworkService
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Notification */
    add_button(label: string, detailed_action: string): void
    add_button_with_target(label: string, action: string, target?: GLib.Variant | null): void
    set_body(body?: string | null): void
    set_default_action(detailed_action: string): void
    set_default_action_and_target(action: string, target?: GLib.Variant | null): void
    set_icon(icon: Icon): void
    set_priority(priority: NotificationPriority): void
    set_title(title: string): void
    set_urgent(urgent: boolean): void
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
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): Notification
    static $gtype: GObject.Type
}
export interface OutputStream_ConstructProps extends GObject.Object_ConstructProps {
}
export class OutputStream {
    /* Fields of Gio.OutputStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OutputStream_ConstructProps)
    _init (config?: OutputStream_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Permission_ConstructProps extends GObject.Object_ConstructProps {
}
export class Permission {
    /* Properties of Gio.Permission */
    readonly allowed: boolean
    readonly can_acquire: boolean
    readonly can_release: boolean
    /* Fields of Gio.Permission */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquire_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquire_finish(result: AsyncResult): boolean
    get_allowed(): boolean
    get_can_acquire(): boolean
    get_can_release(): boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable?: Cancellable | null): boolean
    release_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    release_finish(result: AsyncResult): boolean
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
    /* Virtual methods of Gio.Permission */
    vfunc_acquire(cancellable?: Cancellable | null): boolean
    vfunc_acquire_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable?: Cancellable | null): boolean
    vfunc_release_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: Permission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Permission_ConstructProps)
    _init (config?: Permission_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PropertyAction_ConstructProps extends GObject.Object_ConstructProps {
    invert_boolean?: boolean
    name?: string
    object?: GObject.Object
    property_name?: string
}
export class PropertyAction {
    /* Properties of Gio.PropertyAction */
    readonly enabled: boolean
    readonly parameter_type: GLib.VariantType
    readonly state: GLib.Variant
    readonly state_type: GLib.VariantType
    /* Properties of Gio.Action */
    readonly name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    change_state(value: GLib.Variant): void
    get_enabled(): boolean
    get_name(): string
    get_parameter_type(): GLib.VariantType | null
    get_state(): GLib.Variant
    get_state_hint(): GLib.Variant | null
    get_state_type(): GLib.VariantType | null
    /* Virtual methods of Gio.PropertyAction */
    vfunc_activate(parameter?: GLib.Variant | null): void
    vfunc_change_state(value: GLib.Variant): void
    vfunc_get_enabled(): boolean
    vfunc_get_name(): string
    vfunc_get_parameter_type(): GLib.VariantType | null
    vfunc_get_state(): GLib.Variant
    vfunc_get_state_hint(): GLib.Variant | null
    vfunc_get_state_type(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameter-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PropertyAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertyAction_ConstructProps)
    _init (config?: PropertyAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: GObject.Object, property_name: string): PropertyAction
    static name_is_valid(action_name: string): boolean
    static parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
    static print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
export interface ProxyAddress_ConstructProps extends InetSocketAddress_ConstructProps {
    destination_hostname?: string
    destination_port?: number
    destination_protocol?: string
    password?: string
    protocol?: string
    uri?: string
    username?: string
}
export class ProxyAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.ProxyAddress */
    parent_instance: InetSocketAddress
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ProxyAddress */
    get_destination_hostname(): string
    get_destination_port(): number
    get_destination_protocol(): string
    get_password(): string
    get_protocol(): string
    get_uri(): string
    get_username(): string
    /* Methods of Gio.InetSocketAddress */
    get_address(): InetAddress
    get_flowinfo(): number
    get_port(): number
    get_scope_id(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object | null, destlen: number): boolean
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: ProxyAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyAddress_ConstructProps)
    _init (config?: ProxyAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inetaddr: InetAddress, port: number, protocol: string, dest_hostname: string, dest_port: number, username?: string | null, password?: string | null): ProxyAddress
    static new(address: InetAddress, port: number): ProxyAddress
    static $gtype: GObject.Type
}
export interface ProxyAddressEnumerator_ConstructProps extends SocketAddressEnumerator_ConstructProps {
    connectable?: SocketConnectable
    default_port?: number
    proxy_resolver?: ProxyResolver
    uri?: string
}
export class ProxyAddressEnumerator {
    /* Properties of Gio.ProxyAddressEnumerator */
    proxy_resolver: ProxyResolver
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    next_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    next_finish(result: AsyncResult): SocketAddress
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
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfunc_next(cancellable?: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::proxy-resolver", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: ProxyAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyAddressEnumerator_ConstructProps)
    _init (config?: ProxyAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Resolver_ConstructProps extends GObject.Object_ConstructProps {
}
export class Resolver {
    /* Fields of Gio.Resolver */
    parent_instance: GObject.Object
    priv: ResolverPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Resolver */
    lookup_by_address(address: InetAddress, cancellable?: Cancellable | null): string
    lookup_by_address_async(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_by_address_finish(result: AsyncResult): string
    lookup_by_name(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    lookup_by_name_async(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_by_name_finish(result: AsyncResult): InetAddress[]
    lookup_by_name_with_flags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    lookup_by_name_with_flags_async(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_by_name_with_flags_finish(result: AsyncResult): InetAddress[]
    lookup_records(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_records_finish(result: AsyncResult): GLib.Variant[]
    lookup_service(service: string, protocol: string, domain: string, cancellable?: Cancellable | null): SrvTarget[]
    lookup_service_async(service: string, protocol: string, domain: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_service_finish(result: AsyncResult): SrvTarget[]
    set_default(): void
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
    /* Virtual methods of Gio.Resolver */
    vfunc_lookup_by_address(address: InetAddress, cancellable?: Cancellable | null): string
    vfunc_lookup_by_address_async(address: InetAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_by_address_finish(result: AsyncResult): string
    vfunc_lookup_by_name(hostname: string, cancellable?: Cancellable | null): InetAddress[]
    vfunc_lookup_by_name_async(hostname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_by_name_finish(result: AsyncResult): InetAddress[]
    vfunc_lookup_by_name_with_flags(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null): InetAddress[]
    vfunc_lookup_by_name_with_flags_async(hostname: string, flags: ResolverNameLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_by_name_with_flags_finish(result: AsyncResult): InetAddress[]
    vfunc_lookup_records(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null): GLib.Variant[]
    vfunc_lookup_records_async(rrname: string, record_type: ResolverRecordType, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_records_finish(result: AsyncResult): GLib.Variant[]
    vfunc_lookup_service_async(rrname: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_service_finish(result: AsyncResult): SrvTarget[]
    vfunc_reload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Resolver */
    connect(sigName: "reload", callback: (($obj: Resolver) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Resolver) => void)): number
    emit(sigName: "reload"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Resolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Resolver_ConstructProps)
    _init (config?: Resolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Resolver
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    backend?: SettingsBackend
    path?: string
    schema?: string
    schema_id?: string
    settings_schema?: SettingsSchema
}
export class Settings {
    /* Properties of Gio.Settings */
    readonly delay_apply: boolean
    readonly has_unapplied: boolean
    /* Fields of Gio.Settings */
    parent_instance: GObject.Object
    priv: SettingsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Settings */
    apply(): void
    bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void
    bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean): void
    create_action(key: string): Action
    delay(): void
    get_boolean(key: string): boolean
    get_child(name: string): Settings
    get_default_value(key: string): GLib.Variant | null
    get_double(key: string): number
    get_enum(key: string): number
    get_flags(key: string): number
    get_has_unapplied(): boolean
    get_int(key: string): number
    get_int64(key: string): number
    get_mapped(key: string, mapping: SettingsGetMapping): object | null
    get_range(key: string): GLib.Variant
    get_string(key: string): string
    get_strv(key: string): string[]
    get_uint(key: string): number
    get_uint64(key: string): number
    get_user_value(key: string): GLib.Variant | null
    get_value(key: string): GLib.Variant
    is_writable(name: string): boolean
    list_children(): string[]
    list_keys(): string[]
    range_check(key: string, value: GLib.Variant): boolean
    reset(key: string): void
    revert(): void
    set_boolean(key: string, value: boolean): boolean
    set_double(key: string, value: number): boolean
    set_enum(key: string, value: number): boolean
    set_flags(key: string, value: number): boolean
    set_int(key: string, value: number): boolean
    set_int64(key: string, value: number): boolean
    set_string(key: string, value: string): boolean
    set_strv(key: string, value?: string[] | null): boolean
    set_uint(key: string, value: number): boolean
    set_uint64(key: string, value: number): boolean
    set_value(key: string, value: GLib.Variant): boolean
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
    /* Virtual methods of Gio.Settings */
    vfunc_change_event(keys: GLib.Quark, n_keys: number): boolean
    vfunc_changed(key: string): void
    vfunc_writable_change_event(key: GLib.Quark): boolean
    vfunc_writable_changed(key: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.Settings */
    connect(sigName: "change-event", callback: (($obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    connect_after(sigName: "change-event", callback: (($obj: Settings, keys: GLib.Quark[] | null) => boolean)): number
    emit(sigName: "change-event", keys: GLib.Quark[] | null): void
    connect(sigName: "changed", callback: (($obj: Settings, key: string) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Settings, key: string) => void)): number
    emit(sigName: "changed", key: string): void
    connect(sigName: "writable-change-event", callback: (($obj: Settings, key: number) => boolean)): number
    connect_after(sigName: "writable-change-event", callback: (($obj: Settings, key: number) => boolean)): number
    emit(sigName: "writable-change-event", key: number): void
    connect(sigName: "writable-changed", callback: (($obj: Settings, key: string) => void)): number
    connect_after(sigName: "writable-changed", callback: (($obj: Settings, key: string) => void)): number
    emit(sigName: "writable-changed", key: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::delay-apply", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay-apply", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-unapplied", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-unapplied", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(schema_id: string): Settings
    static new_full(schema: SettingsSchema, backend?: SettingsBackend | null, path?: string | null): Settings
    static new_with_backend(schema_id: string, backend: SettingsBackend): Settings
    static new_with_backend_and_path(schema_id: string, backend: SettingsBackend, path: string): Settings
    static new_with_path(schema_id: string, path: string): Settings
    static list_relocatable_schemas(): string[]
    static list_schemas(): string[]
    static sync(): void
    static unbind(object: GObject.Object, property: string): void
    static $gtype: GObject.Type
}
export interface SettingsBackend_ConstructProps extends GObject.Object_ConstructProps {
}
export class SettingsBackend {
    /* Fields of Gio.SettingsBackend */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SettingsBackend */
    changed(key: string, origin_tag?: object | null): void
    changed_tree(tree: GLib.Tree, origin_tag?: object | null): void
    keys_changed(path: string, items: string[], origin_tag?: object | null): void
    path_changed(path: string, origin_tag?: object | null): void
    path_writable_changed(path: string): void
    writable_changed(key: string): void
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
    /* Virtual methods of Gio.SettingsBackend */
    vfunc_get_writable(key: string): boolean
    vfunc_read(key: string, expected_type: GLib.VariantType, default_value: boolean): GLib.Variant
    vfunc_read_user_value(key: string, expected_type: GLib.VariantType): GLib.Variant
    vfunc_reset(key: string, origin_tag?: object | null): void
    vfunc_subscribe(name: string): void
    vfunc_sync(): void
    vfunc_unsubscribe(name: string): void
    vfunc_write(key: string, value: GLib.Variant, origin_tag?: object | null): boolean
    vfunc_write_tree(tree: GLib.Tree, origin_tag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingsBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingsBackend_ConstructProps)
    _init (config?: SettingsBackend_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static flatten_tree(tree: GLib.Tree): [ /* path */ string, /* keys */ string[], /* values */ GLib.Variant[] | null ]
    static get_default(): SettingsBackend
    static $gtype: GObject.Type
}
export interface SimpleAction_ConstructProps extends GObject.Object_ConstructProps {
    enabled?: boolean
    name?: string
    parameter_type?: GLib.VariantType
    state?: GLib.Variant
}
export class SimpleAction {
    /* Properties of Gio.SimpleAction */
    enabled: boolean
    state: GLib.Variant
    readonly state_type: GLib.VariantType
    /* Properties of Gio.Action */
    readonly name: string
    readonly parameter_type: GLib.VariantType
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SimpleAction */
    set_enabled(enabled: boolean): void
    set_state(value: GLib.Variant): void
    set_state_hint(state_hint?: GLib.Variant | null): void
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
    /* Methods of Gio.Action */
    activate(parameter?: GLib.Variant | null): void
    change_state(value: GLib.Variant): void
    get_enabled(): boolean
    get_name(): string
    get_parameter_type(): GLib.VariantType | null
    get_state(): GLib.Variant
    get_state_hint(): GLib.Variant | null
    get_state_type(): GLib.VariantType | null
    /* Virtual methods of Gio.SimpleAction */
    vfunc_activate(parameter?: GLib.Variant | null): void
    vfunc_change_state(value: GLib.Variant): void
    vfunc_get_enabled(): boolean
    vfunc_get_name(): string
    vfunc_get_parameter_type(): GLib.VariantType | null
    vfunc_get_state(): GLib.Variant
    vfunc_get_state_hint(): GLib.Variant | null
    vfunc_get_state_type(): GLib.VariantType | null
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SimpleAction */
    connect(sigName: "activate", callback: (($obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    connect_after(sigName: "activate", callback: (($obj: SimpleAction, parameter?: GLib.Variant | null) => void)): number
    emit(sigName: "activate", parameter?: GLib.Variant | null): void
    connect(sigName: "change-state", callback: (($obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    connect_after(sigName: "change-state", callback: (($obj: SimpleAction, value?: GLib.Variant | null) => void)): number
    emit(sigName: "change-state", value?: GLib.Variant | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameter-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameter-type", callback: (($obj: SimpleAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleAction_ConstructProps)
    _init (config?: SimpleAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, parameter_type?: GLib.VariantType | null): SimpleAction
    static new_stateful(name: string, parameter_type: GLib.VariantType | null, state: GLib.Variant): SimpleAction
    static name_is_valid(action_name: string): boolean
    static parse_detailed_name(detailed_name: string): [ /* returnType */ boolean, /* action_name */ string, /* target_value */ GLib.Variant ]
    static print_detailed_name(action_name: string, target_value?: GLib.Variant | null): string
    static $gtype: GObject.Type
}
export interface SimpleActionGroup_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleActionGroup {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SimpleActionGroup */
    add_entries(entries: ActionEntry[], user_data?: object | null): void
    insert(action: Action): void
    lookup(action_name: string): Action
    remove(action_name: string): void
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
    /* Methods of Gio.ActionGroup */
    action_added(action_name: string): void
    action_enabled_changed(action_name: string, enabled: boolean): void
    action_removed(action_name: string): void
    action_state_changed(action_name: string, state: GLib.Variant): void
    activate_action(action_name: string, parameter?: GLib.Variant | null): void
    change_action_state(action_name: string, value: GLib.Variant): void
    get_action_enabled(action_name: string): boolean
    get_action_parameter_type(action_name: string): GLib.VariantType | null
    get_action_state(action_name: string): GLib.Variant | null
    get_action_state_hint(action_name: string): GLib.Variant | null
    get_action_state_type(action_name: string): GLib.VariantType | null
    has_action(action_name: string): boolean
    list_actions(): string[]
    query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio.ActionMap */
    add_action(action: Action): void
    add_action_entries(entries: ActionEntry[], user_data?: object | null): void
    lookup_action(action_name: string): Action
    remove_action(action_name: string): void
    /* Virtual methods of Gio.SimpleActionGroup */
    vfunc_action_added(action_name: string): void
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void
    vfunc_action_removed(action_name: string): void
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void
    vfunc_get_action_enabled(action_name: string): boolean
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null
    vfunc_get_action_state(action_name: string): GLib.Variant | null
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null
    vfunc_has_action(action_name: string): boolean
    vfunc_list_actions(): string[]
    vfunc_query_action(action_name: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameter_type */ GLib.VariantType | null, /* state_type */ GLib.VariantType | null, /* state_hint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    vfunc_add_action(action: Action): void
    vfunc_lookup_action(action_name: string): Action
    vfunc_remove_action(action_name: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleActionGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio.ActionGroup */
    connect(sigName: "action-added", callback: (($obj: SimpleActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-added", callback: (($obj: SimpleActionGroup, action_name: string) => void)): number
    emit(sigName: "action-added", action_name: string): void
    connect(sigName: "action-enabled-changed", callback: (($obj: SimpleActionGroup, action_name: string, enabled: boolean) => void)): number
    connect_after(sigName: "action-enabled-changed", callback: (($obj: SimpleActionGroup, action_name: string, enabled: boolean) => void)): number
    emit(sigName: "action-enabled-changed", action_name: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: (($obj: SimpleActionGroup, action_name: string) => void)): number
    connect_after(sigName: "action-removed", callback: (($obj: SimpleActionGroup, action_name: string) => void)): number
    emit(sigName: "action-removed", action_name: string): void
    connect(sigName: "action-state-changed", callback: (($obj: SimpleActionGroup, action_name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "action-state-changed", callback: (($obj: SimpleActionGroup, action_name: string, value: GLib.Variant) => void)): number
    emit(sigName: "action-state-changed", action_name: string, value: GLib.Variant): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleActionGroup_ConstructProps)
    _init (config?: SimpleActionGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleActionGroup
    static $gtype: GObject.Type
}
export interface SimpleAsyncResult_ConstructProps extends GObject.Object_ConstructProps {
}
export class SimpleAsyncResult {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SimpleAsyncResult */
    complete(): void
    complete_in_idle(): void
    get_op_res_gboolean(): boolean
    get_op_res_gssize(): number
    propagate_error(): boolean
    set_check_cancellable(check_cancellable?: Cancellable | null): void
    set_from_error(error: GLib.Error): void
    set_handle_cancellation(handle_cancellation: boolean): void
    set_op_res_gboolean(op_res: boolean): void
    set_op_res_gssize(op_res: number): void
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
    /* Methods of Gio.AsyncResult */
    get_source_object(): GObject.Object | null
    get_user_data(): object | null
    is_tagged(source_tag?: object | null): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gio.SimpleAsyncResult */
    vfunc_get_source_object(): GObject.Object | null
    vfunc_get_user_data(): object | null
    vfunc_is_tagged(source_tag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleAsyncResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleAsyncResult_ConstructProps)
    _init (config?: SimpleAsyncResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source_object?: GObject.Object | null, callback?: AsyncReadyCallback | null, source_tag?: object | null): SimpleAsyncResult
    static new_from_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, error: GLib.Error): SimpleAsyncResult
    static is_valid(result: AsyncResult, source?: GObject.Object | null, source_tag?: object | null): boolean
    static $gtype: GObject.Type
}
export interface SimpleIOStream_ConstructProps extends IOStream_ConstructProps {
    input_stream?: InputStream
    output_stream?: OutputStream
}
export class SimpleIOStream {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.IOStream */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: SimpleIOStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleIOStream_ConstructProps)
    _init (config?: SimpleIOStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input_stream: InputStream, output_stream: OutputStream): SimpleIOStream
    static $gtype: GObject.Type
}
export interface SimplePermission_ConstructProps extends Permission_ConstructProps {
}
export class SimplePermission {
    /* Properties of Gio.Permission */
    readonly allowed: boolean
    readonly can_acquire: boolean
    readonly can_release: boolean
    /* Fields of Gio.Permission */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Permission */
    acquire(cancellable?: Cancellable | null): boolean
    acquire_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    acquire_finish(result: AsyncResult): boolean
    get_allowed(): boolean
    get_can_acquire(): boolean
    get_can_release(): boolean
    impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void
    release(cancellable?: Cancellable | null): boolean
    release_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    release_finish(result: AsyncResult): boolean
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
    /* Virtual methods of Gio.Permission */
    vfunc_acquire(cancellable?: Cancellable | null): boolean
    vfunc_acquire_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_acquire_finish(result: AsyncResult): boolean
    vfunc_release(cancellable?: Cancellable | null): boolean
    vfunc_release_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_release_finish(result: AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-acquire", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-acquire", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-release", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-release", callback: (($obj: SimplePermission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimplePermission_ConstructProps)
    _init (config?: SimplePermission_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(allowed: boolean): SimplePermission
    static $gtype: GObject.Type
}
export interface SimpleProxyResolver_ConstructProps extends GObject.Object_ConstructProps {
    default_proxy?: string
    ignore_hosts?: string[]
}
export class SimpleProxyResolver {
    /* Properties of Gio.SimpleProxyResolver */
    default_proxy: string
    ignore_hosts: string[]
    /* Fields of Gio.SimpleProxyResolver */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SimpleProxyResolver */
    set_default_proxy(default_proxy: string): void
    set_ignore_hosts(ignore_hosts: string): void
    set_uri_proxy(uri_scheme: string, proxy: string): void
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
    /* Methods of Gio.ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable?: Cancellable | null): string[]
    lookup_async(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_finish(result: AsyncResult): string[]
    /* Virtual methods of Gio.SimpleProxyResolver */
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable?: Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: AsyncResult): string[]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-proxy", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-proxy", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-hosts", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: (($obj: SimpleProxyResolver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SimpleProxyResolver_ConstructProps)
    _init (config?: SimpleProxyResolver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): ProxyResolver
    static $gtype: GObject.Type
}
export interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    blocking?: boolean
    broadcast?: boolean
    family?: SocketFamily
    fd?: number
    keepalive?: boolean
    listen_backlog?: number
    multicast_loopback?: boolean
    multicast_ttl?: number
    protocol?: SocketProtocol
    timeout?: number
    ttl?: number
    type?: SocketType
}
export class Socket {
    /* Properties of Gio.Socket */
    blocking: boolean
    broadcast: boolean
    keepalive: boolean
    listen_backlog: number
    readonly local_address: SocketAddress
    multicast_loopback: boolean
    multicast_ttl: number
    readonly remote_address: SocketAddress
    timeout: number
    ttl: number
    /* Fields of Gio.Socket */
    parent_instance: GObject.Object
    priv: SocketPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Socket */
    accept(cancellable?: Cancellable | null): Socket
    bind(address: SocketAddress, allow_reuse: boolean): boolean
    check_connect_result(): boolean
    close(): boolean
    condition_check(condition: GLib.IOCondition): GLib.IOCondition
    condition_timed_wait(condition: GLib.IOCondition, timeout_us: number, cancellable?: Cancellable | null): boolean
    condition_wait(condition: GLib.IOCondition, cancellable?: Cancellable | null): boolean
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connection_factory_create_connection(): SocketConnection
    get_available_bytes(): number
    get_blocking(): boolean
    get_broadcast(): boolean
    get_credentials(): Credentials
    get_family(): SocketFamily
    get_fd(): number
    get_keepalive(): boolean
    get_listen_backlog(): number
    get_local_address(): SocketAddress
    get_multicast_loopback(): boolean
    get_multicast_ttl(): number
    get_option(level: number, optname: number): [ /* returnType */ boolean, /* value */ number ]
    get_protocol(): SocketProtocol
    get_remote_address(): SocketAddress
    get_socket_type(): SocketType
    get_timeout(): number
    get_ttl(): number
    is_closed(): boolean
    is_connected(): boolean
    join_multicast_group(group: InetAddress, source_specific: boolean, iface?: string | null): boolean
    join_multicast_group_ssm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean
    leave_multicast_group(group: InetAddress, source_specific: boolean, iface?: string | null): boolean
    leave_multicast_group_ssm(group: InetAddress, source_specific?: InetAddress | null, iface?: string | null): boolean
    listen(): boolean
    receive(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    receive_from(cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* buffer */ Gjs.byteArray.ByteArray ]
    receive_message(vectors: InputVector[], flags: number, cancellable?: Cancellable | null): [ /* returnType */ number, /* address */ SocketAddress | null, /* messages */ SocketControlMessage[] | null, /* flags */ number ]
    receive_messages(messages: InputMessage[], flags: number, cancellable?: Cancellable | null): number
    receive_with_blocking(blocking: boolean, cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    send(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    send_message(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, cancellable?: Cancellable | null): number
    send_message_with_timeout(address: SocketAddress | null, vectors: OutputVector[], messages: SocketControlMessage[] | null, flags: number, timeout_us: number, cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    send_messages(messages: OutputMessage[], flags: number, cancellable?: Cancellable | null): number
    send_to(address: SocketAddress | null, buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    send_with_blocking(buffer: Gjs.byteArray.ByteArray, blocking: boolean, cancellable?: Cancellable | null): number
    set_blocking(blocking: boolean): void
    set_broadcast(broadcast: boolean): void
    set_keepalive(keepalive: boolean): void
    set_listen_backlog(backlog: number): void
    set_multicast_loopback(loopback: boolean): void
    set_multicast_ttl(ttl: number): void
    set_option(level: number, optname: number, value: number): boolean
    set_timeout(timeout: number): void
    set_ttl(ttl: number): void
    shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean
    speaks_ipv4(): boolean
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
    /* Methods of Gio.DatagramBased */
    create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Socket */
    vfunc_condition_check(condition: GLib.IOCondition): GLib.IOCondition
    vfunc_condition_wait(condition: GLib.IOCondition, timeout: number, cancellable?: Cancellable | null): boolean
    vfunc_create_source(condition: GLib.IOCondition, cancellable?: Cancellable | null): GLib.Source
    vfunc_receive_messages(messages: InputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_send_messages(messages: OutputMessage[], flags: number, timeout: number, cancellable?: Cancellable | null): number
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocking", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::broadcast", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broadcast", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keepalive", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::multicast-loopback", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-loopback", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::multicast-ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multicast-ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ttl", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(family: SocketFamily, type: SocketType, protocol: SocketProtocol): Socket
    static new_from_fd(fd: number): Socket
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SocketAddress_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.SocketAddress */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object | null, destlen: number): boolean
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: SocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketAddress_ConstructProps)
    _init (config?: SocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_native(native: object, len: number): SocketAddress
    static $gtype: GObject.Type
}
export interface SocketAddressEnumerator_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketAddressEnumerator {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketAddressEnumerator */
    next(cancellable?: Cancellable | null): SocketAddress
    next_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    next_finish(result: AsyncResult): SocketAddress
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
    /* Virtual methods of Gio.SocketAddressEnumerator */
    vfunc_next(cancellable?: Cancellable | null): SocketAddress
    vfunc_next_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_next_finish(result: AsyncResult): SocketAddress
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketAddressEnumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketAddressEnumerator_ConstructProps)
    _init (config?: SocketAddressEnumerator_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SocketClient_ConstructProps extends GObject.Object_ConstructProps {
    enable_proxy?: boolean
    family?: SocketFamily
    local_address?: SocketAddress
    protocol?: SocketProtocol
    proxy_resolver?: ProxyResolver
    timeout?: number
    tls?: boolean
    tls_validation_flags?: TlsCertificateFlags
    type?: SocketType
}
export class SocketClient {
    /* Properties of Gio.SocketClient */
    enable_proxy: boolean
    family: SocketFamily
    local_address: SocketAddress
    protocol: SocketProtocol
    proxy_resolver: ProxyResolver
    timeout: number
    tls: boolean
    tls_validation_flags: TlsCertificateFlags
    type: SocketType
    /* Fields of Gio.SocketClient */
    parent_instance: GObject.Object
    priv: SocketClientPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketClient */
    add_application_proxy(protocol: string): void
    connect(connectable: SocketConnectable, cancellable?: Cancellable | null): SocketConnection
    connect_async(connectable: SocketConnectable, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): SocketConnection
    connect_to_host(host_and_port: string, default_port: number, cancellable?: Cancellable | null): SocketConnection
    connect_to_host_async(host_and_port: string, default_port: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_to_host_finish(result: AsyncResult): SocketConnection
    connect_to_service(domain: string, service: string, cancellable?: Cancellable | null): SocketConnection
    connect_to_service_async(domain: string, service: string, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_to_service_finish(result: AsyncResult): SocketConnection
    connect_to_uri(uri: string, default_port: number, cancellable?: Cancellable | null): SocketConnection
    connect_to_uri_async(uri: string, default_port: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_to_uri_finish(result: AsyncResult): SocketConnection
    get_enable_proxy(): boolean
    get_family(): SocketFamily
    get_local_address(): SocketAddress
    get_protocol(): SocketProtocol
    get_proxy_resolver(): ProxyResolver
    get_socket_type(): SocketType
    get_timeout(): number
    get_tls(): boolean
    get_tls_validation_flags(): TlsCertificateFlags
    set_enable_proxy(enable: boolean): void
    set_family(family: SocketFamily): void
    set_local_address(address?: SocketAddress | null): void
    set_protocol(protocol: SocketProtocol): void
    set_proxy_resolver(proxy_resolver?: ProxyResolver | null): void
    set_socket_type(type: SocketType): void
    set_timeout(timeout: number): void
    set_tls(tls: boolean): void
    set_tls_validation_flags(flags: TlsCertificateFlags): void
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
    /* Virtual methods of Gio.SocketClient */
    vfunc_event(event: SocketClientEvent, connectable: SocketConnectable, connection: IOStream): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketClient */
    connect(sigName: "event", callback: (($obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketClient, event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null) => void)): number
    emit(sigName: "event", event: SocketClientEvent, connectable: SocketConnectable, connection?: IOStream | null): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-proxy", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-proxy", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::family", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::local-address", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-address", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-validation-flags", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-validation-flags", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SocketClient, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketClient_ConstructProps)
    _init (config?: SocketClient_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketClient
    static $gtype: GObject.Type
}
export interface SocketConnection_ConstructProps extends IOStream_ConstructProps {
    socket?: Socket
}
export class SocketConnection {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.SocketConnection */
    parent_instance: IOStream
    priv: SocketConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: SocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketConnection_ConstructProps)
    _init (config?: SocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): GObject.Type
    static factory_register_type(g_type: GObject.Type, family: SocketFamily, type: SocketType, protocol: number): void
    static $gtype: GObject.Type
}
export interface SocketControlMessage_ConstructProps extends GObject.Object_ConstructProps {
}
export class SocketControlMessage {
    /* Fields of Gio.SocketControlMessage */
    parent_instance: GObject.Object
    priv: SocketControlMessagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketControlMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketControlMessage_ConstructProps)
    _init (config?: SocketControlMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static deserialize(level: number, type: number, data: Gjs.byteArray.ByteArray): SocketControlMessage
    static $gtype: GObject.Type
}
export interface SocketListener_ConstructProps extends GObject.Object_ConstructProps {
    listen_backlog?: number
}
export class SocketListener {
    /* Properties of Gio.SocketListener */
    listen_backlog: number
    /* Fields of Gio.SocketListener */
    parent_instance: GObject.Object
    priv: SocketListenerPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object?: GObject.Object | null): number
    add_inet_port(port: number, source_object?: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
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
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketListener, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::listen-backlog", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: SocketListener, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketListener_ConstructProps)
    _init (config?: SocketListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketListener
    static $gtype: GObject.Type
}
export interface SocketService_ConstructProps extends SocketListener_ConstructProps {
    active?: boolean
}
export class SocketService {
    /* Properties of Gio.SocketService */
    active: boolean
    /* Properties of Gio.SocketListener */
    listen_backlog: number
    /* Fields of Gio.SocketService */
    parent_instance: SocketListener
    priv: SocketServicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketService */
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object?: GObject.Object | null): number
    add_inet_port(port: number, source_object?: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
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
    /* Virtual methods of Gio.SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: (($obj: SocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: (($obj: SocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, source_object?: GObject.Object | null): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: SocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: SocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocketService_ConstructProps)
    _init (config?: SocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SocketService
    static $gtype: GObject.Type
}
export interface Subprocess_ConstructProps extends GObject.Object_ConstructProps {
    argv?: string[]
    flags?: SubprocessFlags
}
export class Subprocess {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Subprocess */
    communicate(stdin_buf?: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicate_async(stdin_buf?: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicate_finish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ Gjs.byteArray.ByteArray, /* stderr_buf */ Gjs.byteArray.ByteArray ]
    communicate_utf8(stdin_buf?: string | null, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* stdout_buf */ string | null, /* stderr_buf */ string | null ]
    communicate_utf8_async(stdin_buf?: string | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    communicate_utf8_finish(result: AsyncResult): [ /* returnType */ boolean, /* stdout_buf */ string | null, /* stderr_buf */ string | null ]
    force_exit(): void
    get_exit_status(): number
    get_identifier(): string | null
    get_if_exited(): boolean
    get_if_signaled(): boolean
    get_status(): number
    get_stderr_pipe(): InputStream
    get_stdin_pipe(): OutputStream
    get_stdout_pipe(): InputStream
    get_successful(): boolean
    get_term_sig(): number
    send_signal(signal_num: number): void
    wait(cancellable?: Cancellable | null): boolean
    wait_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    wait_check(cancellable?: Cancellable | null): boolean
    wait_check_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    wait_check_finish(result: AsyncResult): boolean
    wait_finish(result: AsyncResult): boolean
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
    /* Methods of Gio.Initable */
    init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of Gio.Subprocess */
    vfunc_init(cancellable?: Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subprocess_ConstructProps)
    _init (config?: Subprocess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(argv: string[], flags: SubprocessFlags): Subprocess
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface SubprocessLauncher_ConstructProps extends GObject.Object_ConstructProps {
    flags?: SubprocessFlags
}
export class SubprocessLauncher {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SubprocessLauncher */
    getenv(variable: string): string
    set_cwd(cwd: string): void
    set_environ(env: string[]): void
    set_flags(flags: SubprocessFlags): void
    set_stderr_file_path(path?: string | null): void
    set_stdin_file_path(path: string): void
    set_stdout_file_path(path?: string | null): void
    setenv(variable: string, value: string, overwrite: boolean): void
    spawnv(argv: string[]): Subprocess
    take_fd(source_fd: number, target_fd: number): void
    take_stderr_fd(fd: number): void
    take_stdin_fd(fd: number): void
    take_stdout_fd(fd: number): void
    unsetenv(variable: string): void
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
    connect(sigName: "notify", callback: (($obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubprocessLauncher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubprocessLauncher_ConstructProps)
    _init (config?: SubprocessLauncher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: SubprocessFlags): SubprocessLauncher
    static $gtype: GObject.Type
}
export interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
export class Task {
    /* Properties of Gio.Task */
    readonly completed: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Task */
    get_cancellable(): Cancellable
    get_check_cancellable(): boolean
    get_completed(): boolean
    get_context(): GLib.MainContext
    get_name(): string | null
    get_priority(): number
    get_return_on_cancel(): boolean
    get_source_object(): GObject.Object | null
    get_source_tag(): object | null
    get_task_data(): object | null
    had_error(): boolean
    propagate_boolean(): boolean
    propagate_int(): number
    propagate_pointer(): object | null
    propagate_value(): [ /* returnType */ boolean, /* value */ any ]
    return_boolean(result: boolean): void
    return_error(error: GLib.Error): void
    return_error_if_cancelled(): boolean
    return_int(result: number): void
    return_pointer(result?: object | null, result_destroy?: GLib.DestroyNotify | null): void
    return_value(result?: any): void
    run_in_thread(task_func: TaskThreadFunc): void
    run_in_thread_sync(task_func: TaskThreadFunc): void
    set_check_cancellable(check_cancellable: boolean): void
    set_name(name?: string | null): void
    set_priority(priority: number): void
    set_return_on_cancel(return_on_cancel: boolean): boolean
    set_source_tag(source_tag?: object | null): void
    set_task_data(task_data?: object | null, task_data_destroy?: GLib.DestroyNotify | null): void
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
    /* Methods of Gio.AsyncResult */
    get_user_data(): object | null
    is_tagged(source_tag?: object | null): boolean
    legacy_propagate_error(): boolean
    /* Virtual methods of Gio.Task */
    vfunc_get_source_object(): GObject.Object | null
    vfunc_get_user_data(): object | null
    vfunc_is_tagged(source_tag?: object | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::completed", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source_object?: GObject.Object | null, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): Task
    static is_valid(result: AsyncResult, source_object?: GObject.Object | null): boolean
    static report_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, source_tag: object | null, error: GLib.Error): void
    static $gtype: GObject.Type
}
export interface TcpConnection_ConstructProps extends SocketConnection_ConstructProps {
    graceful_disconnect?: boolean
}
export class TcpConnection {
    /* Properties of Gio.TcpConnection */
    graceful_disconnect: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.TcpConnection */
    parent_instance: SocketConnection
    priv: TcpConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TcpConnection */
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::graceful-disconnect", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TcpConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TcpConnection_ConstructProps)
    _init (config?: TcpConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TcpWrapperConnection_ConstructProps extends TcpConnection_ConstructProps {
    base_io_stream?: IOStream
}
export class TcpWrapperConnection {
    /* Properties of Gio.TcpConnection */
    graceful_disconnect: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.TcpWrapperConnection */
    parent_instance: TcpConnection
    priv: TcpWrapperConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TcpWrapperConnection */
    get_base_io_stream(): IOStream
    /* Methods of Gio.TcpConnection */
    get_graceful_disconnect(): boolean
    set_graceful_disconnect(graceful_disconnect: boolean): void
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::graceful-disconnect", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::graceful-disconnect", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TcpWrapperConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TcpWrapperConnection_ConstructProps)
    _init (config?: TcpWrapperConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_io_stream: IOStream, socket: Socket): TcpWrapperConnection
    static $gtype: GObject.Type
}
export interface TestDBus_ConstructProps extends GObject.Object_ConstructProps {
    flags?: TestDBusFlags
}
export class TestDBus {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TestDBus */
    add_service_dir(path: string): void
    down(): void
    get_bus_address(): string | null
    get_flags(): TestDBusFlags
    stop(): void
    up(): void
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
    connect(sigName: "notify", callback: (($obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TestDBus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TestDBus_ConstructProps)
    _init (config?: TestDBus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TestDBusFlags): TestDBus
    static unset(): void
    static $gtype: GObject.Type
}
export interface ThemedIcon_ConstructProps extends GObject.Object_ConstructProps {
    name?: string
    names?: string[]
    use_default_fallbacks?: boolean
}
export class ThemedIcon {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ThemedIcon */
    append_name(iconname: string): void
    get_names(): string[]
    prepend_name(iconname: string): void
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
    /* Methods of Gio.Icon */
    equal(icon2?: Icon | null): boolean
    serialize(): GLib.Variant
    to_string(): string | null
    /* Virtual methods of Gio.ThemedIcon */
    vfunc_equal(icon2?: Icon | null): boolean
    vfunc_hash(): number
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThemedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThemedIcon_ConstructProps)
    _init (config?: ThemedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(iconname: string): ThemedIcon
    static new_from_names(iconnames: string[]): ThemedIcon
    static new_with_default_fallbacks(iconname: string): ThemedIcon
    static deserialize(value: GLib.Variant): Icon
    static hash(icon: object): number
    static new_for_string(str: string): Icon
    static $gtype: GObject.Type
}
export interface ThreadedSocketService_ConstructProps extends SocketService_ConstructProps {
    max_threads?: number
}
export class ThreadedSocketService {
    /* Properties of Gio.SocketService */
    active: boolean
    /* Properties of Gio.SocketListener */
    listen_backlog: number
    /* Fields of Gio.ThreadedSocketService */
    parent_instance: SocketService
    priv: ThreadedSocketServicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.SocketService */
    is_active(): boolean
    start(): void
    stop(): void
    /* Methods of Gio.SocketListener */
    accept(cancellable?: Cancellable | null): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_finish(result: AsyncResult): [ /* returnType */ SocketConnection, /* source_object */ GObject.Object | null ]
    accept_socket(cancellable?: Cancellable | null): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    accept_socket_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    accept_socket_finish(result: AsyncResult): [ /* returnType */ Socket, /* source_object */ GObject.Object | null ]
    add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object?: GObject.Object | null): [ /* returnType */ boolean, /* effective_address */ SocketAddress | null ]
    add_any_inet_port(source_object?: GObject.Object | null): number
    add_inet_port(port: number, source_object?: GObject.Object | null): boolean
    add_socket(socket: Socket, source_object?: GObject.Object | null): boolean
    close(): void
    set_backlog(listen_backlog: number): void
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
    /* Virtual methods of Gio.ThreadedSocketService */
    vfunc_run(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketService */
    vfunc_incoming(connection: SocketConnection, source_object: GObject.Object): boolean
    /* Virtual methods of Gio.SocketListener */
    vfunc_changed(): void
    vfunc_event(event: SocketListenerEvent, socket: Socket): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.ThreadedSocketService */
    connect(sigName: "run", callback: (($obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "run", callback: (($obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    emit(sigName: "run", connection: SocketConnection, source_object?: GObject.Object | null): void
    /* Signals of Gio.SocketService */
    connect(sigName: "incoming", callback: (($obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    connect_after(sigName: "incoming", callback: (($obj: ThreadedSocketService, connection: SocketConnection, source_object?: GObject.Object | null) => boolean)): number
    emit(sigName: "incoming", connection: SocketConnection, source_object?: GObject.Object | null): void
    /* Signals of Gio.SocketListener */
    connect(sigName: "event", callback: (($obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    connect_after(sigName: "event", callback: (($obj: ThreadedSocketService, event: SocketListenerEvent, socket: Socket) => void)): number
    emit(sigName: "event", event: SocketListenerEvent, socket: Socket): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::listen-backlog", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::listen-backlog", callback: (($obj: ThreadedSocketService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThreadedSocketService_ConstructProps)
    _init (config?: ThreadedSocketService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(max_threads: number): ThreadedSocketService
    static new(): ThreadedSocketService
    static $gtype: GObject.Type
}
export interface TlsCertificate_ConstructProps extends GObject.Object_ConstructProps {
    certificate?: Gjs.byteArray.ByteArray
    certificate_pem?: string
    issuer?: TlsCertificate
    private_key?: Gjs.byteArray.ByteArray
    private_key_pem?: string
}
export class TlsCertificate {
    /* Fields of Gio.TlsCertificate */
    parent_instance: GObject.Object
    priv: TlsCertificatePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsCertificate */
    get_issuer(): TlsCertificate
    is_same(cert_two: TlsCertificate): boolean
    verify(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsCertificate */
    vfunc_verify(identity?: SocketConnectable | null, trusted_ca?: TlsCertificate | null): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsCertificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsCertificate_ConstructProps)
    _init (config?: TlsCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_file(file: string): TlsCertificate
    static new_from_files(cert_file: string, key_file: string): TlsCertificate
    static new_from_pem(data: string, length: number): TlsCertificate
    static list_new_from_file(file: string): TlsCertificate[]
    static $gtype: GObject.Type
}
export interface TlsConnection_ConstructProps extends IOStream_ConstructProps {
    advertised_protocols?: string[]
    base_io_stream?: IOStream
    certificate?: TlsCertificate
    database?: TlsDatabase
    interaction?: TlsInteraction
    rehandshake_mode?: TlsRehandshakeMode
    require_close_notify?: boolean
    use_system_certdb?: boolean
}
export class TlsConnection {
    /* Properties of Gio.TlsConnection */
    advertised_protocols: string[]
    certificate: TlsCertificate
    database: TlsDatabase
    interaction: TlsInteraction
    readonly negotiated_protocol: string
    readonly peer_certificate: TlsCertificate
    readonly peer_certificate_errors: TlsCertificateFlags
    rehandshake_mode: TlsRehandshakeMode
    require_close_notify: boolean
    use_system_certdb: boolean
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.TlsConnection */
    parent_instance: IOStream
    priv: TlsConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsConnection */
    emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    get_certificate(): TlsCertificate | null
    get_channel_binding_data(type: TlsChannelBindingType): [ /* returnType */ boolean, /* data */ Gjs.byteArray.ByteArray | null ]
    get_database(): TlsDatabase | null
    get_interaction(): TlsInteraction | null
    get_negotiated_protocol(): string | null
    get_peer_certificate(): TlsCertificate | null
    get_peer_certificate_errors(): TlsCertificateFlags
    get_rehandshake_mode(): TlsRehandshakeMode
    get_require_close_notify(): boolean
    get_use_system_certdb(): boolean
    handshake(cancellable?: Cancellable | null): boolean
    handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    handshake_finish(result: AsyncResult): boolean
    set_advertised_protocols(protocols?: string[] | null): void
    set_certificate(certificate: TlsCertificate): void
    set_database(database?: TlsDatabase | null): void
    set_interaction(interaction?: TlsInteraction | null): void
    set_rehandshake_mode(mode: TlsRehandshakeMode): void
    set_require_close_notify(require_close_notify: boolean): void
    set_use_system_certdb(use_system_certdb: boolean): void
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.TlsConnection */
    vfunc_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean
    vfunc_get_binding_data(type: TlsChannelBindingType, data: Gjs.byteArray.ByteArray): boolean
    vfunc_handshake(cancellable?: Cancellable | null): boolean
    vfunc_handshake_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_handshake_finish(result: AsyncResult): boolean
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.TlsConnection */
    connect(sigName: "accept-certificate", callback: (($obj: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", peer_cert: TlsCertificate, errors: TlsCertificateFlags): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::advertised-protocols", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::advertised-protocols", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::database", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::database", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interaction", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interaction", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::negotiated-protocol", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated-protocol", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::peer-certificate-errors", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rehandshake-mode", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rehandshake-mode", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-close-notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-close-notify", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-system-certdb", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-system-certdb", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::closed", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: TlsConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsConnection_ConstructProps)
    _init (config?: TlsConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsDatabase {
    /* Fields of Gio.TlsDatabase */
    parent_instance: GObject.Object
    priv: TlsDatabasePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsDatabase */
    create_certificate_handle(certificate: TlsCertificate): string | null
    lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[]
    verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    verify_chain_finish(result: AsyncResult): TlsCertificateFlags
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
    /* Virtual methods of Gio.TlsDatabase */
    vfunc_create_certificate_handle(certificate: TlsCertificate): string | null
    vfunc_lookup_certificate_for_handle(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate | null
    vfunc_lookup_certificate_for_handle_async(handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificate_for_handle_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificate_issuer(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate
    vfunc_lookup_certificate_issuer_async(certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificate_issuer_finish(result: AsyncResult): TlsCertificate
    vfunc_lookup_certificates_issued_by(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null): TlsCertificate[]
    vfunc_lookup_certificates_issued_by_async(issuer_raw_dn: Gjs.byteArray.ByteArray, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_lookup_certificates_issued_by_finish(result: AsyncResult): TlsCertificate[]
    vfunc_verify_chain(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null): TlsCertificateFlags
    vfunc_verify_chain_async(chain: TlsCertificate, purpose: string, identity: SocketConnectable | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_verify_chain_finish(result: AsyncResult): TlsCertificateFlags
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsDatabase_ConstructProps)
    _init (config?: TlsDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsInteraction_ConstructProps extends GObject.Object_ConstructProps {
}
export class TlsInteraction {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsInteraction */
    ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    ask_password_async(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    ask_password_finish(result: AsyncResult): TlsInteractionResult
    invoke_ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    request_certificate_finish(result: AsyncResult): TlsInteractionResult
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
    /* Virtual methods of Gio.TlsInteraction */
    vfunc_ask_password(password: TlsPassword, cancellable?: Cancellable | null): TlsInteractionResult
    vfunc_ask_password_async(password: TlsPassword, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_ask_password_finish(result: AsyncResult): TlsInteractionResult
    vfunc_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null): TlsInteractionResult
    vfunc_request_certificate_async(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_request_certificate_finish(result: AsyncResult): TlsInteractionResult
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsInteraction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsInteraction_ConstructProps)
    _init (config?: TlsInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
export interface TlsPassword_ConstructProps extends GObject.Object_ConstructProps {
    description?: string
    flags?: TlsPasswordFlags
    warning?: string
}
export class TlsPassword {
    /* Properties of Gio.TlsPassword */
    description: string
    flags: TlsPasswordFlags
    warning: string
    /* Fields of Gio.TlsPassword */
    parent_instance: GObject.Object
    priv: TlsPasswordPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.TlsPassword */
    get_description(): string
    get_flags(): TlsPasswordFlags
    get_value(length?: number | null): number
    get_warning(): string
    set_description(description: string): void
    set_flags(flags: TlsPasswordFlags): void
    set_value(value: Gjs.byteArray.ByteArray): void
    set_value_full(value: Gjs.byteArray.ByteArray, destroy?: GLib.DestroyNotify | null): void
    set_warning(warning: string): void
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
    /* Virtual methods of Gio.TlsPassword */
    vfunc_get_default_warning(): string
    vfunc_get_value(length?: number | null): number
    vfunc_set_value(value: Gjs.byteArray.ByteArray, destroy?: GLib.DestroyNotify | null): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning", callback: (($obj: TlsPassword, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TlsPassword_ConstructProps)
    _init (config?: TlsPassword_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: TlsPasswordFlags, description: string): TlsPassword
    static $gtype: GObject.Type
}
export interface UnixConnection_ConstructProps extends SocketConnection_ConstructProps {
}
export class UnixConnection {
    /* Properties of Gio.IOStream */
    readonly closed: boolean
    readonly input_stream: InputStream
    readonly output_stream: OutputStream
    /* Fields of Gio.UnixConnection */
    parent_instance: SocketConnection
    priv: UnixConnectionPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixConnection */
    receive_credentials(cancellable?: Cancellable | null): Credentials
    receive_credentials_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    receive_credentials_finish(result: AsyncResult): Credentials
    receive_fd(cancellable?: Cancellable | null): number
    send_credentials(cancellable?: Cancellable | null): boolean
    send_credentials_async(cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    send_credentials_finish(result: AsyncResult): boolean
    send_fd(fd: number, cancellable?: Cancellable | null): boolean
    /* Methods of Gio.SocketConnection */
    connect(address: SocketAddress, cancellable?: Cancellable | null): boolean
    connect_async(address: SocketAddress, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    connect_finish(result: AsyncResult): boolean
    get_local_address(): SocketAddress
    get_remote_address(): SocketAddress
    get_socket(): Socket
    is_connected(): boolean
    /* Methods of Gio.IOStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    get_input_stream(): InputStream
    get_output_stream(): OutputStream
    has_pending(): boolean
    is_closed(): boolean
    set_pending(): boolean
    splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
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
    /* Virtual methods of Gio.IOStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_get_input_stream(): InputStream
    vfunc_get_output_stream(): OutputStream
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::closed", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::output-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: UnixConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixConnection_ConstructProps)
    _init (config?: UnixConnection_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UnixCredentialsMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    credentials?: Credentials
}
export class UnixCredentialsMessage {
    /* Fields of Gio.UnixCredentialsMessage */
    parent_instance: SocketControlMessage
    priv: UnixCredentialsMessagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixCredentialsMessage */
    get_credentials(): Credentials
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixCredentialsMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixCredentialsMessage_ConstructProps)
    _init (config?: UnixCredentialsMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixCredentialsMessage
    static new_with_credentials(credentials: Credentials): UnixCredentialsMessage
    static is_supported(): boolean
    static $gtype: GObject.Type
}
export interface UnixFDList_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixFDList {
    /* Fields of Gio.UnixFDList */
    parent_instance: GObject.Object
    priv: UnixFDListPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixFDList */
    append(fd: number): number
    get(index_: number): number
    get_length(): number
    peek_fds(): number[]
    steal_fds(): number[]
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
    connect(sigName: "notify", callback: (($obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixFDList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixFDList_ConstructProps)
    _init (config?: UnixFDList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDList
    static new_from_array(fds: number[]): UnixFDList
    static $gtype: GObject.Type
}
export interface UnixFDMessage_ConstructProps extends SocketControlMessage_ConstructProps {
    fd_list?: UnixFDList
}
export class UnixFDMessage {
    /* Fields of Gio.UnixFDMessage */
    parent_instance: SocketControlMessage
    priv: UnixFDMessagePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixFDMessage */
    append_fd(fd: number): boolean
    get_fd_list(): UnixFDList
    steal_fds(): number[]
    /* Methods of Gio.SocketControlMessage */
    get_level(): number
    get_msg_type(): number
    get_size(): number
    serialize(data: object): void
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
    /* Virtual methods of Gio.SocketControlMessage */
    vfunc_get_level(): number
    vfunc_get_size(): number
    vfunc_get_type(): number
    vfunc_serialize(data: object): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixFDMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixFDMessage_ConstructProps)
    _init (config?: UnixFDMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixFDMessage
    static new_with_fd_list(fd_list: UnixFDList): UnixFDMessage
    static $gtype: GObject.Type
}
export interface UnixInputStream_ConstructProps extends InputStream_ConstructProps {
    close_fd?: boolean
    fd?: number
}
export class UnixInputStream {
    /* Properties of Gio.UnixInputStream */
    close_fd: boolean
    /* Fields of Gio.UnixInputStream */
    parent_instance: InputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixInputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Cancellable | null): [ /* returnType */ number, /* buffer */ Gjs.byteArray.ByteArray ]
    read_all(cancellable?: Cancellable | null): [ /* returnType */ boolean, /* buffer */ Gjs.byteArray.ByteArray, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray
    read_bytes(count: number, cancellable?: Cancellable | null): Gjs.byteArray.ByteArray
    read_bytes_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    read_bytes_finish(result: AsyncResult): Gjs.byteArray.ByteArray
    read_finish(result: AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    skip_finish(result: AsyncResult): number
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
    /* Methods of Gio.PollableInputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_readable(): boolean
    read_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    /* Virtual methods of Gio.UnixInputStream */
    vfunc_get_fd(): number
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_readable(): boolean
    vfunc_read_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    /* Virtual methods of Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): /* buffer */ Gjs.byteArray.ByteArray | null
    vfunc_read_finish(result: AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_skip_finish(result: AsyncResult): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: UnixInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixInputStream_ConstructProps)
    _init (config?: UnixInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, close_fd: boolean): UnixInputStream
    static $gtype: GObject.Type
}
export interface UnixMountMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class UnixMountMonitor {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixMountMonitor */
    set_rate_limit(limit_msec: number): void
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
    /* Signals of Gio.UnixMountMonitor */
    connect(sigName: "mountpoints-changed", callback: (($obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mountpoints-changed", callback: (($obj: UnixMountMonitor) => void)): number
    emit(sigName: "mountpoints-changed"): void
    connect(sigName: "mounts-changed", callback: (($obj: UnixMountMonitor) => void)): number
    connect_after(sigName: "mounts-changed", callback: (($obj: UnixMountMonitor) => void)): number
    emit(sigName: "mounts-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixMountMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixMountMonitor_ConstructProps)
    _init (config?: UnixMountMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnixMountMonitor
    static get(): UnixMountMonitor
    static $gtype: GObject.Type
}
export interface UnixOutputStream_ConstructProps extends OutputStream_ConstructProps {
    close_fd?: boolean
    fd?: number
}
export class UnixOutputStream {
    /* Properties of Gio.UnixOutputStream */
    close_fd: boolean
    /* Fields of Gio.UnixOutputStream */
    parent_instance: OutputStream
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixOutputStream */
    get_close_fd(): boolean
    get_fd(): number
    set_close_fd(close_fd: boolean): void
    /* Methods of Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    close_finish(result: AsyncResult): boolean
    flush(cancellable?: Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    flush_finish(result: AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    splice_finish(result: AsyncResult): number
    write(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_all(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes(bytes: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    write_bytes_async(bytes: Gjs.byteArray.ByteArray, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    write_bytes_finish(result: AsyncResult): number
    write_finish(result: AsyncResult): number
    writev(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_all_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Methods of Gio.PollableOutputStream */
    can_poll(): boolean
    create_source(cancellable?: Cancellable | null): GLib.Source
    is_writable(): boolean
    write_nonblocking(buffer: Gjs.byteArray.ByteArray, cancellable?: Cancellable | null): number
    writev_nonblocking(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.UnixOutputStream */
    vfunc_get_fd(): number
    vfunc_can_poll(): boolean
    vfunc_create_source(cancellable?: Cancellable | null): GLib.Source
    vfunc_is_writable(): boolean
    vfunc_write_nonblocking(buffer: Gjs.byteArray.ByteArray | null): number
    vfunc_writev_nonblocking(vectors: OutputVector[]): [ /* returnType */ PollableReturn, /* bytes_written */ number | null ]
    /* Virtual methods of Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_close_finish(result: AsyncResult): boolean
    vfunc_close_fn(cancellable?: Cancellable | null): boolean
    vfunc_flush(cancellable?: Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_flush_finish(result: AsyncResult): boolean
    vfunc_splice(source: InputStream, flags: OutputStreamSpliceFlags, cancellable?: Cancellable | null): number
    vfunc_splice_async(source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_splice_finish(result: AsyncResult): number
    vfunc_write_async(buffer: Gjs.byteArray.ByteArray | null, io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_write_finish(result: AsyncResult): number
    vfunc_write_fn(buffer: Gjs.byteArray.ByteArray | null, cancellable?: Cancellable | null): number
    vfunc_writev_async(vectors: OutputVector[], io_priority: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null): void
    vfunc_writev_finish(result: AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: OutputVector[], cancellable?: Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-fd", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-fd", callback: (($obj: UnixOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixOutputStream_ConstructProps)
    _init (config?: UnixOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, close_fd: boolean): UnixOutputStream
    static $gtype: GObject.Type
}
export interface UnixSocketAddress_ConstructProps extends SocketAddress_ConstructProps {
    abstract?: boolean
    address_type?: UnixSocketAddressType
    path?: string
    path_as_array?: Gjs.byteArray.ByteArray
}
export class UnixSocketAddress {
    /* Properties of Gio.SocketAddress */
    readonly family: SocketFamily
    /* Fields of Gio.UnixSocketAddress */
    parent_instance: SocketAddress
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.UnixSocketAddress */
    get_address_type(): UnixSocketAddressType
    get_is_abstract(): boolean
    get_path(): string
    get_path_len(): number
    /* Methods of Gio.SocketAddress */
    get_family(): SocketFamily
    get_native_size(): number
    to_native(dest: object | null, destlen: number): boolean
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
    /* Methods of Gio.SocketConnectable */
    enumerate(): SocketAddressEnumerator
    proxy_enumerate(): SocketAddressEnumerator
    to_string(): string
    /* Virtual methods of Gio.SocketAddress */
    vfunc_get_family(): SocketFamily
    vfunc_get_native_size(): number
    vfunc_to_native(dest: object | null, destlen: number): boolean
    vfunc_enumerate(): SocketAddressEnumerator
    vfunc_proxy_enumerate(): SocketAddressEnumerator
    vfunc_to_string(): string
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::family", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: UnixSocketAddress, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UnixSocketAddress_ConstructProps)
    _init (config?: UnixSocketAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): UnixSocketAddress
    static new_abstract(path: number[]): UnixSocketAddress
    static new_with_type(path: number[], type: UnixSocketAddressType): UnixSocketAddress
    static abstract_names_supported(): boolean
    static $gtype: GObject.Type
}
export interface Vfs_ConstructProps extends GObject.Object_ConstructProps {
}
export class Vfs {
    /* Fields of Gio.Vfs */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.Vfs */
    get_file_for_path(path: string): File
    get_file_for_uri(uri: string): File
    get_supported_uri_schemes(): string[]
    is_active(): boolean
    parse_name(parse_name: string): File
    register_uri_scheme(scheme: string, uri_func?: VfsFileLookupFunc | null, parse_name_func?: VfsFileLookupFunc | null): boolean
    unregister_uri_scheme(scheme: string): boolean
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
    /* Virtual methods of Gio.Vfs */
    vfunc_add_writable_namespaces(list: FileAttributeInfoList): void
    vfunc_get_file_for_path(path: string): File
    vfunc_get_file_for_uri(uri: string): File
    vfunc_get_supported_uri_schemes(): string[]
    vfunc_is_active(): boolean
    vfunc_local_file_add_info(filename: string, device: number, attribute_matcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extra_data: object | null, free_extra_data: GLib.DestroyNotify): void
    vfunc_local_file_moved(source: string, dest: string): void
    vfunc_local_file_removed(filename: string): void
    vfunc_local_file_set_attributes(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable?: Cancellable | null): boolean
    vfunc_parse_name(parse_name: string): File
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Vfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Vfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Vfs_ConstructProps)
    _init (config?: Vfs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Vfs
    static get_local(): Vfs
    static $gtype: GObject.Type
}
export interface VolumeMonitor_ConstructProps extends GObject.Object_ConstructProps {
}
export class VolumeMonitor {
    /* Fields of Gio.VolumeMonitor */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.VolumeMonitor */
    get_connected_drives(): Drive[]
    get_mount_for_uuid(uuid: string): Mount
    get_mounts(): Mount[]
    get_volume_for_uuid(uuid: string): Volume
    get_volumes(): Volume[]
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
    /* Virtual methods of Gio.VolumeMonitor */
    vfunc_drive_changed(drive: Drive): void
    vfunc_drive_connected(drive: Drive): void
    vfunc_drive_disconnected(drive: Drive): void
    vfunc_drive_eject_button(drive: Drive): void
    vfunc_drive_stop_button(drive: Drive): void
    vfunc_get_connected_drives(): Drive[]
    vfunc_get_mount_for_uuid(uuid: string): Mount
    vfunc_get_mounts(): Mount[]
    vfunc_get_volume_for_uuid(uuid: string): Volume
    vfunc_get_volumes(): Volume[]
    vfunc_mount_added(mount: Mount): void
    vfunc_mount_changed(mount: Mount): void
    vfunc_mount_pre_unmount(mount: Mount): void
    vfunc_mount_removed(mount: Mount): void
    vfunc_volume_added(volume: Volume): void
    vfunc_volume_changed(volume: Volume): void
    vfunc_volume_removed(volume: Volume): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.VolumeMonitor */
    connect(sigName: "drive-changed", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-changed", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-changed", drive: Drive): void
    connect(sigName: "drive-connected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-connected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-connected", drive: Drive): void
    connect(sigName: "drive-disconnected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-disconnected", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-disconnected", drive: Drive): void
    connect(sigName: "drive-eject-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-eject-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-eject-button", drive: Drive): void
    connect(sigName: "drive-stop-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    connect_after(sigName: "drive-stop-button", callback: (($obj: VolumeMonitor, drive: Drive) => void)): number
    emit(sigName: "drive-stop-button", drive: Drive): void
    connect(sigName: "mount-added", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-added", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-added", mount: Mount): void
    connect(sigName: "mount-changed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-changed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-changed", mount: Mount): void
    connect(sigName: "mount-pre-unmount", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-pre-unmount", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-pre-unmount", mount: Mount): void
    connect(sigName: "mount-removed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    connect_after(sigName: "mount-removed", callback: (($obj: VolumeMonitor, mount: Mount) => void)): number
    emit(sigName: "mount-removed", mount: Mount): void
    connect(sigName: "volume-added", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-added", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-added", volume: Volume): void
    connect(sigName: "volume-changed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-changed", volume: Volume): void
    connect(sigName: "volume-removed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    connect_after(sigName: "volume-removed", callback: (($obj: VolumeMonitor, volume: Volume) => void)): number
    emit(sigName: "volume-removed", volume: Volume): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VolumeMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VolumeMonitor_ConstructProps)
    _init (config?: VolumeMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static adopt_orphan_mount(mount: Mount): Volume
    static get(): VolumeMonitor
    static $gtype: GObject.Type
}
export interface ZlibCompressor_ConstructProps extends GObject.Object_ConstructProps {
    file_info?: FileInfo
    format?: ZlibCompressorFormat
    level?: number
}
export class ZlibCompressor {
    /* Properties of Gio.ZlibCompressor */
    file_info: FileInfo
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ZlibCompressor */
    get_file_info(): FileInfo
    set_file_info(file_info?: FileInfo | null): void
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
    /* Methods of Gio.Converter */
    convert(inbuf: Gjs.byteArray.ByteArray, outbuf: Gjs.byteArray.ByteArray, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of Gio.ZlibCompressor */
    vfunc_convert(inbuf: Gjs.byteArray.ByteArray | null, outbuf: Gjs.byteArray.ByteArray | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: (($obj: ZlibCompressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ZlibCompressor_ConstructProps)
    _init (config?: ZlibCompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat, level: number): ZlibCompressor
    static $gtype: GObject.Type
}
export interface ZlibDecompressor_ConstructProps extends GObject.Object_ConstructProps {
    format?: ZlibCompressorFormat
}
export class ZlibDecompressor {
    /* Properties of Gio.ZlibDecompressor */
    readonly file_info: FileInfo
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.ZlibDecompressor */
    get_file_info(): FileInfo
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
    /* Methods of Gio.Converter */
    convert(inbuf: Gjs.byteArray.ByteArray, outbuf: Gjs.byteArray.ByteArray, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    reset(): void
    /* Virtual methods of Gio.ZlibDecompressor */
    vfunc_convert(inbuf: Gjs.byteArray.ByteArray | null, outbuf: Gjs.byteArray.ByteArray | null, flags: ConverterFlags): [ /* returnType */ ConverterResult, /* bytes_read */ number, /* bytes_written */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file-info", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-info", callback: (($obj: ZlibDecompressor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ZlibDecompressor_ConstructProps)
    _init (config?: ZlibDecompressor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: ZlibCompressorFormat): ZlibDecompressor
    static $gtype: GObject.Type
}
export class ActionEntry {
    /* Fields of Gio.ActionEntry */
    name: string
    activate: any
    parameter_type: string
    state: string
    change_state: any
    static name: string
}
export abstract class ActionGroupInterface {
    /* Fields of Gio.ActionGroupInterface */
    g_iface: GObject.TypeInterface
    has_action: any
    list_actions: any
    get_action_enabled: any
    get_action_parameter_type: any
    get_action_state_type: any
    get_action_state_hint: any
    get_action_state: any
    change_action_state: any
    activate_action: any
    action_added: any
    action_removed: any
    action_enabled_changed: any
    action_state_changed: any
    query_action: any
    static name: string
}
export abstract class ActionInterface {
    /* Fields of Gio.ActionInterface */
    g_iface: GObject.TypeInterface
    get_name: any
    get_parameter_type: any
    get_state_type: any
    get_state_hint: any
    get_enabled: any
    get_state: any
    change_state: any
    activate: any
    static name: string
}
export abstract class ActionMapInterface {
    /* Fields of Gio.ActionMapInterface */
    g_iface: GObject.TypeInterface
    lookup_action: any
    add_action: any
    remove_action: any
    static name: string
}
export abstract class AppInfoIface {
    /* Fields of Gio.AppInfoIface */
    g_iface: GObject.TypeInterface
    dup: any
    equal: any
    get_id: any
    get_name: any
    get_description: any
    get_executable: any
    get_icon: any
    launch: any
    supports_uris: any
    supports_files: any
    launch_uris: any
    should_show: any
    set_as_default_for_type: any
    set_as_default_for_extension: any
    add_supports_type: any
    can_remove_supports_type: any
    remove_supports_type: any
    can_delete: any
    do_delete: any
    get_commandline: any
    get_display_name: any
    set_as_last_used_for_type: any
    get_supported_types: any
    launch_uris_async: any
    launch_uris_finish: any
    static name: string
}
export abstract class AppLaunchContextClass {
    /* Fields of Gio.AppLaunchContextClass */
    parent_class: GObject.ObjectClass
    get_display: any
    get_startup_notify_id: any
    launch_failed: any
    launched: any
    static name: string
}
export class AppLaunchContextPrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Fields of Gio.ApplicationClass */
    startup: any
    activate: any
    open: any
    command_line: any
    local_command_line: any
    before_emit: any
    after_emit: any
    add_platform_data: any
    quit_mainloop: any
    run_mainloop: any
    shutdown: any
    dbus_register: any
    dbus_unregister: any
    handle_local_options: any
    name_lost: any
    static name: string
}
export abstract class ApplicationCommandLineClass {
    /* Fields of Gio.ApplicationCommandLineClass */
    print_literal: any
    printerr_literal: any
    get_stdin: any
    static name: string
}
export class ApplicationCommandLinePrivate {
    static name: string
}
export class ApplicationPrivate {
    static name: string
}
export abstract class AsyncInitableIface {
    /* Fields of Gio.AsyncInitableIface */
    g_iface: GObject.TypeInterface
    init_async: any
    init_finish: any
    static name: string
}
export abstract class AsyncResultIface {
    /* Fields of Gio.AsyncResultIface */
    g_iface: GObject.TypeInterface
    get_user_data: any
    get_source_object: any
    is_tagged: any
    static name: string
}
export abstract class BufferedInputStreamClass {
    /* Fields of Gio.BufferedInputStreamClass */
    parent_class: FilterInputStreamClass
    fill: any
    fill_async: any
    fill_finish: any
    static name: string
}
export class BufferedInputStreamPrivate {
    static name: string
}
export abstract class BufferedOutputStreamClass {
    /* Fields of Gio.BufferedOutputStreamClass */
    parent_class: FilterOutputStreamClass
    static name: string
}
export class BufferedOutputStreamPrivate {
    static name: string
}
export abstract class CancellableClass {
    /* Fields of Gio.CancellableClass */
    parent_class: GObject.ObjectClass
    cancelled: any
    static name: string
}
export class CancellablePrivate {
    static name: string
}
export abstract class CharsetConverterClass {
    /* Fields of Gio.CharsetConverterClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ConverterIface {
    /* Fields of Gio.ConverterIface */
    g_iface: GObject.TypeInterface
    convert: any
    reset: any
    static name: string
}
export abstract class ConverterInputStreamClass {
    /* Fields of Gio.ConverterInputStreamClass */
    parent_class: FilterInputStreamClass
    static name: string
}
export class ConverterInputStreamPrivate {
    static name: string
}
export abstract class ConverterOutputStreamClass {
    /* Fields of Gio.ConverterOutputStreamClass */
    parent_class: FilterOutputStreamClass
    static name: string
}
export class ConverterOutputStreamPrivate {
    static name: string
}
export abstract class CredentialsClass {
    static name: string
}
export class DBusAnnotationInfo {
    /* Fields of Gio.DBusAnnotationInfo */
    ref_count: number
    key: string
    value: string
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusAnnotationInfo */
    ref(): DBusAnnotationInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string
}
export class DBusArgInfo {
    /* Fields of Gio.DBusArgInfo */
    ref_count: number
    name: string
    signature: string
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusArgInfo */
    ref(): DBusArgInfo
    unref(): void
    static name: string
}
export class DBusErrorEntry {
    /* Fields of Gio.DBusErrorEntry */
    error_code: number
    dbus_error_name: string
    static name: string
}
export abstract class DBusInterfaceIface {
    /* Fields of Gio.DBusInterfaceIface */
    parent_iface: GObject.TypeInterface
    get_info: any
    get_object: any
    set_object: any
    dup_object: any
    static name: string
}
export class DBusInterfaceInfo {
    /* Fields of Gio.DBusInterfaceInfo */
    ref_count: number
    name: string
    methods: DBusMethodInfo[]
    signals: DBusSignalInfo[]
    properties: DBusPropertyInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusInterfaceInfo */
    cache_build(): void
    cache_release(): void
    generate_xml(indent: number, string_builder: GLib.String): void
    lookup_method(name: string): DBusMethodInfo
    lookup_property(name: string): DBusPropertyInfo
    lookup_signal(name: string): DBusSignalInfo
    ref(): DBusInterfaceInfo
    unref(): void
    static name: string
}
export abstract class DBusInterfaceSkeletonClass {
    /* Fields of Gio.DBusInterfaceSkeletonClass */
    parent_class: GObject.ObjectClass
    get_info: any
    get_properties: any
    flush: any
    g_authorize_method: any
    static name: string
}
export class DBusInterfaceSkeletonPrivate {
    static name: string
}
export class DBusInterfaceVTable {
    /* Fields of Gio.DBusInterfaceVTable */
    method_call: DBusInterfaceMethodCallFunc
    get_property: DBusInterfaceGetPropertyFunc
    set_property: DBusInterfaceSetPropertyFunc
    static name: string
}
export class DBusMethodInfo {
    /* Fields of Gio.DBusMethodInfo */
    ref_count: number
    name: string
    in_args: DBusArgInfo[]
    out_args: DBusArgInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusMethodInfo */
    ref(): DBusMethodInfo
    unref(): void
    static name: string
}
export class DBusNodeInfo {
    /* Fields of Gio.DBusNodeInfo */
    ref_count: number
    path: string
    interfaces: DBusInterfaceInfo[]
    nodes: DBusNodeInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusNodeInfo */
    generate_xml(indent: number, string_builder: GLib.String): void
    lookup_interface(name: string): DBusInterfaceInfo
    ref(): DBusNodeInfo
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_for_xml(xml_data: string): DBusNodeInfo
}
export abstract class DBusObjectIface {
    /* Fields of Gio.DBusObjectIface */
    parent_iface: GObject.TypeInterface
    get_object_path: any
    get_interfaces: any
    get_interface: any
    interface_added: any
    interface_removed: any
    static name: string
}
export abstract class DBusObjectManagerClientClass {
    /* Fields of Gio.DBusObjectManagerClientClass */
    parent_class: GObject.ObjectClass
    interface_proxy_signal: any
    interface_proxy_properties_changed: any
    static name: string
}
export class DBusObjectManagerClientPrivate {
    static name: string
}
export abstract class DBusObjectManagerIface {
    /* Fields of Gio.DBusObjectManagerIface */
    parent_iface: GObject.TypeInterface
    get_object_path: any
    get_objects: any
    get_object: any
    get_interface: any
    object_added: any
    object_removed: any
    interface_added: any
    interface_removed: any
    static name: string
}
export abstract class DBusObjectManagerServerClass {
    /* Fields of Gio.DBusObjectManagerServerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DBusObjectManagerServerPrivate {
    static name: string
}
export abstract class DBusObjectProxyClass {
    /* Fields of Gio.DBusObjectProxyClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DBusObjectProxyPrivate {
    static name: string
}
export abstract class DBusObjectSkeletonClass {
    /* Fields of Gio.DBusObjectSkeletonClass */
    parent_class: GObject.ObjectClass
    authorize_method: any
    static name: string
}
export class DBusObjectSkeletonPrivate {
    static name: string
}
export class DBusPropertyInfo {
    /* Fields of Gio.DBusPropertyInfo */
    ref_count: number
    name: string
    signature: string
    flags: DBusPropertyInfoFlags
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusPropertyInfo */
    ref(): DBusPropertyInfo
    unref(): void
    static name: string
}
export abstract class DBusProxyClass {
    /* Fields of Gio.DBusProxyClass */
    g_properties_changed: any
    g_signal: any
    static name: string
}
export class DBusProxyPrivate {
    static name: string
}
export class DBusSignalInfo {
    /* Fields of Gio.DBusSignalInfo */
    ref_count: number
    name: string
    args: DBusArgInfo[]
    annotations: DBusAnnotationInfo[]
    /* Methods of Gio.DBusSignalInfo */
    ref(): DBusSignalInfo
    unref(): void
    static name: string
}
export class DBusSubtreeVTable {
    /* Fields of Gio.DBusSubtreeVTable */
    introspect: DBusSubtreeIntrospectFunc
    dispatch: DBusSubtreeDispatchFunc
    static name: string
}
export abstract class DataInputStreamClass {
    /* Fields of Gio.DataInputStreamClass */
    parent_class: BufferedInputStreamClass
    static name: string
}
export class DataInputStreamPrivate {
    static name: string
}
export abstract class DataOutputStreamClass {
    /* Fields of Gio.DataOutputStreamClass */
    parent_class: FilterOutputStreamClass
    static name: string
}
export class DataOutputStreamPrivate {
    static name: string
}
export abstract class DatagramBasedInterface {
    /* Fields of Gio.DatagramBasedInterface */
    g_iface: GObject.TypeInterface
    receive_messages: any
    send_messages: any
    create_source: any
    condition_check: any
    condition_wait: any
    static name: string
}
export abstract class DesktopAppInfoClass {
    /* Fields of Gio.DesktopAppInfoClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DesktopAppInfoLookupIface {
    /* Fields of Gio.DesktopAppInfoLookupIface */
    g_iface: GObject.TypeInterface
    get_default_for_uri_scheme: any
    static name: string
}
export abstract class DriveIface {
    /* Fields of Gio.DriveIface */
    g_iface: GObject.TypeInterface
    changed: any
    disconnected: any
    eject_button: any
    get_name: any
    get_icon: any
    has_volumes: any
    get_volumes: any
    is_media_removable: any
    has_media: any
    is_media_check_automatic: any
    can_eject: any
    can_poll_for_media: any
    eject: any
    eject_finish: any
    poll_for_media: any
    poll_for_media_finish: any
    get_identifier: any
    enumerate_identifiers: any
    get_start_stop_type: any
    can_start: any
    can_start_degraded: any
    start: any
    start_finish: any
    can_stop: any
    stop: any
    stop_finish: any
    stop_button: any
    eject_with_operation: any
    eject_with_operation_finish: any
    get_sort_key: any
    get_symbolic_icon: any
    is_removable: any
    static name: string
}
export abstract class DtlsClientConnectionInterface {
    /* Fields of Gio.DtlsClientConnectionInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class DtlsConnectionInterface {
    /* Fields of Gio.DtlsConnectionInterface */
    g_iface: GObject.TypeInterface
    accept_certificate: any
    handshake: any
    handshake_async: any
    handshake_finish: any
    shutdown: any
    shutdown_async: any
    shutdown_finish: any
    set_advertised_protocols: any
    get_negotiated_protocol: any
    get_binding_data: any
    static name: string
}
export abstract class DtlsServerConnectionInterface {
    /* Fields of Gio.DtlsServerConnectionInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class EmblemClass {
    static name: string
}
export abstract class EmblemedIconClass {
    /* Fields of Gio.EmblemedIconClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class EmblemedIconPrivate {
    static name: string
}
export class FileAttributeInfo {
    /* Fields of Gio.FileAttributeInfo */
    name: string
    type: FileAttributeType
    flags: FileAttributeInfoFlags
    static name: string
}
export class FileAttributeInfoList {
    /* Fields of Gio.FileAttributeInfoList */
    infos: FileAttributeInfo
    n_infos: number
    /* Methods of Gio.FileAttributeInfoList */
    add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void
    dup(): FileAttributeInfoList
    lookup(name: string): FileAttributeInfo
    ref(): FileAttributeInfoList
    unref(): void
    static name: string
    static new(): FileAttributeInfoList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FileAttributeInfoList
}
export class FileAttributeMatcher {
    /* Methods of Gio.FileAttributeMatcher */
    enumerate_namespace(ns: string): boolean
    enumerate_next(): string | null
    matches(attribute: string): boolean
    matches_only(attribute: string): boolean
    ref(): FileAttributeMatcher
    subtract(subtract: FileAttributeMatcher): FileAttributeMatcher
    to_string(): string
    unref(): void
    static name: string
    static new(attributes: string): FileAttributeMatcher
    constructor(attributes: string)
    /* Static methods and pseudo-constructors */
    static new(attributes: string): FileAttributeMatcher
}
export abstract class FileDescriptorBasedIface {
    /* Fields of Gio.FileDescriptorBasedIface */
    g_iface: GObject.TypeInterface
    get_fd: any
    static name: string
}
export abstract class FileEnumeratorClass {
    /* Fields of Gio.FileEnumeratorClass */
    parent_class: GObject.ObjectClass
    next_file: any
    close_fn: any
    next_files_async: any
    next_files_finish: any
    close_async: any
    close_finish: any
    static name: string
}
export class FileEnumeratorPrivate {
    static name: string
}
export abstract class FileIOStreamClass {
    /* Fields of Gio.FileIOStreamClass */
    parent_class: IOStreamClass
    tell: any
    can_seek: any
    seek: any
    can_truncate: any
    truncate_fn: any
    query_info: any
    query_info_async: any
    query_info_finish: any
    get_etag: any
    static name: string
}
export class FileIOStreamPrivate {
    static name: string
}
export abstract class FileIconClass {
    static name: string
}
export abstract class FileIface {
    /* Fields of Gio.FileIface */
    g_iface: GObject.TypeInterface
    dup: any
    hash: any
    equal: any
    is_native: any
    has_uri_scheme: any
    get_uri_scheme: any
    get_basename: any
    get_path: any
    get_uri: any
    get_parse_name: any
    get_parent: any
    prefix_matches: any
    get_relative_path: any
    resolve_relative_path: any
    get_child_for_display_name: any
    enumerate_children: any
    enumerate_children_async: any
    enumerate_children_finish: any
    query_info: any
    query_info_async: any
    query_info_finish: any
    query_filesystem_info: any
    query_filesystem_info_async: any
    query_filesystem_info_finish: any
    find_enclosing_mount: any
    find_enclosing_mount_async: any
    find_enclosing_mount_finish: any
    set_display_name: any
    set_display_name_async: any
    set_display_name_finish: any
    query_settable_attributes: any
    query_writable_namespaces: any
    set_attribute: any
    set_attributes_from_info: any
    set_attributes_async: any
    set_attributes_finish: any
    read_fn: any
    read_async: any
    read_finish: any
    append_to: any
    append_to_async: any
    append_to_finish: any
    create: any
    create_async: any
    create_finish: any
    replace: any
    replace_async: any
    replace_finish: any
    delete_file: any
    delete_file_async: any
    delete_file_finish: any
    trash: any
    trash_async: any
    trash_finish: any
    make_directory: any
    make_directory_async: any
    make_directory_finish: any
    make_symbolic_link: any
    copy: any
    copy_async: any
    copy_finish: any
    move: any
    mount_mountable: any
    mount_mountable_finish: any
    unmount_mountable: any
    unmount_mountable_finish: any
    eject_mountable: any
    eject_mountable_finish: any
    mount_enclosing_volume: any
    mount_enclosing_volume_finish: any
    monitor_dir: any
    monitor_file: any
    open_readwrite: any
    open_readwrite_async: any
    open_readwrite_finish: any
    create_readwrite: any
    create_readwrite_async: any
    create_readwrite_finish: any
    replace_readwrite: any
    replace_readwrite_async: any
    replace_readwrite_finish: any
    start_mountable: any
    start_mountable_finish: any
    stop_mountable: any
    stop_mountable_finish: any
    supports_thread_contexts: boolean
    unmount_mountable_with_operation: any
    unmount_mountable_with_operation_finish: any
    eject_mountable_with_operation: any
    eject_mountable_with_operation_finish: any
    poll_mountable: any
    poll_mountable_finish: any
    measure_disk_usage_finish: any
    static name: string
}
export abstract class FileInfoClass {
    static name: string
}
export abstract class FileInputStreamClass {
    /* Fields of Gio.FileInputStreamClass */
    parent_class: InputStreamClass
    tell: any
    can_seek: any
    seek: any
    query_info: any
    query_info_async: any
    query_info_finish: any
    static name: string
}
export class FileInputStreamPrivate {
    static name: string
}
export abstract class FileMonitorClass {
    /* Fields of Gio.FileMonitorClass */
    parent_class: GObject.ObjectClass
    changed: any
    cancel: any
    static name: string
}
export class FileMonitorPrivate {
    static name: string
}
export abstract class FileOutputStreamClass {
    /* Fields of Gio.FileOutputStreamClass */
    parent_class: OutputStreamClass
    tell: any
    can_seek: any
    seek: any
    can_truncate: any
    truncate_fn: any
    query_info: any
    query_info_async: any
    query_info_finish: any
    get_etag: any
    static name: string
}
export class FileOutputStreamPrivate {
    static name: string
}
export abstract class FilenameCompleterClass {
    /* Fields of Gio.FilenameCompleterClass */
    parent_class: GObject.ObjectClass
    got_completion_data: any
    static name: string
}
export abstract class FilterInputStreamClass {
    /* Fields of Gio.FilterInputStreamClass */
    parent_class: InputStreamClass
    static name: string
}
export abstract class FilterOutputStreamClass {
    /* Fields of Gio.FilterOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export class IOExtension {
    /* Methods of Gio.IOExtension */
    get_name(): string
    get_priority(): number
    get_type(): GObject.Type
    static name: string
}
export class IOExtensionPoint {
    /* Methods of Gio.IOExtensionPoint */
    get_extension_by_name(name: string): IOExtension
    get_extensions(): IOExtension[]
    get_required_type(): GObject.Type
    set_required_type(type: GObject.Type): void
    static name: string
    /* Static methods and pseudo-constructors */
    static implement(extension_point_name: string, type: GObject.Type, extension_name: string, priority: number): IOExtension
    static lookup(name: string): IOExtensionPoint
    static register(name: string): IOExtensionPoint
}
export abstract class IOModuleClass {
    static name: string
}
export class IOModuleScope {
    /* Methods of Gio.IOModuleScope */
    block(basename: string): void
    free(): void
    static name: string
}
export class IOSchedulerJob {
    /* Methods of Gio.IOSchedulerJob */
    send_to_mainloop(func: GLib.SourceFunc): boolean
    send_to_mainloop_async(func: GLib.SourceFunc): void
    static name: string
}
export class IOStreamAdapter {
    static name: string
}
export abstract class IOStreamClass {
    /* Fields of Gio.IOStreamClass */
    parent_class: GObject.ObjectClass
    get_input_stream: any
    get_output_stream: any
    close_fn: any
    close_async: any
    close_finish: any
    static name: string
}
export class IOStreamPrivate {
    static name: string
}
export abstract class IconIface {
    /* Fields of Gio.IconIface */
    g_iface: GObject.TypeInterface
    hash: any
    equal: any
    serialize: any
    static name: string
}
export abstract class InetAddressClass {
    /* Fields of Gio.InetAddressClass */
    parent_class: GObject.ObjectClass
    to_string: any
    to_bytes: any
    static name: string
}
export abstract class InetAddressMaskClass {
    /* Fields of Gio.InetAddressMaskClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class InetAddressMaskPrivate {
    static name: string
}
export class InetAddressPrivate {
    static name: string
}
export abstract class InetSocketAddressClass {
    /* Fields of Gio.InetSocketAddressClass */
    parent_class: SocketAddressClass
    static name: string
}
export class InetSocketAddressPrivate {
    static name: string
}
export abstract class InitableIface {
    /* Fields of Gio.InitableIface */
    g_iface: GObject.TypeInterface
    init: any
    static name: string
}
export class InputMessage {
    /* Fields of Gio.InputMessage */
    address: SocketAddress
    vectors: InputVector[]
    num_vectors: number
    bytes_received: number
    flags: number
    control_messages: SocketControlMessage[]
    num_control_messages: number
    static name: string
}
export abstract class InputStreamClass {
    /* Fields of Gio.InputStreamClass */
    parent_class: GObject.ObjectClass
    read_fn: any
    skip: any
    close_fn: any
    read_async: any
    read_finish: any
    skip_async: any
    skip_finish: any
    close_async: any
    close_finish: any
    static name: string
}
export class InputStreamPrivate {
    static name: string
}
export class InputVector {
    /* Fields of Gio.InputVector */
    buffer: object
    size: number
    static name: string
}
export abstract class ListModelInterface {
    /* Fields of Gio.ListModelInterface */
    g_iface: GObject.TypeInterface
    get_item_type: any
    get_n_items: any
    get_item: any
    static name: string
}
export abstract class ListStoreClass {
    /* Fields of Gio.ListStoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class LoadableIconIface {
    /* Fields of Gio.LoadableIconIface */
    g_iface: GObject.TypeInterface
    load: any
    load_async: any
    load_finish: any
    static name: string
}
export abstract class MemoryInputStreamClass {
    /* Fields of Gio.MemoryInputStreamClass */
    parent_class: InputStreamClass
    static name: string
}
export class MemoryInputStreamPrivate {
    static name: string
}
export abstract class MemoryMonitorInterface {
    /* Fields of Gio.MemoryMonitorInterface */
    low_memory_warning: any
    static name: string
}
export abstract class MemoryOutputStreamClass {
    /* Fields of Gio.MemoryOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export class MemoryOutputStreamPrivate {
    static name: string
}
export abstract class MenuAttributeIterClass {
    /* Fields of Gio.MenuAttributeIterClass */
    parent_class: GObject.ObjectClass
    get_next: any
    static name: string
}
export class MenuAttributeIterPrivate {
    static name: string
}
export abstract class MenuLinkIterClass {
    /* Fields of Gio.MenuLinkIterClass */
    parent_class: GObject.ObjectClass
    get_next: any
    static name: string
}
export class MenuLinkIterPrivate {
    static name: string
}
export abstract class MenuModelClass {
    /* Fields of Gio.MenuModelClass */
    parent_class: GObject.ObjectClass
    is_mutable: any
    get_n_items: any
    get_item_attributes: any
    iterate_item_attributes: any
    get_item_attribute_value: any
    get_item_links: any
    iterate_item_links: any
    get_item_link: any
    static name: string
}
export class MenuModelPrivate {
    static name: string
}
export abstract class MountIface {
    /* Fields of Gio.MountIface */
    g_iface: GObject.TypeInterface
    changed: any
    unmounted: any
    get_root: any
    get_name: any
    get_icon: any
    get_uuid: any
    get_volume: any
    get_drive: any
    can_unmount: any
    can_eject: any
    unmount: any
    unmount_finish: any
    eject: any
    eject_finish: any
    remount: any
    remount_finish: any
    guess_content_type: any
    guess_content_type_finish: any
    guess_content_type_sync: any
    pre_unmount: any
    unmount_with_operation: any
    unmount_with_operation_finish: any
    eject_with_operation: any
    eject_with_operation_finish: any
    get_default_location: any
    get_sort_key: any
    get_symbolic_icon: any
    static name: string
}
export abstract class MountOperationClass {
    /* Fields of Gio.MountOperationClass */
    parent_class: GObject.ObjectClass
    ask_password: any
    ask_question: any
    reply: any
    aborted: any
    show_processes: any
    show_unmount_progress: any
    static name: string
}
export class MountOperationPrivate {
    static name: string
}
export abstract class NativeSocketAddressClass {
    /* Fields of Gio.NativeSocketAddressClass */
    parent_class: SocketAddressClass
    static name: string
}
export class NativeSocketAddressPrivate {
    static name: string
}
export abstract class NativeVolumeMonitorClass {
    /* Fields of Gio.NativeVolumeMonitorClass */
    parent_class: VolumeMonitorClass
    static name: string
}
export abstract class NetworkAddressClass {
    /* Fields of Gio.NetworkAddressClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NetworkAddressPrivate {
    static name: string
}
export abstract class NetworkMonitorInterface {
    /* Fields of Gio.NetworkMonitorInterface */
    g_iface: GObject.TypeInterface
    network_changed: any
    can_reach: any
    can_reach_async: any
    can_reach_finish: any
    static name: string
}
export abstract class NetworkServiceClass {
    /* Fields of Gio.NetworkServiceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NetworkServicePrivate {
    static name: string
}
export class OutputMessage {
    /* Fields of Gio.OutputMessage */
    address: SocketAddress
    vectors: OutputVector
    num_vectors: number
    bytes_sent: number
    control_messages: SocketControlMessage[]
    num_control_messages: number
    static name: string
}
export abstract class OutputStreamClass {
    /* Fields of Gio.OutputStreamClass */
    parent_class: GObject.ObjectClass
    write_fn: any
    splice: any
    flush: any
    close_fn: any
    write_async: any
    write_finish: any
    splice_async: any
    splice_finish: any
    flush_async: any
    flush_finish: any
    close_async: any
    close_finish: any
    writev_fn: any
    writev_async: any
    writev_finish: any
    static name: string
}
export class OutputStreamPrivate {
    static name: string
}
export class OutputVector {
    /* Fields of Gio.OutputVector */
    buffer: object
    size: number
    static name: string
}
export abstract class PermissionClass {
    /* Fields of Gio.PermissionClass */
    parent_class: GObject.ObjectClass
    acquire: any
    acquire_async: any
    acquire_finish: any
    release: any
    release_async: any
    release_finish: any
    reserved: object[]
    static name: string
}
export class PermissionPrivate {
    static name: string
}
export abstract class PollableInputStreamInterface {
    /* Fields of Gio.PollableInputStreamInterface */
    g_iface: GObject.TypeInterface
    can_poll: any
    is_readable: any
    create_source: any
    read_nonblocking: any
    static name: string
}
export abstract class PollableOutputStreamInterface {
    /* Fields of Gio.PollableOutputStreamInterface */
    g_iface: GObject.TypeInterface
    can_poll: any
    is_writable: any
    create_source: any
    write_nonblocking: any
    writev_nonblocking: any
    static name: string
}
export abstract class ProxyAddressClass {
    /* Fields of Gio.ProxyAddressClass */
    parent_class: InetSocketAddressClass
    static name: string
}
export abstract class ProxyAddressEnumeratorClass {
    static name: string
}
export class ProxyAddressEnumeratorPrivate {
    static name: string
}
export class ProxyAddressPrivate {
    static name: string
}
export abstract class ProxyInterface {
    /* Fields of Gio.ProxyInterface */
    g_iface: GObject.TypeInterface
    connect: any
    connect_async: any
    connect_finish: any
    supports_hostname: any
    static name: string
}
export abstract class ProxyResolverInterface {
    /* Fields of Gio.ProxyResolverInterface */
    g_iface: GObject.TypeInterface
    is_supported: any
    lookup: any
    lookup_async: any
    lookup_finish: any
    static name: string
}
export abstract class RemoteActionGroupInterface {
    /* Fields of Gio.RemoteActionGroupInterface */
    g_iface: GObject.TypeInterface
    activate_action_full: any
    change_action_state_full: any
    static name: string
}
export abstract class ResolverClass {
    /* Fields of Gio.ResolverClass */
    parent_class: GObject.ObjectClass
    reload: any
    lookup_by_name: any
    lookup_by_name_async: any
    lookup_by_name_finish: any
    lookup_by_address: any
    lookup_by_address_async: any
    lookup_by_address_finish: any
    lookup_service_async: any
    lookup_service_finish: any
    lookup_records: any
    lookup_records_async: any
    lookup_records_finish: any
    lookup_by_name_with_flags_async: any
    lookup_by_name_with_flags_finish: any
    lookup_by_name_with_flags: any
    static name: string
}
export class ResolverPrivate {
    static name: string
}
export class Resource {
    /* Methods of Gio.Resource */
    _register(): void
    _unregister(): void
    enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[]
    get_info(path: string, lookup_flags: ResourceLookupFlags): [ /* returnType */ boolean, /* size */ number | null, /* flags */ number | null ]
    lookup_data(path: string, lookup_flags: ResourceLookupFlags): Gjs.byteArray.ByteArray
    open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream
    ref(): Resource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_data(data: Gjs.byteArray.ByteArray): Resource
    static load(filename: string): Resource
}
export abstract class SeekableIface {
    /* Fields of Gio.SeekableIface */
    g_iface: GObject.TypeInterface
    tell: any
    can_seek: any
    seek: any
    can_truncate: any
    truncate_fn: any
    static name: string
}
export abstract class SettingsBackendClass {
    /* Fields of Gio.SettingsBackendClass */
    parent_class: GObject.ObjectClass
    read: any
    get_writable: any
    write: any
    write_tree: any
    reset: any
    subscribe: any
    unsubscribe: any
    sync: any
    read_user_value: any
    static name: string
}
export class SettingsBackendPrivate {
    static name: string
}
export abstract class SettingsClass {
    /* Fields of Gio.SettingsClass */
    parent_class: GObject.ObjectClass
    writable_changed: any
    changed: any
    writable_change_event: any
    change_event: any
    padding: object[]
    static name: string
}
export class SettingsPrivate {
    static name: string
}
export class SettingsSchema {
    /* Methods of Gio.SettingsSchema */
    get_id(): string
    get_key(name: string): SettingsSchemaKey
    get_path(): string
    has_key(name: string): boolean
    list_children(): string[]
    list_keys(): string[]
    ref(): SettingsSchema
    unref(): void
    static name: string
}
export class SettingsSchemaKey {
    /* Methods of Gio.SettingsSchemaKey */
    get_default_value(): GLib.Variant
    get_description(): string
    get_name(): string
    get_range(): GLib.Variant
    get_summary(): string
    get_value_type(): GLib.VariantType
    range_check(value: GLib.Variant): boolean
    ref(): SettingsSchemaKey
    unref(): void
    static name: string
}
export class SettingsSchemaSource {
    /* Methods of Gio.SettingsSchemaSource */
    list_schemas(recursive: boolean): [ /* non_relocatable */ string[], /* relocatable */ string[] ]
    lookup(schema_id: string, recursive: boolean): SettingsSchema | null
    ref(): SettingsSchemaSource
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_from_directory(directory: string, parent: SettingsSchemaSource | null, trusted: boolean): SettingsSchemaSource
    static get_default(): SettingsSchemaSource | null
}
export abstract class SimpleActionGroupClass {
    static name: string
}
export class SimpleActionGroupPrivate {
    static name: string
}
export abstract class SimpleAsyncResultClass {
    static name: string
}
export abstract class SimpleProxyResolverClass {
    /* Fields of Gio.SimpleProxyResolverClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SimpleProxyResolverPrivate {
    static name: string
}
export abstract class SocketAddressClass {
    /* Fields of Gio.SocketAddressClass */
    parent_class: GObject.ObjectClass
    get_family: any
    get_native_size: any
    to_native: any
    static name: string
}
export abstract class SocketAddressEnumeratorClass {
    /* Fields of Gio.SocketAddressEnumeratorClass */
    next: any
    next_async: any
    next_finish: any
    static name: string
}
export abstract class SocketClass {
    /* Fields of Gio.SocketClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class SocketClientClass {
    /* Fields of Gio.SocketClientClass */
    parent_class: GObject.ObjectClass
    event: any
    static name: string
}
export class SocketClientPrivate {
    static name: string
}
export abstract class SocketConnectableIface {
    /* Fields of Gio.SocketConnectableIface */
    g_iface: GObject.TypeInterface
    enumerate: any
    proxy_enumerate: any
    to_string: any
    static name: string
}
export abstract class SocketConnectionClass {
    /* Fields of Gio.SocketConnectionClass */
    parent_class: IOStreamClass
    static name: string
}
export class SocketConnectionPrivate {
    static name: string
}
export abstract class SocketControlMessageClass {
    /* Fields of Gio.SocketControlMessageClass */
    parent_class: GObject.ObjectClass
    get_size: any
    get_level: any
    get_type: any
    serialize: any
    static name: string
}
export class SocketControlMessagePrivate {
    static name: string
}
export abstract class SocketListenerClass {
    /* Fields of Gio.SocketListenerClass */
    parent_class: GObject.ObjectClass
    changed: any
    event: any
    static name: string
}
export class SocketListenerPrivate {
    static name: string
}
export class SocketPrivate {
    static name: string
}
export abstract class SocketServiceClass {
    /* Fields of Gio.SocketServiceClass */
    parent_class: SocketListenerClass
    incoming: any
    static name: string
}
export class SocketServicePrivate {
    static name: string
}
export class SrvTarget {
    /* Methods of Gio.SrvTarget */
    copy(): SrvTarget
    free(): void
    get_hostname(): string
    get_port(): number
    get_priority(): number
    get_weight(): number
    static name: string
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
    constructor(hostname: string, port: number, priority: number, weight: number)
    /* Static methods and pseudo-constructors */
    static new(hostname: string, port: number, priority: number, weight: number): SrvTarget
}
export class StaticResource {
    /* Methods of Gio.StaticResource */
    fini(): void
    get_resource(): Resource
    init(): void
    static name: string
}
export abstract class TaskClass {
    static name: string
}
export abstract class TcpConnectionClass {
    /* Fields of Gio.TcpConnectionClass */
    parent_class: SocketConnectionClass
    static name: string
}
export class TcpConnectionPrivate {
    static name: string
}
export abstract class TcpWrapperConnectionClass {
    /* Fields of Gio.TcpWrapperConnectionClass */
    parent_class: TcpConnectionClass
    static name: string
}
export class TcpWrapperConnectionPrivate {
    static name: string
}
export abstract class ThemedIconClass {
    static name: string
}
export abstract class ThreadedSocketServiceClass {
    /* Fields of Gio.ThreadedSocketServiceClass */
    parent_class: SocketServiceClass
    run: any
    static name: string
}
export class ThreadedSocketServicePrivate {
    static name: string
}
export abstract class TlsBackendInterface {
    /* Fields of Gio.TlsBackendInterface */
    g_iface: GObject.TypeInterface
    supports_tls: any
    get_certificate_type: any
    get_client_connection_type: any
    get_server_connection_type: any
    get_file_database_type: any
    get_default_database: any
    supports_dtls: any
    get_dtls_client_connection_type: any
    get_dtls_server_connection_type: any
    static name: string
}
export abstract class TlsCertificateClass {
    /* Fields of Gio.TlsCertificateClass */
    parent_class: GObject.ObjectClass
    verify: any
    static name: string
}
export class TlsCertificatePrivate {
    static name: string
}
export abstract class TlsClientConnectionInterface {
    /* Fields of Gio.TlsClientConnectionInterface */
    g_iface: GObject.TypeInterface
    copy_session_state: any
    static name: string
}
export abstract class TlsConnectionClass {
    /* Fields of Gio.TlsConnectionClass */
    parent_class: IOStreamClass
    accept_certificate: any
    handshake: any
    handshake_async: any
    handshake_finish: any
    get_binding_data: any
    static name: string
}
export class TlsConnectionPrivate {
    static name: string
}
export abstract class TlsDatabaseClass {
    /* Fields of Gio.TlsDatabaseClass */
    parent_class: GObject.ObjectClass
    verify_chain: any
    verify_chain_async: any
    verify_chain_finish: any
    create_certificate_handle: any
    lookup_certificate_for_handle: any
    lookup_certificate_for_handle_async: any
    lookup_certificate_for_handle_finish: any
    lookup_certificate_issuer: any
    lookup_certificate_issuer_async: any
    lookup_certificate_issuer_finish: any
    lookup_certificates_issued_by: any
    lookup_certificates_issued_by_async: any
    lookup_certificates_issued_by_finish: any
    static name: string
}
export class TlsDatabasePrivate {
    static name: string
}
export abstract class TlsFileDatabaseInterface {
    /* Fields of Gio.TlsFileDatabaseInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class TlsInteractionClass {
    /* Fields of Gio.TlsInteractionClass */
    ask_password: any
    ask_password_async: any
    ask_password_finish: any
    request_certificate: any
    request_certificate_async: any
    request_certificate_finish: any
    static name: string
}
export class TlsInteractionPrivate {
    static name: string
}
export abstract class TlsPasswordClass {
    /* Fields of Gio.TlsPasswordClass */
    parent_class: GObject.ObjectClass
    get_value: any
    set_value: any
    get_default_warning: any
    static name: string
}
export class TlsPasswordPrivate {
    static name: string
}
export abstract class TlsServerConnectionInterface {
    /* Fields of Gio.TlsServerConnectionInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
export abstract class UnixConnectionClass {
    /* Fields of Gio.UnixConnectionClass */
    parent_class: SocketConnectionClass
    static name: string
}
export class UnixConnectionPrivate {
    static name: string
}
export abstract class UnixCredentialsMessageClass {
    /* Fields of Gio.UnixCredentialsMessageClass */
    parent_class: SocketControlMessageClass
    static name: string
}
export class UnixCredentialsMessagePrivate {
    static name: string
}
export abstract class UnixFDListClass {
    /* Fields of Gio.UnixFDListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UnixFDListPrivate {
    static name: string
}
export abstract class UnixFDMessageClass {
    /* Fields of Gio.UnixFDMessageClass */
    parent_class: SocketControlMessageClass
    static name: string
}
export class UnixFDMessagePrivate {
    static name: string
}
export abstract class UnixInputStreamClass {
    /* Fields of Gio.UnixInputStreamClass */
    parent_class: InputStreamClass
    static name: string
}
export class UnixInputStreamPrivate {
    static name: string
}
export class UnixMountEntry {
    static name: string
}
export abstract class UnixMountMonitorClass {
    static name: string
}
export class UnixMountPoint {
    /* Methods of Gio.UnixMountPoint */
    compare(mount2: UnixMountPoint): number
    copy(): UnixMountPoint
    free(): void
    get_device_path(): string
    get_fs_type(): string
    get_mount_path(): string
    get_options(): string
    guess_can_eject(): boolean
    guess_icon(): Icon
    guess_name(): string
    guess_symbolic_icon(): Icon
    is_loopback(): boolean
    is_readonly(): boolean
    is_user_mountable(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static at(mount_path: string): [ /* returnType */ UnixMountPoint | null, /* time_read */ number | null ]
}
export abstract class UnixOutputStreamClass {
    /* Fields of Gio.UnixOutputStreamClass */
    parent_class: OutputStreamClass
    static name: string
}
export class UnixOutputStreamPrivate {
    static name: string
}
export abstract class UnixSocketAddressClass {
    /* Fields of Gio.UnixSocketAddressClass */
    parent_class: SocketAddressClass
    static name: string
}
export class UnixSocketAddressPrivate {
    static name: string
}
export abstract class VfsClass {
    /* Fields of Gio.VfsClass */
    parent_class: GObject.ObjectClass
    is_active: any
    get_file_for_path: any
    get_file_for_uri: any
    get_supported_uri_schemes: any
    parse_name: any
    local_file_add_info: any
    add_writable_namespaces: any
    local_file_set_attributes: any
    local_file_removed: any
    local_file_moved: any
    static name: string
}
export abstract class VolumeIface {
    /* Fields of Gio.VolumeIface */
    g_iface: GObject.TypeInterface
    changed: any
    removed: any
    get_name: any
    get_icon: any
    get_uuid: any
    get_drive: any
    get_mount: any
    can_mount: any
    can_eject: any
    mount_fn: any
    mount_finish: any
    eject: any
    eject_finish: any
    get_identifier: any
    enumerate_identifiers: any
    should_automount: any
    get_activation_root: any
    eject_with_operation: any
    eject_with_operation_finish: any
    get_sort_key: any
    get_symbolic_icon: any
    static name: string
}
export abstract class VolumeMonitorClass {
    /* Fields of Gio.VolumeMonitorClass */
    parent_class: GObject.ObjectClass
    volume_added: any
    volume_removed: any
    volume_changed: any
    mount_added: any
    mount_removed: any
    mount_pre_unmount: any
    mount_changed: any
    drive_connected: any
    drive_disconnected: any
    drive_changed: any
    is_supported: any
    get_connected_drives: any
    get_volumes: any
    get_mounts: any
    get_volume_for_uuid: any
    get_mount_for_uuid: any
    drive_eject_button: any
    drive_stop_button: any
    static name: string
}
export abstract class ZlibCompressorClass {
    /* Fields of Gio.ZlibCompressorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ZlibDecompressorClass {
    /* Fields of Gio.ZlibDecompressorClass */
    parent_class: GObject.ObjectClass
    static name: string
}