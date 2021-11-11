import React from 'react';
import ProductImages from '../../../Pages/Homepage/Main/ProductImages/ProductImages';
import { AppState } from '../../../types/app.type';
import './LightBox.css';
import iconClose from '../../../Assets/images/icon-close.svg';

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
        <div className="lightBox-desktop-container">
          <button type="button" onClick={() => setShowLightBox(false)}>
            <img src={iconClose} alt="close" />
          </button>

          <ProductImages carouselArrows />
        </div>
      )}
    </section>
  );
};

export default LightBox;
