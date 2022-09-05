import React from "react";
import { Link } from "react-router-dom";
import iconPay1 from "../../../assets/images/icons/icon-pay-01.png";
import iconPay2 from "../../../assets/images/icons/icon-pay-02.png";
import iconPay3 from "../../../assets/images/icons/icon-pay-03.png";
import iconPay4 from "../../../assets/images/icons/icon-pay-04.png";
import iconPay5 from "../../../assets/images/icons/icon-pay-05.png";

export const Footer = () => {
  const footerOptions = [
    { name: "Women", path: "#", value: 1 },
    { name: "Men", path: "#", value: 2 },
    { name: "Shoes", path: "#", value: 3 },
    { name: "Watches", path: "#", value: 4 },
  ];
  const forHelp = [
    { name: "Track Order", path: "#", value: 1 },
    { name: "Returns", path: "#", value: 2 },
    { name: "Shipping", path: "#", value: 3 },
    { name: "FAQs", path: "#", value: 4 },
  ];

  const iconPay = [
    { name: iconPay1, path: "#", value: 1 },
    { name: iconPay2, path: "#", value: 2 },
    { name: iconPay3, path: "#", value: 3 },
    { name: iconPay4, path: "#", value: 4 },
    { name: iconPay5, path: "#", value: 5 },
  ];

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="footerHeading">CATEGORIES</h6>
            <ul className="px-0">
              {footerOptions?.map((options, index) => {
                return (
                  <li key={index} className="mb-2">
                    <Link to={options.path} className="footerOptions">
                      {options.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h6 className="footerHeading">HELP</h6>
            <ul className="px-0">
              {forHelp?.map((options, index) => {
                return (
                  <li key={index} className="mb-2">
                    <Link to={options.path} className="footerOptions">
                      {options.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h6 className="footerHeading">GET IN TOUCH</h6>
            <p className="forHelp">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <ul className="footer_icons px-0 d-flex">
              <li>
                <i className="fa-brands fa-facebook footerOptions"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram footerOptions"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter footerOptions"></i>
              </li>
              <li>
                <i className="fa-brands fa-pinterest-p footerOptions"></i>
              </li>
            </ul>
          </div>
          <div className="col">
            <h6 className="footerHeading">NEWSLETTERS</h6>

            <form>
              <div className="focus-emailInput">
                <input
                  type="text"
                  name="email"
                  id="focusOutEmailInput"
                  placeholder="email@example.com"
                  className="emailInput"
                  autoComplete="off"
                />
              </div>
              <div className="pt-3">
                <button type="button" className="subscribe">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="payOptions">
          <ul className="iconPay d-flex">
            <li>
              {iconPay.map((options, index) => {
                return (
                  <Link className="navbar-brand" to={options.path} key={index}>
                    <img
                      src={options.name}
                      alt="iconPay"
                      className="image-fluid"
                    />
                  </Link>
                );
              })}
            </li>
          </ul>
        </div>
        <div className="copyRight">
          <span>
            Copyright ©2022 All rights reserved | Made with by
            <Link to="#" className="mx-1 navbar-brand copyRightTitle">
              Stark Industries
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
