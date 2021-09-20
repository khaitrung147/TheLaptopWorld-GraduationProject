/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";

const Slider_home = (props) => {
  const settings = {
    initialSlide: 0,
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    fade: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
          dots: true,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginRight: "2rem",
          zIndex: "2",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginLeft: "2rem",
          zIndex: "2",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <Slider {...settings}>
      <div className="w-100">
        <a href="#!" className="text-decoration-none">
          <img
            className="rounded-3 w-100"
            src={
              "https://lumen.thinkpro.vn//backend/uploads/banner/2021/9/8/808x288-2%20copy.jpg"
            }
          />
        </a>
      </div>
      <div className="w-100">
        <a href="#!" className="text-decoration-none">
          <img
            className="rounded-3 w-100"
            src={
              "https://lumen.thinkpro.vn//backend/uploads/banner/2021/8/26/808x288%20copy.jpg"
            }
          />
        </a>
      </div>
      <div className="w-100">
        <a href="#!" className="text-decoration-none">
          <img
            className="rounded-3 w-100"
            src={
              "https://lumen.thinkpro.vn//backend/uploads/banner/2021/8/15/KV%20back2school-808x288%20copy.jpg"
            }
          />
        </a>
      </div>
      <div className="w-100">
        <a href="#!" className="text-decoration-none">
          <img
            className="rounded-3 w-100"
            src={
              "https://lumen.thinkpro.vn//backend/uploads/banner/2021/9/7/Trung%20thu%20808x288.jpg"
            }
          />
        </a>
      </div>
    </Slider>
  );
};

export default Slider_home;
