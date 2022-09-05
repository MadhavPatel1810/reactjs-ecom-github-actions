import {
  FETCH_PRODUCT_TYPE_LIST,
  FETCH_PRODUCT_TYPE_LIST_SUCCESS,
  FETCH_PRODUCT_TYPE_LIST_ERROR,
} from "./actionType";

/** Home Product Types list */
export const handleFetchProductTypeListing = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductTypesList(true));
      const res = payload;
      if (res) {
        dispatch(fetchProductTypesListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchProductTypesListError(err));
    }
  };
};

/** Home Product Types list */
export const fetchProductTypesList = (data) => {
  return {
    type: FETCH_PRODUCT_TYPE_LIST,
    payload: data,
  };
};
export const fetchProductTypesListSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_TYPE_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchProductTypesListError = (data) => {
  return {
    type: FETCH_PRODUCT_TYPE_LIST_ERROR,
    payload: data,
  };
};
