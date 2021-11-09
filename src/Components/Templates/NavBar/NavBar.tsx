import React from 'react';
import logo from '../../../Assets/images/logo.svg';
import burgerMenu from '../../../Assets/images/icon-menu.svg';
import cart from '../../../Assets/images/icon-cart.svg';
import avatar from '../../../Assets/images/image-avatar.png';
import './NavBar.css';

const NavBar: React.FC = (): JSX.Element => {
  return (
    <div className="navBar">
      <div>
        <img src={burgerMenu} alt="menu" />
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={cart} alt="cart" />
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
