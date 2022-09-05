import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/modules/Home/index";
import { Shop } from "../Components/modules/Shop/index";
import { Features } from "../Components/modules/Features/index";
import { Blog } from "../Components/modules/Blog/index";
import { About } from "../Components/modules/About/index";
import { Contact } from "../Components/modules/Contact/index";
import ProductDetails from "../Components/modules/Shop/component/ProductDetails/ProductDetails";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/features" element={<Features />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
    </Routes>
  );
};
