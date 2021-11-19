import React from 'react';
import { motion } from 'framer-motion';
import './NavSidebar.css';
import cross from '../../../../Assets/images/icon-close.svg';

type IProps = {
  showSideBarFn: VoidFunction;
  renderNavListItems: () => JSX.Element;
};

const NavSidebar: React.FC<IProps> = ({
  showSideBarFn,
  renderNavListItems,
}): JSX.Element => {
  return (
    <motion.div
      className="navSidebar"
      data-testid="navSidebar"
      initial={{ x: '-100%' }}
      animate={{ x: -1 }}
      transition={{ duration: 0.5 }}
      exit={{ x: '-100%' }}
    >
      <button type="button" onClick={() => showSideBarFn()}>
        <img src={cross} alt="cross" />
      </button>
      {renderNavListItems()}
    </motion.div>
  );
};

export default NavSidebar;
