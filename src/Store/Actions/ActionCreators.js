import { ADD_PRODUCT } from "./ActionTypes";

export const addProductAction = (newProduct) => ({
  type: ADD_PRODUCT,
  payload: newProduct,
});
