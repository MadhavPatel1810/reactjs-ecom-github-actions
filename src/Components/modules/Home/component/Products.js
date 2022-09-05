import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Collapse } from "reactstrap";
import ProductCards from "../../../Common/ProductCards/ProductCards";
import ProductCardsImages from "../../../Common/ProductCardsImages/ProductCardsImages";
import { handleFetchShopProductList } from "../../Shop/store/action";

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { ProductsList } = useSelector((state) => state.Shop);

  const [isActive, setIsActive] = useState(1);
  const [isListFilter, setIsListFilter] = useState(false);
  const [isListSearch, setIsListSearch] = useState(false);
  const [isProductLength, setIsProductLength] = useState(4);

  const productMenu = [
    { name: "All Products", path: "#", value: 1 },
    { name: "Women", path: "#", value: 2 },
    { name: "Men", path: "#", value: 3 },
    { name: "Bags", path: "#", value: 4 },
    { name: "Shoes", path: "#", value: 5 },
    { name: "Watches", path: "#", value: 6 },
  ];
  const sortByFilter = [
    { name: "Default", path: "#", value: 1 },
    { name: "Popularity", path: "#", value: 2 },
    { name: "Average Rating", path: "#", value: 3 },
    { name: "Newness", path: "#", value: 4 },
    { name: "Price: Low to High", path: "#", value: 5 },
    { name: "Price: High to Low", path: "#", value: 6 },
  ];
  const priceByFilter = [
    { name: "All", path: "#", value: 1 },
    { name: "$0.00-$50.00", path: "#", value: 2 },
    { name: "$50.00-$100.00", path: "#", value: 3 },
    { name: "$100.00-$150.00", path: "#", value: 4 },
    { name: "$150.00-$200.00", path: "#", value: 5 },
    { name: "$200.00+", path: "#", value: 6 },
  ];
  const colorByFilter = [
    { name: "Black", path: "#", value: 1 },
    { name: "Blue", path: "#", value: 2 },
    { name: "Gray", path: "#", value: 3 },
    { name: "Green", path: "#", value: 4 },
    { name: "Red", path: "#", value: 5 },
    { name: "White", path: "#", value: 6 },
  ];
  const tagsByFilter = [
    { name: "Fashion", path: "#", value: 1 },
    { name: "Lifestyle", path: "#", value: 2 },
    { name: "Denim", path: "#", value: 3 },
    { name: "Streetstyle", path: "#", value: 4 },
    { name: "Crafts", path: "#", value: 5 },
  ];

  /** Shop Product list */
  useEffect(() => {
    dispatch(handleFetchShopProductList({ ProductCardsImages }));
  }, [ProductCardsImages]);

  const handleListFilter = () => {
    setIsListFilter(!isListFilter);
    setIsListSearch(false);
  };

  const handleListSearch = () => {
    setIsListSearch(!isListSearch);
    setIsListFilter(false);
  };

  const handleProductSelectOption = (productId) => {
    setIsActive(productId.value);
    setIsProductLength(4);
  };

  const handleLoadProduct = () => {
    setIsProductLength(isProductLength + 4);
  };
  return (
    <div className="container pt-5">
      {location.pathname !== "/shop" && (
        <span className="productOverview">Products Overview</span>
      )}

      <div className="row pt-4 pb-4">
        <ul className="productTypes">
          {productMenu.map((element, index) => {
            return (
              <li
                className="px-2 "
                key={index}
                onClick={() => handleProductSelectOption(element)}
              >
                <span
                  className={
                    isActive == element.value
                      ? "productOptions productOptionsActive"
                      : "productOptions"
                  }
                >
                  {element.name}
                </span>
              </li>
            );
          })}
          <div className="listFilter" onClick={handleListFilter}>
            {isListFilter ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-filter "></i>
            )}

            <span>Filter</span>
          </div>
          <div className="listSearch" onClick={handleListSearch}>
            {isListSearch ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
            <span>Search</span>
          </div>
        </ul>
      </div>
      <Collapse className="row productFilter" isOpen={isListFilter}>
        <div className="col">
          <ul>
            <p className="mb-3">Sort By</p>
            {sortByFilter.map((element, index) => {
              return (
                <li className="sortFilter" key={index}>
                  <a href=""> {element.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <ul>
            <p className="mb-3">Price</p>
            {priceByFilter.map((element, index) => {
              return (
                <li className="sortFilter" key={index}>
                  <a href=""> {element.name} </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <ul>
            <p className="mb-3">Color</p>
            {colorByFilter.map((element, index) => {
              return (
                <div className="d-flex" key={index}>
                  <i
                    className="fa-solid fa-circle filterColor"
                    style={{ color: element.name }}
                  ></i>
                  <li className="sortFilter colorfield" key={index}>
                    <a href=""> {element.name} </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <p className="mb-3">Tags</p>
          <div className="pt-3 d-wrap">
            {tagsByFilter.map((element, index) => {
              return (
                <button
                  type="button"
                  className="tagFilter m-1 px-3 py-1"
                  key={index}
                >
                  {element.name}
                </button>
              );
            })}
          </div>
        </div>
      </Collapse>
      <Collapse className="row pt-4" isOpen={isListSearch}>
        <div className="col">
          <div className="input-group input-group-lg collapse_form">
            <button className="input-group-text" id="inputGroup-sizing-lg">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              className="form-control searchInput px-0"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              placeholder="Search"
            />
          </div>
        </div>
      </Collapse>

      <div className="row pt-5">
        {ProductsList?.map((element, index) => {
          return (isActive === 1 || isActive === element.productCategories) &&
            isProductLength >= element.value ? (
            <div key={index} className="col">
              <ProductCards item={element} />
            </div>
          ) : null;
        })}
      </div>
      <center>
        <div className="pt-5 pb-4">
          <button
            type="button"
            className="loadMore"
            onClick={handleLoadProduct}
          >
            LOAD MORE
          </button>
        </div>
      </center>
    </div>
  );
};

export default Products;
