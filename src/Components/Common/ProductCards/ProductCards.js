import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SweetAlert from "sweetalert";
import LightBox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";

const ProductCards = ({ item }) => {
  const [isLike, setIsLike] = useState(false);
  const [isQuickView, setIsQuickView] = useState(false);
  const [isLightBox, setIsLightBox] = useState(false);

  //handle Add To Favorite
  const handleSelectWishList = (item) => {
    setIsLike(!isLike);
    if (!isLike) {
      SweetAlert(item.title, "is added to wishlist !", "success");
    }
  };

  const handleProductDetails = () => {
    setIsQuickView(!isQuickView);
  };
  const handleExpandProduct = (handleExpandProduct) => {
    setIsLightBox(handleExpandProduct);
    setIsQuickView(false);
  };
  const handleCloseExpandProduct = () => {
    setIsLightBox(false);
    setIsQuickView(true);
  };

  return (
    <>
      <div className="card overflow-hidden productCards">
        <img src={item.name} className="card-img-top productImg" alt="..." />
        <button
          type="button"
          className="productQuickView"
          onClick={handleProductDetails}
        >
          Quick View
        </button>
      </div>

      <div className="card-body">
        <div className="productDetails">
          <Link to={`${item.path}/${item.value}`}>
            <span className="cardSectionTitle">{item.title}</span>
          </Link>
          <Link
            to="#"
            className="likebtn"
            onClick={() => handleSelectWishList(item)}
          >
            {isLike ? (
              <i className="fa-solid fa-heart productLike"></i>
            ) : (
              <>
                <i className="fa-solid fa-heart productLike liked_product "></i>
                <i className="fa-regular fa-heart like_product"></i>
              </>
            )}
          </Link>
        </div>
        <div className="cardProductPrice">
          <span>{item.price}</span>
        </div>
      </div>

      {isQuickView && (
        <ProductDetailModal
          isOpen={isQuickView}
          onClose={() => setIsQuickView(false)}
          handleExpandProduct={handleExpandProduct}
          item={item}
        />
      )}

      {isLightBox && (
        <LightBox
          mainSrc={item.name}
          onCloseRequest={handleCloseExpandProduct}
        />
      )}
    </>
  );
};

export default ProductCards;
