import React from 'react';
import logo from '../../../Assets/images/logo.svg';
import burgerMenu from '../../../Assets/images/icon-menu.svg';
import cart from '../../../Assets/images/icon-cart.svg';
import avatar from '../../../Assets/images/image-avatar.png';
import './NavBar.css';
import { HeaderContext } from '../../../types/header.type';

type IProps = {
  showSideBarFn: VoidFunction;
  renderNavListItems: () => JSX.Element;
  isDesktopWidth: HeaderContext['isDesktopWidth'];
};

const NavBar: React.FC<IProps> = ({
  showSideBarFn,
  renderNavListItems,
  isDesktopWidth,
}): JSX.Element => {
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
        <img src={cart} alt="cart" />
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
