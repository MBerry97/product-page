import React, { useContext, useState } from 'react';
import './ProductInfo.css';
import { appContext } from '../../../../Contexts/appContext';
import plusIcon from '../../../../Assets/images/icon-plus.svg';
import minusIcon from '../../../../Assets/images/icon-minus.svg';
import Button from '../../../../Components/Shared/Button/Button';
import cartImg from '../../../../Assets/images/icon-cart-white.svg';
import updateProductQuantity from '../../../../Helpers/updateProductQuantity';
import type {
  ProductInfoContext,
  ProductInfoState,
} from '../../../../types/main.type';

const ProductInfo = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { product, setProduct } = useContext<ProductInfoContext>(appContext);
  const [quantity, setQuantity] = useState<ProductInfoState['quantity']>(0);

  const handleAddToCartBtnClick = (): void => {
    setProduct((prev) => {
      const prevCopy = { ...prev };
      prevCopy.quantity = quantity;
      return prevCopy;
    });
  };

  return (
    <section className="productInfo-container">
      <h1>SNEAKER COMPANY</h1>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="productInfo-price-container">
        <div>
          <span>{product.price}</span>
          <span>50%</span>
        </div>
        <span>$250.00</span>
      </div>

      <div className="productInfo-button-container">
        <div className="productInfo-quantityBtn-containter">
          <button
            type="button"
            onClick={() => updateProductQuantity('-', setQuantity, quantity)}
          >
            <img src={minusIcon} alt="plus" />
          </button>
          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => updateProductQuantity('+', setQuantity, quantity)}
          >
            <img src={plusIcon} alt="plus" id="plus-btn" />
          </button>
        </div>
        <Button
          text="Add to cart"
          type="primary"
          img={<img src={cartImg} alt="cart" />}
          effect="boxShadow"
          onClickFn={() => handleAddToCartBtnClick()}
        />
      </div>
    </section>
  );
};

export default ProductInfo;
