import React from "react";
import { Modal } from "reactstrap";
import { Link } from "react-router-dom";
import ProductDescription from "../ProductDescription/ProductDescription";

const ProductDetailModal = ({ isOpen, onClose, handleExpandProduct, item }) => {
  return (
    <Modal
      isOpen={isOpen}
      className="modal-dialog modal-dialog-centered shop_modal"
      style={{ maxWidth: "1170px" }}
    >
      <div className="container">
        <div className="product-main">
          <Link to="#" onClick={onClose} className="close-model">
            <i className="fa-solid fa-xmark text-danger"></i>
          </Link>
          <ProductDescription
            item={item}
            handleExpandProduct={handleExpandProduct}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
