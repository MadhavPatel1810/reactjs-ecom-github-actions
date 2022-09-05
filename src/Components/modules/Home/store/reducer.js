import {
  FETCH_PRODUCT_TYPE_LIST,
  FETCH_PRODUCT_TYPE_LIST_SUCCESS,
  FETCH_PRODUCT_TYPE_LIST_ERROR,
} from "./actionType";

const ProductInitialState = {
  ProductTypeList: [],
  loading: false,
};

const p_Reducer = (state = ProductInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /** Home Product Types list */
    case FETCH_PRODUCT_TYPE_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCT_TYPE_LIST_SUCCESS:
      return {
        ...state,
        ProductTypeList: payload.cardsImages,
        loading: false,
      };
    case FETCH_PRODUCT_TYPE_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default p_Reducer;
