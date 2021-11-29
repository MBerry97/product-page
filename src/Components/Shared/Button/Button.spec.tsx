/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const onClickHandler = jest.fn();

describe('<Button />', () => {
  beforeEach(() => {
    render(
      <Button
        text="test"
        type="primary"
        img={<img src="test" alt="test" />}
        onClickFn={onClickHandler}
      />
    );
  });
  it('Renders the button component', () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
  it('Buttons inner content contains image element and text  passed down as props', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  it('Buttons onClick event handle is trigger on click', () => {
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});
