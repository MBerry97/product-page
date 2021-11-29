import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('<App />', () => {
  describe('Product images', () => {
    beforeEach(() => {
      render(<App />);

      global.innerWidth = 1980;
      global.dispatchEvent(new Event('resize'));

      const mainImg = screen.getByAltText('product');
      userEvent.click(mainImg);
    });
    it('OnClick main product image renders light box', () => {
      expect(screen.getByTestId('lightbox')).toBeInTheDocument();
    });

    it('OnClick cross button closes lightbox', () => {
      const closeBtn = screen.getByRole('button', { name: /close-lightbox/ });
      userEvent.click(closeBtn);
      expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
    });
  });

  describe('Cart functionality', () => {
    beforeEach(() => {
      render(<App />);

      global.innerWidth = 1980;
      global.dispatchEvent(new Event('resize'));
    });
    it('OnClick cart icon opens the cart modal', () => {
      const cartBtn = screen.getByRole('button', { name: 'cart' });
      userEvent.click(cartBtn);
      expect(screen.getByTestId('cartModal')).toBeInTheDocument();
    });

    it('OnClick add to cart button adds the correct quantity to the cart', () => {
      const plusQuantityBtn = screen.getByRole('button', { name: 'plus' });
      userEvent.click(plusQuantityBtn);
      userEvent.click(plusQuantityBtn);
      userEvent.click(plusQuantityBtn);

      const addToCartBtn = screen.getByText('Add to cart');

      userEvent.click(addToCartBtn);

      const cartBtn = screen.getByTestId('cart-btn');
      userEvent.click(cartBtn);

      expect(screen.getByText('$375.00')).toBeInTheDocument();
    });
  });
});
