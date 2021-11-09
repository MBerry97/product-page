import React from 'react';
import './NavSidebar.css';

import type { IState as Props } from '../../../../Pages/Homepage/Header/Header';

type IProps = {
  showFn: React.Dispatch<React.SetStateAction<Props['showSidebar']>>;
};

const NavSidebar: React.FC<IProps> = ({ showFn }): JSX.Element => {
  return (
    <div className="navSidebar">
      <button type="button" onClick={() => showFn(false)}>
        x
      </button>
    </div>
  );
};

export default NavSidebar;
