import React, { useState } from 'react';
import './App.css';
import LightBox from './Components/Containers/LightBox/LightBox';
import Wrapper from './Components/Containers/Wrapper/Wrapper';
import HomePage from './Pages/Homepage/HomePage';
import { Provider } from './Contexts/appContext';

export type IState = {
  showLightBox: boolean;
};

const App: React.FC = (): JSX.Element => {
  const [showLightBox, setShowLightBox] =
    useState<IState['showLightBox']>(false);

  return (
    <div className="App">
      <Provider value={{ showLightBox, setShowLightBox }}>
        <Wrapper additionalClass="page-wrapper">
          <HomePage />
        </Wrapper>
        {showLightBox && <LightBox />}
      </Provider>
    </div>
  );
};

export default App;
