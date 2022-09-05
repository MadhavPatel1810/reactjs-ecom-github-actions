import React from "react";
import { Offcanvas } from "reactstrap";
import iconClose2 from "../../../assets/images/icons/icon-close2.png";

const SearchModal = ({ isOpen, isClose }) => {
  return (
    <Offcanvas
      isOpen={isOpen}
      direction="top"
      className="modal-search-header show-header-cart"
    >
      <div className="container-search-header">
        <button className="btn-hide-modal-search">
          <img src={iconClose2} alt="CLOSE" onClick={isClose} />
        </button>

        <form className="wrap-search-header">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            className="plh3"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </form>
      </div>
    </Offcanvas>
  );
};

export default SearchModal;
