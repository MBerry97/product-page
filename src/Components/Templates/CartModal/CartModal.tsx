/* eslint-disable radix */
import React, { useContext } from 'react';
import './CartModal.css';
import productThumbnail from '../../../Assets/images/image-product-1-thumbnail.jpg';
import { appContext } from '../../../Contexts/appContext';
import { CartModalContext } from '../../../types/header.type';
import Button from '../../Shared/Button/Button';
import Wrapper from '../../Containers/Wrapper/Wrapper';
import deleteIcon from '../../../Assets/images/icon-delete.svg';

const CartModal = (): JSX.Element => {
  const { product } = useContext<CartModalContext>(appContext);
  const { price, quantity } = product;
  const getPrice = (): number => {
    const priceAsNum = parseInt(price.slice(1, price.length));
    return priceAsNum * quantity;
  };

  return (
    <section className="cartModal">
      <h1>Cart</h1>

      {quantity === 0 && <span>Your cart is empty</span>}
      {quantity > 0 && (
        <>
          <Wrapper additionalClass="cartModal-wrapper">
            <div className="cartModal-productInfo">
              <img
                src={productThumbnail}
                alt="product"
                id="cartModal-productImg"
              />
              <div>
                <span>Fall Limited Edition Sneakers</span>
                <span>
                  {price} x {quantity} <i>{`$${getPrice()}.00`}</i>
                </span>
              </div>
              <button type="button">
                <img src={deleteIcon} alt="delete" id="cartModal-deleteImg" />
              </button>
            </div>
            <Button text="Checkout" type="primary" />
          </Wrapper>
        </>
      )}
    </section>
  );
};

export default CartModal;
