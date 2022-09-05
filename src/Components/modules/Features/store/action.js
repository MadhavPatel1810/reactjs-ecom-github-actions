import {
  FETCH_SHOPPING_CART_PRODUCT_LIST,
  FETCH_SHOPPING_CART_PRODUCT_LIST_SUCCESS,
  FETCH_SHOPPING_CART_PRODUCT_LIST_ERROR,
  FETCH_CART_REMOVE_PRODUCT,
  FETCH_CART_REMOVE_PRODUCT_SUCCESS,
  FETCH_CART_REMOVE_PRODUCT_ERROR,
} from "./actionType";

/**Featured Cart Product list */
export const handleFetchCartProductList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCartProductList(true));
      const res = payload;
      if (res) {
        dispatch(fetchCartProductListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchCartProductListError(err));
    }
  };
};

/**Featured Cart Remove Product */
export const handleCartRemoveProduct = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCartRemoveProduct(true));
      const res = payload;
      if (res) {
        dispatch(fetchCartRemoveProductSuccess(res));
      }
    } catch (err) {
      dispatch(fetchCartRemoveProductError(err));
    }
  };
};

/**Featured Cart Product list */
export const fetchCartProductList = (data) => {
  return {
    type: FETCH_SHOPPING_CART_PRODUCT_LIST,
    payload: data,
  };
};
export const fetchCartProductListSuccess = (data) => {
  return {
    type: FETCH_SHOPPING_CART_PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchCartProductListError = (data) => {
  return {
    type: FETCH_SHOPPING_CART_PRODUCT_LIST_ERROR,
    payload: data,
  };
};

/**Featured Cart Remove Product */
export const fetchCartRemoveProduct = (data) => {
  return {
    type: FETCH_CART_REMOVE_PRODUCT,
    payload: data,
  };
};
export const fetchCartRemoveProductSuccess = (data) => {
  return {
    type: FETCH_CART_REMOVE_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const fetchCartRemoveProductError = (data) => {
  return {
    type: FETCH_CART_REMOVE_PRODUCT_ERROR,
    payload: data,
  };
};
