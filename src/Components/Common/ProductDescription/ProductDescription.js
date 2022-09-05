import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import maximize from "../../../assets/images/icons/maximize.svg";
import SweetAlert from "sweetalert";
import { handleFetchCartProductList } from "../../../Store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ProductDescription = ({
  item,
  handleExpandProduct,
  handleLightBoxProduct,
}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [isLightBox, setIsLightBox] = useState(false);
  const [isQuantity, setIsQuantity] = useState(0);
  const [isProductDetail, setIsProductDetail] = useState(0);
  const { ProductsList } = useSelector((state) => state.Shop);

  useEffect(() => {
    if (params.id) {
      setIsProductDetail(params.id);
    } else {
      setIsProductDetail(item.value);
    }
  }, [params, item]);

  const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="fa-solid fa-chevron-right slick-next-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        className="fa-solid fa-chevron-left slick-prev-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleProductQuantity = (option) => {
    if (option === "Plus" && isQuantity >= 0) {
      setIsQuantity(isQuantity + 1);
    } else {
      if (option === "Minus" && isQuantity !== 0) {
        setIsQuantity(isQuantity - 1);
      }
    }
  };

  const handleAddToCart = (item) => {
    SweetAlert(item.title, "is added to wishlist !", "success");
    dispatch(handleFetchCartProductList({ item }));
  };

  const handleExpandMaximize = (item) => {
    handleExpandProduct(!isLightBox);
    handleLightBoxProduct(item.name);
  };

  return (
    <div>
      {ProductsList.map((item, index) => {
        return (
          isProductDetail == item.value && (
            <div className="row px-3" key={index}>
              <div className="col-lg-7 pb-5">
                <div className="row inner-row p-3.0">
                  <div className="col-lg-2">
                    <div className="pt-1">
                      <div>
                        <img
                          className="image-fluid quickViewOptions"
                          src={item.name}
                        />
                      </div>
                      <div>
                        <img
                          className="image-fluid quickViewOptions"
                          src={item.name}
                        />
                      </div>
                      <div>
                        <img
                          className="image-fluid quickViewOptions"
                          src={item.name}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-10">
                    <Slider {...settings}>
                      <div className="product_image_view_div">
                        <img className="" src={item.name} />
                      </div>
                      <div className="product_image_view_div">
                        <img className="" src={item.name} />
                      </div>
                      <div className="product_image_view_div">
                        <img className="" src={item.name} />
                      </div>
                    </Slider>
                    <div
                      className="expandMaximize"
                      onClick={() => handleExpandMaximize(item)}
                    >
                      <img src={maximize} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 px-5">
                <div className="productDesc">
                  <h4 class="text-name-detail">{item.title}</h4>
                  <span>{item.price}</span>
                  <p>
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  <div className="productViewOption">
                    <div className="sizeOption">
                      <span>Size</span>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Choose an option</option>
                        <option value="1">Size S</option>
                        <option value="2">Size M</option>
                        <option value="3">Size L</option>
                        <option value="3">Size XL</option>
                      </select>
                    </div>
                    <div className="sizeOption">
                      <span>Color</span>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Choose an option</option>
                        <option value="1">Red</option>
                        <option value="2">Blue</option>
                        <option value="3">White</option>
                        <option value="3">Grey</option>
                      </select>
                    </div>
                    <div className="d-flex">
                      <div className="pt-3 product_quantity">
                        <div className="product-detail-quantity">
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
                      </div>
                      <div
                        className="addToCart"
                        onClick={() => handleAddToCart(item)}
                      >
                        <button type="button" className="ProceedToCheckout">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="pt-5 product-detail-overView">
                      <Link
                        to="#"
                        className="product-overView-option tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i class="fa-solid fa-heart"></i>
                      </Link>
                      <div className="me-3">|</div>
                      <Link
                        to="#"
                        className="product-overView-option tooltip100"
                        data-tooltip="Facebook"
                      >
                        <i class="fa-brands fa-facebook"></i>
                      </Link>
                      <Link
                        to="#"
                        className="product-overView-option tooltip100"
                        data-tooltip="Twitter "
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        to="#"
                        className="product-overView-option tooltip100"
                        data-tooltip="Google Plus"
                      >
                        <i class="fa-brands fa-google-plus-g"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default ProductDescription;
