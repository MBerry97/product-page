import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { Provider } from '../../../Contexts/appContext';

const setShowLightBox = jest.fn();
const showLightBox = false;
const isDesktopWidth = false;
const product = {
  price: '$125.00',
  quantity: 0,
};

describe('<Header />', () => {
  beforeEach(() => {
    render(
      <Provider
        value={{
          setShowLightBox,
          showLightBox,
          isDesktopWidth,
          product,
        }}
      >
        <Header />
      </Provider>
    );
  });
  it('onClick burgerMenu in mobile renders NavSidebar', () => {
    const burgerMenuBtn = screen.getByRole('button', { name: /menu/ });
    expect(screen.queryByTestId('navSidebar')).not.toBeInTheDocument();

    userEvent.click(burgerMenuBtn);

    expect(screen.getByTestId('navSidebar')).toBeInTheDocument();
  });
  it('onClick cart opens the modal', () => {
    const cartBtn = screen.getByRole('button', { name: /cart/ });
    expect(screen.queryByTestId('cartModal')).not.toBeInTheDocument();
    userEvent.click(cartBtn);
    expect(screen.getByTestId('cartModal')).toBeInTheDocument();
  });
});
