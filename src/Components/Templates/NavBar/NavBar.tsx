import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import logo from '../../../Assets/images/logo.svg';
import burgerMenu from '../../../Assets/images/icon-menu.svg';
import cart from '../../../Assets/images/icon-cart.svg';
import avatar from '../../../Assets/images/image-avatar.png';
import './NavBar.css';
import { HeaderContext } from '../../../types/header.type';
import CartModal from '../CartModal/CartModal';

type IProps = {
  showSideBarFn: VoidFunction;
  renderNavListItems: () => JSX.Element;
  isDesktopWidth: HeaderContext['isDesktopWidth'];
  product: HeaderContext['product'];
};

const NavBar: React.FC<IProps> = ({
  showSideBarFn,
  renderNavListItems,
  isDesktopWidth,
  product,
}): JSX.Element => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="navBar">
      <div>
        {!isDesktopWidth && (
          <button type="button" onClick={() => showSideBarFn()}>
            <img src={burgerMenu} alt="menu" />
          </button>
        )}
        <img src={logo} alt="logo" />

        {isDesktopWidth && renderNavListItems()}
      </div>
      <div>
        <AnimatePresence>{showCart && <CartModal />}</AnimatePresence>
        <button type="button" onClick={() => setShowCart((prev) => !prev)}>
          <img src={cart} alt="cart" />
          {product.quantity > 0 && <i>{product.quantity}</i>}
        </button>

        <img src={avatar} alt="avatar" id="navBar-avatarImg" />
      </div>
    </div>
  );
};

export default NavBar;
