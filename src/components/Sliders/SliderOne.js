import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderOne.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SliderOne = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.04,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <div className="slider-main">
        <span className="slider-heading">Trending Now</span>

        <div className="slider-buttons">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/9828eeba-9468-4dd7-9390-97f2182265c5/air-max-dawn-shoe-MmLxf4.png"
            alt="Men's Shoes"
          />
          <div className="product-card__info">
            <div className="product-card__name">
              <span>Nike Air Max Dawn</span>
              <span className="product-card__price">AED 549</span>
            </div>
            <span className="product-card__category">Men's Shoes</span>
          </div>
        </div>

        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/8f15f60f-151f-4e0f-8625-d28491814cb6/air-zoom-superrep-3-hiit-class-shoes-WWc7rC.png"
            alt="Men's Shoes"
          />
          <div className="product-card__info">
            <div className="product-card__name">
              <span>Nike Air Zoom SuperRep 3</span>
              <span className="product-card__price">AED 629</span>
            </div>

            <span className="product-card__category">
              Women's HIIT Class Shoes
            </span>
          </div>
        </div>

        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/e07e7673-d173-4e3d-bd43-2721cc668f20/air-max-pre-day-shoes-96mb54.png"
            alt="Men's Shoes"
          />
          <div className="product-card__info">
            <div className="product-card__name">
              <span>Nike Air Max Pre-Day</span>
              <span className="product-card__price">AED 649</span>
            </div>
            <span className="product-card__category">Men's Shoes</span>
          </div>
        </div>

        <div className="product-card">
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/288279ca-c19e-4c3a-8a54-21c401fedd2f/air-zoom-superrep-3-hiit-class-shoes-CDk5j2.png"
            alt="Men's Shoes"
          />
          <div className="product-card__info">
            <div className="product-card__name">
              <span>Nike Air Zoom SuperRep 3</span>
              <span className="product-card__price">AED 629</span>
            </div>

            <span className="product-card__category">
              Men's HIIT Class Shoes
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
