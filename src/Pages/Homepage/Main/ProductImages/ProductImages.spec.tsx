/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductImages from './ProductImages';
import { Provider } from '../../../../Contexts/appContext';

const imageIndex = 0;
const setImageIndex = jest.fn();
const isDesktopWidth = false;
const setShowLightBox = jest.fn();

describe('<ProductImages />', () => {
  describe('Mobile build', () => {
    beforeEach(() => {
      setImageIndex.mockClear();
      render(
        <Provider
          value={{
            imageIndex,
            setImageIndex,
            isDesktopWidth,
            setShowLightBox,
          }}
        >
          <ProductImages carouselArrows={false} />
        </Provider>
      );
    });
    it('onClick main product image invokes setShowLightBox handler', () => {
      const mainImg = screen.getByAltText('product');
      userEvent.click(mainImg);
      expect(setShowLightBox).toHaveBeenCalledTimes(1);
    });

    it('Arrows are shown in mobile view and onClick invokes setImageindex', () => {
      const arrowBtns = screen.getAllByRole('button', { name: 'arrow' });
      userEvent.click(arrowBtns[0]);
      expect(setImageIndex).toHaveBeenCalledTimes(1);
      setImageIndex.mockClear();
    });
  });

  describe('Desktop build', () => {
    beforeEach(() => {
      render(
        <Provider
          value={{
            imageIndex,
            setImageIndex,
            isDesktopWidth: !isDesktopWidth,
            setShowLightBox,
          }}
        >
          <ProductImages carouselArrows={false} />
        </Provider>
      );
    });

    it('Thumbnail container is rendered in desktop view', () => {
      expect(screen.getByTestId('thumbnail-container')).toBeInTheDocument();
    });

    it('onClick thumbnail img invokes setImageIndex', () => {
      const thumbNailImgs = screen.getAllByAltText('product thumbnail');
      userEvent.click(thumbNailImgs[1]);
      expect(setImageIndex).toHaveBeenCalledTimes(1);
    });
  });
});
