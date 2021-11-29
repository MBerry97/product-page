import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductInfo from './ProductInfo';
import { Provider } from '../../../../Contexts/appContext';

const setProduct = jest.fn();
const product = {
  price: '$125.00',
  quantity: 0,
};

describe('<ProductInfo />', () => {
  beforeEach(() => {
    render(
      <Provider value={{ setProduct, product }}>
        <ProductInfo />
      </Provider>
    );
  });
  it('onClick add to cart Btn triggers setProduct handler which updates product quantity', () => {
    const addToCartBtn = screen.getByRole('button', {
      name: 'cart Add to cart',
    });
    userEvent.click(addToCartBtn);
    expect(setProduct).toHaveBeenCalledTimes(1);
  });
  it('Click + and - quantity btns updates the quantity value correctly', () => {
    const plusBtn = screen.getByRole('button', { name: 'plus' });
    const minusBtn = screen.getByRole('button', { name: 'minus' });

    fireEvent.click(plusBtn);
    fireEvent.click(plusBtn);

    expect(screen.getByText('2')).toBeInTheDocument();

    fireEvent.click(minusBtn);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
