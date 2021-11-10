import { AppState } from './app.type';

export type HeaderState = {
  showSidebar: boolean;
};

export type HeaderContext = {
  setShowLightBox: React.Dispatch<
    React.SetStateAction<AppState['showLightBox']>
  >;
  isDesktopWidth: boolean;
};

// export type CartModalContext = {
//   product: AppState['product'];
// };
