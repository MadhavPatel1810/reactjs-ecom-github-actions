import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import ProductDescription from "../../../../Common/ProductDescription/ProductDescription";

const ProductDetails = () => {
  const [isLightBox, setIsLightBox] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  const handleExpandProduct = (handleExpandProduct) => {
    setIsLightBox(handleExpandProduct);
  };
  const handleLightBoxProduct = (handleLightBoxProduct) => {
    setIsExpand(handleLightBoxProduct);
  };
  const handleCloseExpandProduct = () => {
    setIsLightBox(false);
  };

  return (
    <div className="container pt-5">
      <ProductDescription
        handleExpandProduct={handleExpandProduct}
        handleLightBoxProduct={handleLightBoxProduct}
        isLightBox={isLightBox}
      />
      {isLightBox && (
        <Lightbox
          mainSrc={isExpand}
          onCloseRequest={handleCloseExpandProduct}
        />
      )}
    </div>
  );
};

export default ProductDetails;
