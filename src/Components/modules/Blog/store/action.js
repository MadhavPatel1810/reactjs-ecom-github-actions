import {
  FETCH_BLOG_LIST,
  FETCH_BLOG_LIST_SUCCESS,
  FETCH_BLOG_LIST_ERROR,
  FETCH_BLOG_CATEGORIES_LIST,
  FETCH_BLOG_CATEGORIES_LIST_SUCCESS,
  FETCH_BLOG_CATEGORIES_LIST_ERROR,
  FETCH_BLOG_FEATURED_PRODUCT_LIST,
  FETCH_BLOG_FEATURED_PRODUCT_LIST_SUCCESS,
  FETCH_BLOG_FEATURED_PRODUCT_LIST_ERROR,
  FETCH_BLOG_ARCHIVE_LIST,
  FETCH_BLOG_ARCHIVE_LIST_SUCCESS,
  FETCH_BLOG_ARCHIVE_LIST_ERROR,
  FETCH_BLOG_TAGS_LIST,
  FETCH_BLOG_TAGS_LIST_SUCCESS,
  FETCH_BLOG_TAGS_LIST_ERROR,
} from "./actionType";

/** Blog list */
export const handleFetchBlogList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBlogList(true));
      const res = payload;
      if (res) {
        dispatch(fetchBlogListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchBlogListError(err));
    }
  };
};

/** Blog Categories list */
export const handleFetchBlogCategoriesList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBlogCategoriesList(true));
      const res = payload;
      if (res) {
        dispatch(fetchBlogCategoriesListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchBlogCategoriesListError(err));
    }
  };
};

/** Blog featured Products list */
export const handleFetchBlogFeaturedList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBlogFeaturedProductsList(true));
      const res = payload;
      if (res) {
        dispatch(fetchBlogFeaturedProductsListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchBlogFeaturedProductsListError(err));
    }
  };
};

/** Blog Archive list */
export const handleFetchBlogArchiveList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBlogArchiveList(true));
      const res = payload;
      if (res) {
        dispatch(fetchBlogArchiveListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchBlogArchiveListError(err));
    }
  };
};

/** Blog Tags list */
export const handleFetchBlogTagsList = (payload, cb = () => {}) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBlogTagsList(true));
      const res = payload;
      if (res) {
        dispatch(fetchBlogTagsListSuccess(res));
      }
    } catch (err) {
      dispatch(fetchBlogTagsListError(err));
    }
  };
};

/** Blog list */
export const fetchBlogList = (data) => {
  return {
    type: FETCH_BLOG_LIST,
    payload: data,
  };
};
export const fetchBlogListSuccess = (data) => {
  return {
    type: FETCH_BLOG_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchBlogListError = (data) => {
  return {
    type: FETCH_BLOG_LIST_ERROR,
    payload: data,
  };
};

/** Blog Categories list */
export const fetchBlogCategoriesList = (data) => {
  return {
    type: FETCH_BLOG_CATEGORIES_LIST,
    payload: data,
  };
};
export const fetchBlogCategoriesListSuccess = (data) => {
  return {
    type: FETCH_BLOG_CATEGORIES_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchBlogCategoriesListError = (data) => {
  return {
    type: FETCH_BLOG_CATEGORIES_LIST_ERROR,
    payload: data,
  };
};

/** Blog featured Products list */
export const fetchBlogFeaturedProductsList = (data) => {
  return {
    type: FETCH_BLOG_FEATURED_PRODUCT_LIST,
    payload: data,
  };
};
export const fetchBlogFeaturedProductsListSuccess = (data) => {
  return {
    type: FETCH_BLOG_FEATURED_PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchBlogFeaturedProductsListError = (data) => {
  return {
    type: FETCH_BLOG_FEATURED_PRODUCT_LIST_ERROR,
    payload: data,
  };
};

/** Blog Archive list */
export const fetchBlogArchiveList = (data) => {
  return {
    type: FETCH_BLOG_ARCHIVE_LIST,
    payload: data,
  };
};
export const fetchBlogArchiveListSuccess = (data) => {
  return {
    type: FETCH_BLOG_ARCHIVE_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchBlogArchiveListError = (data) => {
  return {
    type: FETCH_BLOG_ARCHIVE_LIST_ERROR,
    payload: data,
  };
};

/** Blog Tags list */
export const fetchBlogTagsList = (data) => {
  return {
    type: FETCH_BLOG_TAGS_LIST,
    payload: data,
  };
};
export const fetchBlogTagsListSuccess = (data) => {
  return {
    type: FETCH_BLOG_TAGS_LIST_SUCCESS,
    payload: data,
  };
};
export const fetchBlogTagsListError = (data) => {
  return {
    type: FETCH_BLOG_TAGS_LIST_ERROR,
    payload: data,
  };
};
