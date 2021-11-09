import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import NavBar from '../../../Components/Templates/NavBar/NavBar';
import NavSidebar from '../../../Components/Templates/NavBar/NavSidebar/NavSidebar';

export type IState = {
  showSidebar: boolean;
};

const Header: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showSidebar, setShowSidebar] = useState<IState['showSidebar']>(false);
  return (
    <header>
      <NavBar showSideBarFn={setShowSidebar} />
      <AnimatePresence>
        {showSidebar && <NavSidebar showFn={setShowSidebar} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
