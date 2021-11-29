import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartModal from './CartModal';
import { Provider } from '../../../Contexts/appContext';

const setShowCart = jest.fn();
const setProduct = jest.fn();

describe('<CartModal />', () => {
  describe('Cart with no quantity', () => {
    beforeEach(() => {
      render(
        <Provider
          value={{
            product: {
              price: '$125.00',
              quantity: 0,
            },
            setProduct,
          }}
        >
          <CartModal showCart setShowCart={setShowCart} />
        </Provider>
      );
    });
    it('Product with no quantity shows your cart is empty text', () => {
      expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });
  });
  describe('Cart with quantity', () => {
    beforeEach(() => {
      render(
        <Provider
          value={{
            product: {
              price: '$125.00',
              quantity: 2,
            },
            setProduct,
          }}
        >
          <CartModal showCart setShowCart={setShowCart} />
        </Provider>
      );
    });
    it('Displays the product info component', () => {
      expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
      expect(screen.getByTestId('cartModal-productInfo')).toBeInTheDocument();
    });
    it('onClick delete button triggers event handler', () => {
      const deleteBtn = screen.getByRole('button', {
        name: /delete/,
      });
      userEvent.click(deleteBtn);
      expect(setProduct).toHaveBeenCalledTimes(1);
    });
  });
});
