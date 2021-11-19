import React from 'react';
import { render, screen } from '@testing-library/react';

import Wrapper from './Wrapper';

describe('<Wrapper />', () => {
  beforeEach(() => {
    render(
      <Wrapper additionalClass="testClass">
        <span>test child</span>
      </Wrapper>
    );
  });
  it('Renders with child elements', () => {
    expect(screen.getByText('test child')).toBeInTheDocument();
  });
  it('Can add an additional class through props', () => {
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('testClass');
  });
});
