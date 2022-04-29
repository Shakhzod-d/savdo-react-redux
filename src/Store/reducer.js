import { data } from "../db/data";
import {
  ADD_PRODUCT,
  SELECT_A_PRODUCT,
  DELETE_PRODUCT,
  CLOSE_MODAL,
  IS_CART_OPEN,
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
} from "./Actions/ActionTypes";
import { addProductAction } from "./Actions/ActionCreators";

const initialState = {
  fruitsArr: [...data],
  showFruitsArr: [...data],
  seletedItem: {},
  IsSelectItemOpen: false,
  IsCartOpen: false,
  counter: 1,
  total: 0,
  cart: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        fruitsArr: [action.payload.newItem, ...state.fruitsArr],
        showFruitsArr: [action.payload.newItem, ...state.showFruitsArr],
      };
    }
    case SELECT_A_PRODUCT: {
      const seletedItem = state.fruitsArr.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        seletedItem,
        IsSelectItemOpen: !state.IsSelectItemOpen,
        total: seletedItem.price * state.counter,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        IsSelectItemOpen: !state.IsSelectItemOpen,
      };
    }
    case IS_CART_OPEN: {
      // console.log(2);
      return {
        ...state,
        IsCartOpen: !state.IsCartOpen,
      };
    }
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
        total: (state.total += action.payload.numberPrice),
      };
    }
    case DECREMENT: {
      if (state.counter <= 1) {
        state.counter = 1;
        state.total = action.payload.numberPrice;
      }
      return {
        ...state,
        counter: state.counter - 1,
        total: (state.total -= action.payload.numberPrice),
      };
    }
    case ADD_TO_CART:
      // console.log(state.cart);
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    case DELETE_PRODUCT:
      const allItems = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...allItems],
      };
    default:
      return state;
  }
}

export default reducer;
