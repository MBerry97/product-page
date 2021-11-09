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

  const renderNavListItems = (): JSX.Element => {
    const navItems = ['Collections', 'Men', 'Women', 'About', 'Contact'];
    return (
      <ul>
        {navItems.map((item): JSX.Element => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <header>
      <NavBar showSideBarFn={handleSidebarViewClick} />
      <AnimatePresence>
        {showSidebar && (
          <NavSidebar
            showSideBarFn={handleSidebarViewClick}
            renderNavListItems={renderNavListItems}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
