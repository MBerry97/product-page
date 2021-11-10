import React from 'react';
import ProductImages from './ProductImages/ProductImages';
import ProductInfo from './ProductInfo/ProductInfo';
import './Main.css';
import Wrapper from '../../../Components/Containers/Wrapper/Wrapper';

const Main: React.FC = (): JSX.Element => {
  return (
    <main className="main">
      <Wrapper additionalClass="main-wrapper">
        <ProductImages />
      </Wrapper>
      <Wrapper additionalClass="main-wrapper">
        <ProductInfo />
      </Wrapper>
    </main>
  );
};

export default Main;
