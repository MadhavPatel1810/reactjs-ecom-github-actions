import {
  FETCH_SHOP_PRODUCT_LIST,
  FETCH_SHOP_PRODUCT_LIST_SUCCESS,
  FETCH_SHOP_PRODUCT_LIST_ERROR,
} from "./actionType";

/** Shop Product list */
export const handleFetchShopProductList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchShopProductList(true));
      const res = payload;
      if (res) {
        dispatch(fetchShopProductListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchShopProductListError(err));
    }
  };
};

/** Shop Product list */
export const fetchShopProductList = (data) => {
  return {
    type: FETCH_SHOP_PRODUCT_LIST,
    payload: data,
  };
};
export const fetchShopProductListSuccess = (data) => {
  return {
    type: FETCH_SHOP_PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchShopProductListError = (data) => {
  return {
    type: FETCH_SHOP_PRODUCT_LIST_ERROR,
    payload: data,
  };
};
