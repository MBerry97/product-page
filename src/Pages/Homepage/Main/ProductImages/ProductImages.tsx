/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './ProductImages.css';
import { appContext } from '../../../../Contexts/appContext';
import { AppState } from '../../../../types/app.type';
import images from '../../../../images';
import { updateImageIndexCarousel } from '../../../../Helpers/updateImageIndex';
import nextArrow from '../../../../Assets/images/icon-next.svg';
import previousArrow from '../../../../Assets/images/icon-previous.svg';

type IContext = {
  imageIndex: AppState['imageIndex'];
  setImageIndex: React.Dispatch<React.SetStateAction<AppState['imageIndex']>>;
};

const ProductImages: React.FC = (): JSX.Element => {
  const { imageIndex, setImageIndex } = useContext<IContext>(appContext);

  return (
    <div className="productImages-container">
      <div className="productImage-carousel">
        <motion.img
          src={images[imageIndex]}
          alt="product"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={imageIndex}
        />
        <button
          type="button"
          onClick={() =>
            updateImageIndexCarousel('-', imageIndex, setImageIndex)
          }
        >
          <img src={previousArrow} alt="arrow" />
        </button>

        <button
          type="button"
          onClick={() =>
            updateImageIndexCarousel('+', imageIndex, setImageIndex)
          }
        >
          <img src={nextArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
