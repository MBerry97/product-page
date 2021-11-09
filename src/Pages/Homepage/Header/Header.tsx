import React, { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import NavBar from '../../../Components/Templates/NavBar/NavBar';

import { appContext } from '../../../Contexts/appContext';
import type { IState as Context } from '../../../App';
import NavSidebar from '../../../Components/Templates/NavBar/NavSidebar/NavSidebar';

export type IState = {
  showSidebar: boolean;
};

type IContext = {
  setShowLightBox: React.Dispatch<
    React.SetStateAction<Context['showLightBox']>
  >;
};

const Header: React.FC = (): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState<IState['showSidebar']>(false);

  const { setShowLightBox } = useContext<IContext>(appContext);

  const handleSidebarViewClick = (): void => {
    setShowSidebar((prev) => !prev);
    setShowLightBox((prev) => !prev);
  };
  return (
    <header>
      <NavBar showSideBarFn={handleSidebarViewClick} />
      <AnimatePresence>
        {showSidebar && <NavSidebar showSideBarFn={handleSidebarViewClick} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
