import React, { useContext } from 'react';
import './ProductInfo.css';
import { appContext } from '../../../../Contexts/appContext';
import plusIcon from '../../../../Assets/images/icon-plus.svg';
import minusIcon from '../../../../Assets/images/icon-minus.svg';
import Button from '../../../../Components/Shared/Button/Button';
import cartImg from '../../../../Assets/images/icon-cart-white.svg';
import updateProductQuantity from '../../../../Helpers/updateProductQuantity';
import type { ProductInfoContext } from '../../../../types/main.type';

const ProductInfo = (): JSX.Element => {
  const { product, setProduct } = useContext<ProductInfoContext>(appContext);

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
            onClick={() =>
              updateProductQuantity('-', setProduct, product.quantity)
            }
          >
            <img src={minusIcon} alt="plus" />
          </button>
          <span>{product.quantity}</span>

          <button
            type="button"
            onClick={() =>
              updateProductQuantity('+', setProduct, product.quantity)
            }
          >
            <img src={plusIcon} alt="plus" id="plus-btn" />
          </button>
        </div>
        <Button
          text="Add to cart"
          type="primary"
          img={<img src={cartImg} alt="cart" />}
          effect="boxShadow"
        />
      </div>
    </section>
  );
};

export default ProductInfo;
