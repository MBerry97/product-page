/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LightBox from './LightBox';
import { Provider } from '../../../Contexts/appContext';

const setShowLightBox = jest.fn();

const providerValues = {};

const compWithProvider = (comp: JSX.Element, values: {}) => {
  return render(<Provider value={{ ...values }}>{comp}</Provider>);
};

afterEach(() => {
  cleanup();
});

describe('<LightBox />', () => {
  describe('Mobile build', () => {
    beforeEach(() => {
      compWithProvider(
        <LightBox isDesktopWidth={false} setShowLightBox={setShowLightBox} />,
        providerValues
      );
    });
    it('Renders lightbox', () => {
      expect(screen.getByTestId('lightbox')).toBeInTheDocument();
    });
  });

  describe('Desktop build', () => {
    beforeEach(() => {
      compWithProvider(
        <LightBox isDesktopWidth setShowLightBox={setShowLightBox} />,
        providerValues
      );
    });
    it('Renders desktop container when viewport is desktop width', () => {
      expect(screen.getByTestId('lightbox')).toBeInTheDocument();
      expect(screen.getByTestId('lightbox-desktop')).toBeInTheDocument();
    });
    it('onClick close button triggers event handler', () => {
      const closeBtn = screen.getByRole('button', { name: 'close-lightbox' });
      userEvent.click(closeBtn);

      expect(setShowLightBox).toHaveBeenCalledTimes(1);
    });
  });
});
