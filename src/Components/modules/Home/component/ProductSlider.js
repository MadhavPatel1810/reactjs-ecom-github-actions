import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Images from "../../../Common/images/Images";

export const ProductSlider = ({ home }) => {
  const [isCurrentSlide, setIsCurrentSlide] = useState(0);

  const SampleNextArrow = (props) => {
    const { style, onClick } = props;
    setIsCurrentSlide(props.currentSlide);
    return (
      <div
        className="fa-solid fa-chevron-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    setIsCurrentSlide(props.currentSlide);
    const { style, onClick } = props;
    return (
      <div
        className="fa-solid fa-chevron-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  var settings = {
    fade: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {Images.map((element, index) => {
        return (
          element.home == home && (
            <div className="sliderImage" key={index}>
              <div className="sliderSubTitle">
                <p
                  className={
                    isCurrentSlide == 0
                      ? "animate__animated animate__fadeInDownBig"
                      : isCurrentSlide == 1
                      ? "animate__animated animate__rollIn"
                      : "animate__animated animate__rotateInDownLeft"
                  }
                >
                  {element.subTitle}
                </p>
              </div>
              <div className="sliderTitle">
                <p
                  className={
                    isCurrentSlide == 0
                      ? "animate__animated animate__fadeInUpBig"
                      : isCurrentSlide == 1
                      ? "animate__animated animate__fadeInRightBig"
                      : "animate__animated animate__rotateInUpRight"
                  }
                >
                  {element.title}
                </p>
                <div className="pt-3">
                  <Link to={element.path}>
                    {" "}
                    <button
                      type="button"
                      className={
                        isCurrentSlide == 0
                          ? "animate__animated animate__zoomIn shopNow shop_now_slider"
                          : isCurrentSlide == 1
                          ? "animate__animated animate__fadeInUp shopNow shop_now_slider"
                          : "animate__animated animate__rotateIn shopNow shop_now_slider"
                      }
                    >
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src={element.name}
                alt="sliderImage"
                className="image-fluid w-100"
              />
            </div>
          )
        );
      })}
    </Slider>
  );
};

{
  /* <Slider {...settings}>
  {sliderImage.map((element, index) => {
    return (
      <div className="sliderImage" key={index}>
        <img
          src={element.name}
          alt="sliderImage"
          className="image-fluid w-100"
        />
      </div>
    );
  })}
</Slider>; */
}

// <h3
//   className={
//     isCurrentSlide === 0
//       ? "animate__animated animate__fadeInDownBig"
//       : isCurrentSlide == 1
//       ? "animate__animated animate__rollIn"
//       : "animate__animated animate__rotateInDownLeft"
//   }
// >
//   {element.subTitle}
// </h3>;
