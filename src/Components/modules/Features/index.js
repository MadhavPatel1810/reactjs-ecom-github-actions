import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useDispatch, useSelector } from "react-redux";
import { handleCartRemoveProduct } from "./store/action";

export const Features = () => {
  const [isQuantity, setIsQuantity] = useState(0);
  const { CartProductList } = useSelector((state) => state.CartProduct);
  const dispatch = useDispatch();

  const handleProductQuantity = (option) => {
    if (option === "Plus" && isQuantity >= 0) {
      setIsQuantity(isQuantity + 1);
    } else {
      if (option === "Minus" && isQuantity !== 0) {
        setIsQuantity(isQuantity - 1);
      }
    }
  };

  const handleRemoveProduct = (products) => {
    console.log(products.title);
    dispatch(handleCartRemoveProduct(products.value));
  };

  const options = ["Select a country", "India", "USA", "UK"];
  return (
    <div className="container pt-5 pb-3">
      <div className="row pt-5">
        <div className="col">
          <div className="featureNav">
            <Link to="/" className="subNavFeature">
              Home
            </Link>
            <i className="fa-solid fa-angle-right px-1 subNavDirection"></i>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {CartProductList.map((products, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <i
                          className="fa-solid fa-xmark productCancel tooltip100"
                          onClick={() => handleRemoveProduct(products)}
                          data-tooltip="Remove From Cart"
                        ></i>
                        <img
                          src={products.name}
                          alt="..."
                          className="mx-2 selectedProductImg tooltip100"
                          onClick={() => handleRemoveProduct(products)}
                          data-tooltip="Remove From Cart"
                        />
                        <span>{products.title}</span>
                      </td>
                      <td>
                        <span>{products.price}</span>
                      </td>
                      <td className="product_quantity_div">
                        <div className="product_quantity">
                          <button
                            type="button"
                            className="quantity_minus"
                            onClick={() => handleProductQuantity("Minus")}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input type="text" value={isQuantity} disabled />
                          <button
                            type="button"
                            className="quantity_plus"
                            onClick={() => handleProductQuantity("Plus")}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td colSpan="4" className="product_quantity_price">
                        <span>$ 36.00</span>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="4">
                    <div className="productActions">
                      <div className="pt-3">
                        <input type="text" placeholder="Coupon Code" />
                      </div>
                      <div className="pt-3">
                        <button type="button" className="applyCoupon">
                          APPLY COUPON
                        </button>
                      </div>
                      <div className="pt-3">
                        <button type="button" className="updateCart">
                          UPDATE CART
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="">
            <div className="container pt-4 border">
              <div className="row">
                <div className="col px-5">
                  <span className="cartTotal">CART TOTALS</span>
                  <div className="d-flex pt-5">
                    <span className="Subtotal">Subtotal:</span>
                    <span className="mx-4"> $79.65</span>
                  </div>
                  <hr
                    style={{
                      display: "block",
                      marginTop: "0.5em",
                      marginBottom: "0.5em",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderStyle: "dashed",
                      borderWidth: "1px",
                    }}
                  />
                  <div className="d-flex">
                    <span className="Subtotal">Shipping:</span>

                    <span className="mx-4 shippingDesc">
                      There are no shipping methods available. Please double
                      check your address, or contact us if you need any help.
                    </span>
                  </div>
                  <span className="shipping">CALCULATE SHIPPING</span>
                  <ReactDropdown
                    className="reactDropDown"
                    options={options}
                    placeholder="Select a country"
                  />
                  <div className="pt-2 selectState">
                    <input
                      type="text"
                      name="state"
                      placeholder="state/country"
                    />
                  </div>
                  <div className="pt-2 selectState">
                    <input
                      type="text"
                      name="state"
                      placeholder="postcode/zip"
                    />
                  </div>
                  <div className="pt-3  updateTotal">
                    <button type="button" className="updateCart">
                      UPDATE TOTALS
                    </button>
                  </div>
                  <hr
                    style={{
                      display: "block",
                      marginTop: "0.5em",
                      marginBottom: "0.5em",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderStyle: "dashed",
                      borderWidth: "1px",
                    }}
                  />
                  <div className="d-flex pt-3 pb-3">
                    <div>
                      <b>Total:</b>
                    </div>
                    <span className="mx-5"> $79.65</span>
                  </div>
                  <div className="pt-3 pb-3 updateProductCart">
                    <button type="button" className="ProceedToCheckout">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
