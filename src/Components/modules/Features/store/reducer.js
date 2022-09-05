import {
  FETCH_SHOPPING_CART_PRODUCT_LIST,
  FETCH_SHOPPING_CART_PRODUCT_LIST_SUCCESS,
  FETCH_SHOPPING_CART_PRODUCT_LIST_ERROR,
  FETCH_CART_REMOVE_PRODUCT,
  FETCH_CART_REMOVE_PRODUCT_SUCCESS,
  FETCH_CART_REMOVE_PRODUCT_ERROR,
} from "./actionType";

const ProductInitialState = {
  CartProductList: [],
  loading: false,
};

const cart_Reducer = (state = ProductInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /**Featured Cart Product list */
    case FETCH_SHOPPING_CART_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOPPING_CART_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        CartProductList: [...state.CartProductList, payload.item],
        loading: false,
      };
    case FETCH_SHOPPING_CART_PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };

    /**Featured Cart RemoveProduct */
    case FETCH_CART_REMOVE_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CART_REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        CartProductList: state.CartProductList.filter(
          (item) => item.value !== payload
        ),
        loading: false,
      };
    case FETCH_CART_REMOVE_PRODUCT_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default cart_Reducer;
