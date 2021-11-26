import { Settings, File } from '@imports/Gio-2.0';


interface ExtensionUtils {
  initTranslations(domain?: string): void;

  getSettings(): Settings;

  getCurrentExtension(): {
    path: string;
    metadata: Record<string, unknown>;
    dir: File;
  };

  openPrefs(): void;

  gettext(str: string): string;
}

declare const imports: any;

const extensionUtils = imports.misc.extensionUtils as ExtensionUtils;

if (!extensionUtils.gettext) {
  // backport from v41
  // https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/1deb13e1aaabfd04b2641976a224b6fc2be3b9ec/js/misc/extensionUtils.js#L117
  const domain = extensionUtils.getCurrentExtension().metadata['gettext-domain'] as string;
  extensionUtils.initTranslations(domain);
  const gettextForDomain = imports.gettext.domain(domain);
  if (gettextForDomain.gettext) {
    Object.assign(extensionUtils, gettextForDomain);
  } else {
    logError(new Error(`could create gettextForDomain domain=${domain}`));
  }
}

export default extensionUtils as ExtensionUtils;

export const _ = extensionUtils.gettext;
