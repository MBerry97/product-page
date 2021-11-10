/* eslint-disable react/require-default-props */
import React from 'react';
import './Button.css';

type IProps = {
  text: string;
  type: string;
  img?: JSX.Element;
  effect?: string;
  onClickFn?: () => void;
};

const Button: React.FC<IProps> = ({
  text,
  type,
  img,
  effect,
  onClickFn,
}): JSX.Element => {
  return (
    <button
      type="button"
      className={`button-${type}  button-${effect}`}
      onClick={() => onClickFn?.()}
    >
      {img && img}
      {text}
    </button>
  );
};

export default Button;
