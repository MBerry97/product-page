import React, { useState } from 'react';
import './App.css';
import LightBox from './Components/Containers/LightBox/LightBox';
import Wrapper from './Components/Containers/Wrapper/Wrapper';
import HomePage from './Pages/Homepage/HomePage';
import { Provider } from './Contexts/appContext';
import useInnerWidth from './Hooks/useInnerWidth';
import { AppState } from './types/app.type';

const App: React.FC = (): JSX.Element => {
  const [showLightBox, setShowLightBox] =
    useState<AppState['showLightBox']>(false);

  const [imageIndex, setImageIndex] = useState<AppState['imageIndex']>(0);

  const [product, setProduct] = useState<AppState['product']>({
    price: '$125.00',
    quantity: 0,
  });

  const screenWidth = useInnerWidth();

  const isDesktopWidth = screenWidth >= 1440;

  return (
    <div className="App">
      <Provider
        value={{
          showLightBox,
          setShowLightBox,
          isDesktopWidth,
          imageIndex,
          setImageIndex,
          product,
          setProduct,
        }}
      >
        <Wrapper additionalClass="page-wrapper">
          <HomePage />
        </Wrapper>
        {showLightBox && <LightBox />}
      </Provider>
    </div>
  );
};

export default App;
