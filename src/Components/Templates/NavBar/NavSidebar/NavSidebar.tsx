import React from 'react';
import { motion } from 'framer-motion';
import './NavSidebar.css';

type IProps = {
  showSideBarFn: VoidFunction;
};

const NavSidebar: React.FC<IProps> = ({ showSideBarFn }): JSX.Element => {
  return (
    <motion.div
      className="navSidebar"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: '-100%' }}
    >
      <button type="button" onClick={() => showSideBarFn()}>
        x
      </button>
    </motion.div>
  );
};

export default NavSidebar;
