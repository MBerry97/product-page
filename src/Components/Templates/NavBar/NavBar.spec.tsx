import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

const showSideBarFn = jest.fn();
const renderNavListItems = jest.fn();
const product = {
  price: '$125.00',
  quantity: 0,
};
const isDesktopWidth = false;

describe('<NavBar />', () => {
  it('Mobile renders burger menu', () => {
    render(
      <NavBar
        showSideBarFn={showSideBarFn}
        renderNavListItems={renderNavListItems}
        product={product}
        isDesktopWidth={isDesktopWidth}
      />
    );
    const burgerMenu = screen.getByRole('button', { name: /menu/ });
    expect(burgerMenu).toBeInTheDocument();
    expect(renderNavListItems).toHaveBeenCalledTimes(0);
  });

  it('Desktop renders navlist items', () => {
    render(
      <NavBar
        showSideBarFn={showSideBarFn}
        renderNavListItems={renderNavListItems}
        product={product}
        isDesktopWidth={!isDesktopWidth}
      />
    );
    expect(renderNavListItems).toHaveBeenCalledTimes(1);
  });
});
