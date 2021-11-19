/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavSidebar from './NavSidebar';

const showSideBarFn = jest.fn();
const renderNavListItems = jest.fn();

describe('<NavSidebar />', () => {
  beforeEach(() => {
    render(
      <NavSidebar
        showSideBarFn={showSideBarFn}
        renderNavListItems={renderNavListItems}
      />
    );
  });
  it('Renders correct content', () => {
    expect(screen.getByTestId('navSidebar')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(renderNavListItems).toHaveBeenCalledTimes(1);
  });
  it('onClick close button triggers event handler', () => {
    const closeBtn = screen.getByRole('button');
    userEvent.click(closeBtn);
    expect(showSideBarFn).toHaveBeenCalledTimes(1);
  });
});
