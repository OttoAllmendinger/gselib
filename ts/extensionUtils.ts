import { Settings, File } from '@imports/Gio-2.0';

interface ExtensionUtils {
  initTranslations(): void;

  getSettings(): Settings;

  getCurrentExtension(): {
    path: string;
    metadata: any;
    dir: File;
  };
}

declare const imports: any;

export default imports.misc.extensionUtils as ExtensionUtils;
