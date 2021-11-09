import React from 'react';
import ProductImages from './ProductImages/ProductImages';
import ProductInfo from './ProductInfo/ProductInfo';
import './Main.css';

const Main: React.FC = (): JSX.Element => {
  return (
    <main className="main">
      <ProductImages />
      <ProductInfo />
    </main>
  );
};

export default Main;
