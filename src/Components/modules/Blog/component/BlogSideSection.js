import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productMin01 from "../../../../assets/images/product-min-01.jpg";
import productMin02 from "../../../../assets/images/product-min-02.jpg";
import productMin03 from "../../../../assets/images/product-min-03.jpg";
import {
  handleFetchBlogArchiveList,
  handleFetchBlogCategoriesList,
  handleFetchBlogFeaturedList,
  handleFetchBlogTagsList,
} from "../store/action";

const BlogSideSection = () => {
  const dispatch = useDispatch();
  const { BlogCategories, FeaturedProduct, BlogArchive, TagsList } =
    useSelector((state) => state.Blog);
  const categories = [
    { categoriesTitle: "Fashion", value: 1 },
    { categoriesTitle: "Beauty", value: 2 },
    { categoriesTitle: "Street Style", value: 3 },
    { categoriesTitle: "Life Style", value: 4 },
    { categoriesTitle: "DIY & Crafts", value: 5 },
  ];
  const featuredProducts = [
    {
      productImg: productMin01,
      productTitle: "White Shirt With Pleat Detail Back",
      productPrice: "$19.00",
    },
    {
      productImg: productMin02,
      productTitle: "Converse All Star Hi Black Canvas",
      productPrice: "$39.00",
    },
    {
      productImg: productMin03,
      productTitle: "Nixon Porter Leather Watch In Tan",
      productPrice: "$17.00",
    },
  ];
  const archive = [
    { month: "July 2022", count: "(9)", value: 1 },
    { month: "July 2022", count: "(39)", value: 2 },
    { month: "May 2022", count: "(29)", value: 3 },
    { month: "April 2022", count: "(35)", value: 4 },
    { month: "March 2022", count: "(22)", value: 5 },
    { month: "February 2022", count: "(32)", value: 6 },
    { month: "January 2022", count: "(21)", value: 7 },
    { month: "December 2022", count: "(26)", value: 8 },
  ];
  const Tags = [
    { tagTitle: "Fashion", value: 1 },
    { tagTitle: "Lifestyle", value: 1 },
    { tagTitle: "Denim", value: 1 },
    { tagTitle: "Streetstyle", value: 1 },
    { tagTitle: "Crafts", value: 1 },
  ];

  /** Blog categories list */
  useEffect(() => {
    dispatch(handleFetchBlogCategoriesList({ categories }));
    dispatch(handleFetchBlogFeaturedList({ featuredProducts }));
    dispatch(handleFetchBlogArchiveList({ archive }));
    dispatch(handleFetchBlogTagsList({ Tags }));
  }, [dispatch]);

  return (
    <div className="col-lg-3 pt-5 pb-5">
      <div className="pt-5">
        <div className="searchBlog">
          <input
            className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
            type="text"
            name="search"
            placeholder="Search"
          />
          <button className="blogSearchIcon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="Categories">
          <h4 className="categoriesTitle">Categories</h4>
          <ul>
            {BlogCategories.map((items, index) => {
              return (
                <li className="bor18" key={index}>
                  <Link
                    to="#"
                    className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                  >
                    {items.categoriesTitle}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Featured_Products">
          <h4 className="featuredTitle">Featured Products</h4>
          <ul>
            {FeaturedProduct.map((items, index) => {
              return (
                <li key={index}>
                  <Link to="#" className="productMinImg">
                    <img src={items.productImg} alt="PRODUCT" />
                  </Link>
                  <div className="featuredDesc">
                    <Link to="#">{items.productTitle}</Link>
                    <span>{items.productPrice}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-1">
          <h4 className="featuredTitle">Archive</h4>
          <ul className="Archive">
            {BlogArchive.map((items, index) => {
              return (
                <li className="p-b-7" key={index}>
                  <a
                    href="#"
                    className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                  >
                    <span>{items.month}</span>
                    <span>{items.count}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-1">
          <h4 className="featuredTitle">Tags</h4>
          <div className="Tags">
            {TagsList.map((elements, i) => {
              return (
                <a
                  href="#"
                  className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                  key={i}
                >
                  {elements.tagTitle}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideSection;
