/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './ProductImages.css';
import { appContext } from '../../../../Contexts/appContext';
import { AppState } from '../../../../types/app.type';
import image1 from '../../../../Assets/images/image-product-1.jpg';
import image2 from '../../../../Assets/images/image-product-2.jpg';
import image3 from '../../../../Assets/images/image-product-3.jpg';
import image4 from '../../../../Assets/images/image-product-4.jpg';

type IContext = {
  imageIndex: AppState['imageIndex'];
  setImageIndex: React.Dispatch<React.SetStateAction<AppState['imageIndex']>>;
};

const ProductImages: React.FC = (): JSX.Element => {
  const images = [image1, image2, image3, image4];

  const { imageIndex, setImageIndex } = useContext<IContext>(appContext);

  const handleCarouselBtnClick = (action: string): void => {
    if (action === '+' && imageIndex === 3) {
      setImageIndex(0);
      return;
    }
    if (action === '-' && imageIndex === 0) {
      setImageIndex(3);
      return;
    }
    if (action === '+') {
      setImageIndex((prev) => prev + 1);
      return;
    }
    setImageIndex((prev) => prev - 1);
  };

  return (
    <div className="productImages-container">
      <div className="productImage-carousel">
        <img src={images[imageIndex]} alt="product" />
        <button type="button" onClick={() => handleCarouselBtnClick('+')}>
          +
        </button>
        <button type="button" onClick={() => handleCarouselBtnClick('-')}>
          -
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
