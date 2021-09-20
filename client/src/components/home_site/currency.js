/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Slider from "react-slick";

const Currency = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 7,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: "80px",
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
          centerMode: true,
          centerPadding: "15px",
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          Trên 50 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          40-50 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          30-40 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          20-30 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          15-20 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          10-15 triệu
        </button>
      </div>
      <div className=" currentcy ">
        <button href="" className="fw-bold">
          Dưới 10 triệu
        </button>
      </div>
    </Slider>
  );
};

export default Currency;
