import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './HomePage.css';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <section className="homePage">
      <Header />
      <Main />
    </section>
  );
};

export default HomePage;
