import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardsImages from "../../../Common/cardsImages/cardsImages";
import { handleFetchProductTypeListing } from "../store/action";

const ProductTypes = ({ card }) => {
  const dispatch = useDispatch();
  const { ProductTypeList } = useSelector((state) => state.home_product);

  /** Home Product Types list */
  useEffect(() => {
    dispatch(handleFetchProductTypeListing({ cardsImages }));
  }, [cardsImages]);
  return (
    <div className="container py-3">
      <div className="row">
        {ProductTypeList.map((item, index) => {
          return (
            item.card == card && (
              <div className="col-lg-4" key={index}>
                <div className="card bg-dark text-dark">
                  <img src={item.name} className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <span className="card-title">{item.title}</span>
                    <p className="card-text">{item.subTitle}</p>
                    <div className="shop_now">
                      <Link to={item.path}>
                        {" "}
                        <span className="card-shop-now">SHOP NOW</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ProductTypes;
