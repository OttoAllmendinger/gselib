import * as Gio from '@imports/Gio-2.0';

import { uuid } from '../metadata.json';

export const _ = imports.gettext.domain(uuid).gettext;

export function init(extensionDir) {
  const workDir = Gio.File.new_for_path(extensionDir);
  const localeDir = workDir.get_child('locale');
  if (localeDir.query_exists(null)) {
    imports.gettext.bindtextdomain(uuid, localeDir.get_path());
  }
}
