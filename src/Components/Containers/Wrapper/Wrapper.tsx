import React from 'react';
import './Wrapper.css';

type IProps = {
  children: JSX.Element | JSX.Element[];
  additionalClass: string;
};

const Wrapper: React.FC<IProps> = ({
  children,
  additionalClass,
}): JSX.Element => {
  return (
    <div className={`wrapper ${additionalClass}`} data-testid="wrapper">
      {children}
    </div>
  );
};

export default Wrapper;
