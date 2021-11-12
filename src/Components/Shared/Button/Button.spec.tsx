import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('Renders the button component', () => {
    render(<Button text="test" type="primary" />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
