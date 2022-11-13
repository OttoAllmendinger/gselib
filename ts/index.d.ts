/* https://github.com/oae/gnome-shell-pano/blob/v10/src/index.d.ts */

declare global {
  const window: {
    ARGV: string[];
  };

  export const imports: {
    lang: any;
    ui: {
      layout: any;
      lightbox: any;
      main: {
        notify: (text: string, body: string) => void;
        panel: any;
        wm: any;
        layoutManager: {
          monitors: Monitor[];
          primaryIndex: number;
          addChrome(param: any, options?: any): any;
          removeChrome(param: any): any;
          addTopChrome(param: any, options?: any): any;
        };
        uiGroup: any;
        extensionManager: any;
        messageTray: any;
      };
      slider: any;
      messageTray: any;
      panelMenu: any;
      popupMenu: any;
      modalDialog: any;
      dialog: any;
      switcherPopup: {
        SwitcherPopup: any;
      };
    };
    misc: {
      extensionUtils: {
        initTranslations: (domain: string) => void;
        getCurrentExtension: () => any;
        openPrefs: () => void;
        getSettings: () => any;
      };
      config: any;
    };
    byteArray: {
      fromString: (input: string) => Uint8Array;
      fromArray: (input: number[]) => any;
      fromGBytes: (input: any) => Uint8Array;
      toString: (x: Uint8Array) => string;
    };
    gettext: any;

    mainloop: any;

    signals: any;

    gi: any;
  };
  export interface Monitor {
    width: number;
    height: number;
    x: number;
    y: number;
  }

  export const log: (arg: any) => void;
  export const logError: (arg: any) => void;
}

export {};
