import React, { useEffect, useState } from "react";
import navLogo from "../../../assets/images/icons/navLogo.png";
import "../../../assets/css/style.css";
import { Link, useLocation } from "react-router-dom";
import { Offcanvas } from "reactstrap";
import itemCart01 from "../../../assets/images/item-cart-01.jpg";
import itemCart02 from "../../../assets/images/item-cart-02.jpg";
import itemCart03 from "../../../assets/images/item-cart-03.jpg";
import SearchModal from "../SearchModal/SearchModal";
import RightBarOffCanvas from "../RightBarOffCanvas/RightBarOffCanvas";

export const Header = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const navOptions = [
    { name: "Home", path: "/", value: 1 },
    { name: "Shop", path: "/shop", value: 2 },
    { name: "Features", path: "/features", value: 3 },
    { name: "Blog", path: "/blog", value: 4 },
    { name: "About", path: "/about", value: 5 },
    { name: "Contact", path: "/contact", value: 6 },
  ];

  const headerCart = [
    {
      itemName: "White Shirt Pleat",
      itemImage: itemCart01,
      itemPrice: "1 x $19.00",
      value: 1,
    },
    {
      itemName: "Converse All Star",
      itemImage: itemCart02,
      itemPrice: "1 x $39.00",
      value: 2,
    },
    {
      itemName: "Nixon Porter Leather",
      itemImage: itemCart03,
      itemPrice: "1 x $17.00",
      value: 3,
    },
  ];

  //Identify Scroll Value
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Header Search Option
  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  //Header Right bar Cart
  const handleHeaderCart = () => {
    setIsCart(!isCart);
  };

  return (
    <div>
      <nav
        className={
          scrollPosition > 20
            ? "navbar navbar-expand-lg bg-light"
            : "navbar navbar-expand-lg"
        }
      >
        <div className="container ">
          <Link className="navbar-brand" to="#">
            <img
              src={navLogo}
              alt="Stark Industries"
              className="image-fluid navLogo"
            />
            <h2>React</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {navOptions.map((options, index) => {
                return (
                  <Link
                    className={
                      location.pathname === options.path
                        ? location.pathname == "/blog" ||
                          location.pathname == "/about" ||
                          location.pathname == "/contact"
                          ? "nav-link OnActivated"
                          : "nav-link active"
                        : (location.pathname == "/blog" ||
                            location.pathname == "/about" ||
                            location.pathname == "/contact") &&
                          scrollPosition < 20
                        ? "nav-link text-white"
                        : "nav-link"
                    }
                    aria-current="page"
                    to={options.path}
                    key={index}
                  >
                    {options.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <i
              className={
                (location.pathname == "/blog" ||
                  location.pathname == "/about" ||
                  location.pathname == "/contact") &&
                scrollPosition < 20
                  ? "fa-solid fa-magnifying-glass m-1 navOptions text-white"
                  : "fa-solid fa-magnifying-glass m-1 navOptions"
              }
              onClick={handleSearch}
            ></i>
            <i
              className={
                (location.pathname == "/blog" ||
                  location.pathname == "/about" ||
                  location.pathname == "/contact") &&
                scrollPosition < 20
                  ? "fa-solid fa-cart-shopping m-1 navOptions text-white"
                  : "fa-solid fa-cart-shopping m-1 navOptions"
              }
              onClick={handleHeaderCart}
            ></i>
            <i
              className={
                (location.pathname == "/blog" ||
                  location.pathname == "/about" ||
                  location.pathname == "/contact") &&
                scrollPosition < 20
                  ? "fa-regular fa-heart m-1 navOptions text-white"
                  : "fa-regular fa-heart m-1 navOptions"
              }
            ></i>
          </div>
        </div>
      </nav>

      {/* Header Search Option */}
      <SearchModal isOpen={isSearch} isClose={() => setIsSearch(false)} />

      {/* Header Right Side Bar Cart */}
      <RightBarOffCanvas
        isOpen={isCart}
        isClose={() => setIsCart(false)}
        elements={headerCart}
        title="Your Cart"
        totalPrice=" $75.00"
        button1="View Cart"
        button2="Check Out"
      />
    </div>
  );
};
