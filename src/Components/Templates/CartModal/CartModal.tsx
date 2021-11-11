/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable radix */
import React, { useContext, useRef } from 'react';
import { motion } from 'framer-motion';
import './CartModal.css';
import productThumbnail from '../../../Assets/images/image-product-1-thumbnail.jpg';
import { appContext } from '../../../Contexts/appContext';
import { NavBarState } from '../../../types/header.type';
import { ProductInfoContext } from '../../../types/main.type';
import Button from '../../Shared/Button/Button';
import Wrapper from '../../Containers/Wrapper/Wrapper';
import deleteIcon from '../../../Assets/images/icon-delete.svg';
import useClickOutside from '../../../Hooks/useClickOutside';

type IProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<NavBarState['showCart']>>;
};

const CartModal: React.FC<IProps> = ({
  showCart,
  setShowCart,
}): JSX.Element => {
  const { product, setProduct } = useContext<ProductInfoContext>(appContext);
  const { price, quantity } = product;

  const modalRef = useRef<HTMLElement>(null);

  useClickOutside(modalRef, setShowCart, showCart);

  const getPrice = (): number => {
    const priceAsNum = parseInt(price.slice(1, price.length));
    return priceAsNum * quantity;
  };

  const handleDeleteClick = (): void => {
    setProduct((prev) => {
      const prevCopy = { ...prev };
      prevCopy.quantity = 0;
      return prevCopy;
    });
  };

  return (
    <motion.section
      className="cartModal"
      ref={modalRef}
      initial={{
        opacity: 0,
        transform: 'translate3d(0px, -24.5px, 0px)',
        transformStyle: 'flat',
        transformOrigin: '50% 50% 0px',

        height: 170,
      }}
      animate={{
        opacity: 1,
        transformStyle: 'flat',
        transform: 'translate3d(0px, 0px, 0px)',

        height: 256,
        transformOrigin: '50% 50% 0px',
      }}
      transition={{
        duration: 10,
        type: 'spring',
        delay: 0,
        stiffness: 500,
        damping: 28,
        mass: 1,
      }}
      exit={{
        opacity: 0,

        height: 170,
        transform: 'translate3d(0px, -24.5px, 0px)',
      }}
    >
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
              <motion.button
                type="button"
                onClick={() => handleDeleteClick()}
                whileHover={{
                  rotate: ['0deg', '30deg', '-30deg'],
                }}
                transition={{
                  yoyo: Infinity,
                  duration: '0.8',
                }}
              >
                <img src={deleteIcon} alt="delete" id="cartModal-deleteImg" />
              </motion.button>
            </div>
            <Button text="Checkout" type="primary" />
          </Wrapper>
        </>
      )}
    </motion.section>
  );
};

export default CartModal;
