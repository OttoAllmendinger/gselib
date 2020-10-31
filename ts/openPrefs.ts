import * as GLib from '@imports/GLib-2.0';
import * as Gio from '@imports/Gio-2.0';
import * as Shell from '@imports/Shell-0.1';

// From
// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/master/
// data/dbus-interfaces/org.gnome.Shell.Extensions.xml
const GnomeShellIface = `
<node>
  <interface name="org.gnome.Shell.Extensions">
    <method name="OpenExtensionPrefs">
      <arg type="s" direction="in" name="uuid"/>
      <arg type="s" direction="in" name="parent_window"/>
      <arg type="a{sv}" direction="in" name="options"/>
    </method>
  </interface>
</node>
`;

/**
 * This is used in `extensions-app` but fails on `makeProxyWrapper()` when called from extension itself
 *
 * ```
 * JS ERROR: Gio.IOErrorEnum:
 * Error calling StartServiceByName for org.gnome.Shell.Extensions: Timeout was reached
 * ```
 */
export function openPrefsDBus(uuid, params: { modal?: boolean; parent?: string } = {}) {
  const GnomeShellProxy = (Gio.DBusProxy as any).makeProxyWrapper(GnomeShellIface);

  const shellProxy = new GnomeShellProxy(
    (Gio as any).DBus.session,
    'org.gnome.Shell.Extensions',
    '/org/gnome/Shell/Extensions',
  );

  const parent = params.parent === undefined ? '' : params.parent;
  const modal = params.modal === undefined ? true : params.modal;
  shellProxy.OpenExtensionPrefsRemote(uuid, parent, { modal: GLib.Variant.new_boolean(modal) });
}

/**
 * This works for < 3.36
 */
export function openPrefsAppSystem(uuid, params: { shell?: { AppSystem: typeof Shell.AppSystem } } = {}) {
  const shell = params.shell;
  if (!shell) {
    throw new Error('must provide shell');
  }

  const appSys = shell.AppSystem.get_default();
  const appId = 'gnome-shell-extension-prefs.desktop';
  const prefs = appSys.lookup_app(appId);

  if (!prefs) {
    logError(new Error('could not find prefs app'));
    return;
  }

  if (prefs.get_state() == Shell.AppState.RUNNING) {
    prefs.activate();
  } else {
    prefs.get_app_info().launch_uris(['extension:///' + uuid], null);
  }
}

/**
 * Works for >= 3.36, maybe earlier
 */
export function openPrefsUtilSpawn(uuid) {
  const Util = imports.misc.util;
  Util.spawn(['gnome-extensions', 'prefs', uuid]);
}

export function openPrefs(version, uuid, params = {}) {
  if (version.greaterEqual('3.36')) {
    return openPrefsUtilSpawn(uuid);
  }

  return openPrefsAppSystem(uuid, params);
}

if ('ARGV' in window) {
  if ('0' in window.ARGV) {
    openPrefsAppSystem(window.ARGV[0]);
  }
}
