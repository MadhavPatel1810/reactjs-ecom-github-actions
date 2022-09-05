import React from "react";
import { Link } from "react-router-dom";
import { Offcanvas } from "reactstrap";

const RightBarOffCanvas = ({
  isOpen,
  isClose,
  elements,
  title,
  totalPrice,
  button1,
  button2,
}) => {
  return (
    <Offcanvas isOpen={isOpen} direction="end" className="wrap-header-cart">
      <div className="s-cart"></div>
      <div className="header-cart">
        <div className="header-cart-title">
          <span>{title}</span>
          <div className="pointer-cart" onClick={isClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="header-cart-content">
          <ul className="header-cart-wrapitem ">
            {elements.map((item, index) => {
              return (
                <li className="pb-3" key={index}>
                  <div className="header-cart-item-img">
                    <img src={item.itemImage} alt="IMG" />
                  </div>
                  <div className="header-cart-item-txt">
                    <Link to="#" className="header-cart-item-name">
                      {item.itemName}
                    </Link>
                    <span>{item.itemPrice}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="w-full">
            <div className="header-cart-total">Total:{totalPrice}</div>
            <div className="header-cart-buttons">
              <div className="pt-1">
                <button type="button" className="ProceedToCheckout m-1">
                  {button1}
                </button>
                <button type="button" className="ProceedToCheckout m-1">
                  {button2}
                </button>
              </div>
            </div>
          </div>
          <div className="ps__rail-x">
            <div className="ps__thumb-x" tabIndex="0"></div>
          </div>
          <div className="ps__rail-y">
            <div className="ps__thumb-y" tabIndex="0"></div>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
};

export default RightBarOffCanvas;
