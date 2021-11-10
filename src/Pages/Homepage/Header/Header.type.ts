import { AppState } from '../../../types/app.type';

export type HeaderState = {
  showSidebar: boolean;
};

export type HeaderContext = {
  setShowLightBox: React.Dispatch<
    React.SetStateAction<AppState['showLightBox']>
  >;
  isDesktopWidth: boolean;
};
