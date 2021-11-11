/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductImages.css';
import { appContext } from '../../../../Contexts/appContext';
import type { ProductImagesContext } from '../../../../types/main.type';
import { images, imageThumbs } from '../../../../images';
import {
  updateImageIndexCarousel,
  updateImageIndexThumbnail,
} from '../../../../Helpers/updateImageIndex';
import nextArrow from '../../../../Assets/images/icon-next.svg';
import previousArrow from '../../../../Assets/images/icon-previous.svg';

type IProps = {
  carouselArrows: boolean;
};

const ProductImages: React.FC<IProps> = ({ carouselArrows }): JSX.Element => {
  const { imageIndex, setImageIndex, isDesktopWidth, setShowLightBox } =
    useContext<ProductImagesContext>(appContext);

  const handleArrowDisplay = (): boolean => {
    if (!isDesktopWidth) {
      return true;
    }

    if (isDesktopWidth && carouselArrows) {
      return true;
    }

    return false;
  };

  return (
    <div className="productImages-container">
      <div className="productImage-carousel">
        <AnimatePresence>
          <motion.img
            src={images[imageIndex]}
            alt="product"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={imageIndex}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightBox(!!isDesktopWidth)}
          />
        </AnimatePresence>
        {handleArrowDisplay() && (
          <button
            type="button"
            onClick={() =>
              updateImageIndexCarousel('-', imageIndex, setImageIndex)
            }
          >
            <img src={previousArrow} alt="arrow" />
          </button>
        )}

        {handleArrowDisplay() && (
          <button
            type="button"
            onClick={() =>
              updateImageIndexCarousel('+', imageIndex, setImageIndex)
            }
          >
            <img src={nextArrow} alt="arrow" />
          </button>
        )}
      </div>
      {isDesktopWidth && (
        <div className="productImages-thumbnail-container">
          {imageThumbs.map((img, i) => {
            const isImageActive = i === imageIndex;
            return (
              <img
                src={img}
                alt="product thumbnail"
                onClick={() => updateImageIndexThumbnail(i, setImageIndex)}
                className={
                  isImageActive ? 'active-thumbnail' : 'inActive-thumbnail'
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
