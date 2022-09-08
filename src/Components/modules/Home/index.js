import React from "react";
import Products from "./component/Products";
import { ProductSlider } from "./component/ProductSlider";
import ProductTypes from "./component/ProductTypes";

export const Home = () => {
  return (
    <div className="container-fluid p-0 mx-50">
      <ProductSlider home="home" />
      <ProductTypes card="card" />
      <Products />
    </div>
  );
};
