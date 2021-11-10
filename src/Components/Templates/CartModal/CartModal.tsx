import React, { useContext } from 'react';
import './CartModal.css';
import productThumbnail from '../../../Assets/images/image-product-1-thumbnail.jpg';
import { appContext } from '../../../Contexts/appContext';
import { CartModalContext } from '../../../types/header.type';

const CartModal = (): JSX.Element => {
  const { product } = useContext<CartModalContext>(appContext);
  const { price, quantity } = product;
  // const getPrice = (): number => {
  //   const priceAsNum = p;
  // };
  return (
    <section className="cartModal">
      <h1>Cart</h1>

      {quantity === 0 && <span>Your cart is empty</span>}
      {quantity > 0 && (
        <div className="cartModal-productInfo">
          <img src={productThumbnail} alt="product" />
          <div>
            <span>Fall Limited Edition Sneakers</span>
            <span>
              {price} x {quantity}{' '}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartModal;
