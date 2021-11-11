import React from 'react';
import { AppState } from '../../../types/app.type';
import './LightBox.css';

type IProps = {
  isDesktopWidth: boolean;
  setShowLightBox: React.Dispatch<
    React.SetStateAction<AppState['showLightBox']>
  >;
};

const LightBox: React.FC<IProps> = ({
  isDesktopWidth,
  setShowLightBox,
}): JSX.Element => {
  return (
    <section className="lightBox">
      {isDesktopWidth && (
        <button type="button" onClick={() => setShowLightBox(false)}>
          x
        </button>
      )}
    </section>
  );
};

export default LightBox;
