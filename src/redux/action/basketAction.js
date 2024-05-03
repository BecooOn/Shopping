import { ADD, CLR, INC, DEC, REMOVE_PRODUCT } from "../type/basketType";

export const addBasket = (payload) => ({
  type: ADD,
  payload: payload,
});

export const clearBasket = () => ({
  type: CLR,
});

export const increment = (id) => ({
  type: INC,
  payload: id,
});

export const decrement = (id) => ({
  type: DEC,
  payload: id,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});
