import { ProductInfoState } from '../types/main.type';

interface UpdateProductQuantity {
  (
    action: string,
    stateFn: React.Dispatch<React.SetStateAction<ProductInfoState['quantity']>>,
    currentQuan: number
  ): void;
}
const updateProductQuantity: UpdateProductQuantity = (
  action,
  stateFn,
  currentQuan
): void => {
  if (action === '+') {
    stateFn((prev) => prev + 1);
    return;
  }
  if (currentQuan === 0) {
    return;
  }

  stateFn((prev) => prev - 1);
};

export default updateProductQuantity;
