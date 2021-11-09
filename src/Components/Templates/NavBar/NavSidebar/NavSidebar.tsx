import React from 'react';
import { motion } from 'framer-motion';
import './NavSidebar.css';

import type { IState as Props } from '../../../../Pages/Homepage/Header/Header';

type IProps = {
  showFn: React.Dispatch<React.SetStateAction<Props['showSidebar']>>;
};

const NavSidebar: React.FC<IProps> = ({ showFn }): JSX.Element => {
  return (
    <motion.div
      className="navSidebar"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ x: '-100%' }}
    >
      <button type="button" onClick={() => showFn(false)}>
        x
      </button>
    </motion.div>
  );
};

export default NavSidebar;
