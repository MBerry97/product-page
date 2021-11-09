import React, { useState } from 'react';
import NavBar from '../../../Components/Templates/NavBar/NavBar';
import NavSidebar from '../../../Components/Templates/NavBar/NavSidebar/NavSidebar';

export type IState = {
  showSidebar: boolean;
};

const Header: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showSidebar, setShowSidebar] = useState<IState['showSidebar']>(true);
  return (
    <header>
      <NavBar showSideBarFn={setShowSidebar} />
      {showSidebar && <NavSidebar showFn={setShowSidebar} />}
    </header>
  );
};

export default Header;
