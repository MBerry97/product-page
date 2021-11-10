import { ProductInfoContext } from '../types/main.type';

interface UpdateProductQuantity {
  (
    action: string,
    stateFn: ProductInfoContext['setProduct'],
    currentQuan: number
  ): void;
}
const updateProductQuantity: UpdateProductQuantity = (
  action,
  stateFn,
  currentQuan
): void => {
  if (action === '+') {
    stateFn((prev) => {
      const prevCopy = { ...prev };
      prevCopy.quantity += 1;
      return prevCopy;
    });
    return;
  }
  if (currentQuan === 0) {
    return;
  }

  stateFn((prev) => {
    const prevCopy = { ...prev };
    prevCopy.quantity -= 1;
    return prevCopy;
  });
};

export default updateProductQuantity;
