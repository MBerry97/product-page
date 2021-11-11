import { AppState } from '../types/app.type';

interface ThumbnailIndex {
  (
    num: number,
    stateFn: React.Dispatch<React.SetStateAction<AppState['imageIndex']>>
  ): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const updateImageIndexThumbnail: ThumbnailIndex = (
  num,
  stateFn
): void => {
  stateFn(num);
};

interface CarouselIndex {
  (
    action: string,
    imageIndex: AppState['imageIndex'],
    stateFn: React.Dispatch<React.SetStateAction<AppState['imageIndex']>>
  ): void;
}

export const updateImageIndexCarousel: CarouselIndex = (
  action,
  imageIndex,
  stateFn
): void => {
  if (action === '+' && imageIndex === 3) {
    stateFn(0);
    return;
  }
  if (action === '-' && imageIndex === 0) {
    stateFn(3);
    return;
  }
  if (action === '+') {
    stateFn((prev) => prev + 1);
    return;
  }
  stateFn((prev) => prev - 1);
};
