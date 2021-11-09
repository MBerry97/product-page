import React from 'react';
import './App.css';
import Wrapper from './Components/Containers/Wrapper/Wrapper';
import HomePage from './Pages/Homepage/HomePage';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Wrapper additionalClass="page-wrapper">
        <HomePage />
      </Wrapper>
    </div>
  );
};

export default App;
