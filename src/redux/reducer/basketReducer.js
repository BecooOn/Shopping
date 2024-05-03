import { ADD, CLR, INC, DEC, REMOVE_PRODUCT } from "../type/basketType";

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, basket: [...state.basket, ...payload] };
    //?If you intend to add individual items from the payload array, you might want to use push or concat methods instead of spreading: case ADD:
    // return { ...state, basket: state.basket.concat(payload) };
    //?Or, if payload is a single item to add:
    // case ADD:
    //   return { ...state, basket: [...state.basket, payload] };

    case CLR:
      return { ...state, basket: [] };
    case INC:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DEC:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export default basketReducer;
