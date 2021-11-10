import { AppState } from './app.type';

export type ProductInfoContext = {
  product: AppState['product'];
  setProduct: React.Dispatch<React.SetStateAction<AppState['product']>>;
};

export type ProductInfoState = {
  quantity: number;
};

export type ProductImagesContext = {
  imageIndex: AppState['imageIndex'];
  setImageIndex: React.Dispatch<React.SetStateAction<AppState['imageIndex']>>;
};
