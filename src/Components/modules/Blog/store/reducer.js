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

const ProductInitialState = {
  BlogList: [],
  BlogCategories: [],
  FeaturedProduct: [],
  BlogArchive: [],
  TagsList: [],
  loading: false,
};

const blog_Reducer = (state = ProductInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    /** Blog list */
    case FETCH_BLOG_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_LIST_SUCCESS:
      return {
        ...state,
        BlogList: payload.blogSection,
        loading: false,
      };
    case FETCH_BLOG_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };

    /** Blog Categories list */
    case FETCH_BLOG_CATEGORIES_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        BlogCategories: payload.categories,
        loading: false,
      };
    case FETCH_BLOG_CATEGORIES_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };

    /** Blog featured Products list */
    case FETCH_BLOG_FEATURED_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_FEATURED_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        FeaturedProduct: payload.featuredProducts,
        loading: false,
      };
    case FETCH_BLOG_FEATURED_PRODUCT_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };

    /** Blog Archive list */
    case FETCH_BLOG_ARCHIVE_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_ARCHIVE_LIST_SUCCESS:
      return {
        ...state,
        BlogArchive: payload.archive,
        loading: false,
      };
    case FETCH_BLOG_ARCHIVE_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };

    /** Blog Tags list */
    case FETCH_BLOG_TAGS_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BLOG_TAGS_LIST_SUCCESS:
      return {
        ...state,
        TagsList: payload.Tags,
        loading: false,
      };
    case FETCH_BLOG_TAGS_LIST_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default blog_Reducer;
