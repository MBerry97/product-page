import React from 'react';
import logo from '../../../Assets/images/logo.svg';
import burgerMenu from '../../../Assets/images/icon-menu.svg';
import cart from '../../../Assets/images/icon-cart.svg';
import avatar from '../../../Assets/images/image-avatar.png';
import './NavBar.css';
import type { IState as Props } from '../../../Pages/Homepage/Header/Header';

type IProps = {
  showSideBarFn: React.Dispatch<React.SetStateAction<Props['showSidebar']>>;
};

const NavBar: React.FC<IProps> = ({ showSideBarFn }): JSX.Element => {
  return (
    <div className="navBar">
      <div>
        <button type="button" onClick={() => showSideBarFn(true)}>
          <img src={burgerMenu} alt="menu" />
        </button>
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
