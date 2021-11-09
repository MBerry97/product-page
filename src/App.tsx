import React from 'react';
import './App.css';
// import LightBox from './Components/Containers/LightBox/LightBox';
import Wrapper from './Components/Containers/Wrapper/Wrapper';
import HomePage from './Pages/Homepage/HomePage';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Wrapper additionalClass="page-wrapper">
        <HomePage />
      </Wrapper>
      {/* <LightBox /> */}
    </div>
  );
};

export default App;
