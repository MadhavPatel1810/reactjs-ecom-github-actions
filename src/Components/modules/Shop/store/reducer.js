import {
  FETCH_SHOP_PRODUCT_LIST,
  FETCH_SHOP_PRODUCT_LIST_SUCCESS,
  FETCH_SHOP_PRODUCT_LIST_ERROR,
} from "./actionType";

const ProductInitialState = {
  ProductsList: [],
  loading: false,
};

const shop_Reducer = (state = ProductInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /** Shop Product list */
    case FETCH_SHOP_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHOP_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        ProductsList: payload.ProductCardsImages,
        loading: false,
      };
    case FETCH_SHOP_PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default shop_Reducer;
