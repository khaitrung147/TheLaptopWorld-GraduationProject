/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const Brand = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    initialSlide: 0,
    centerPadding: "120px",
    swipeToSlide: true,
    rtl: true,
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
          centerPadding: "70px",
        },
      },
    ],
  };

  const [brand, setData] = useState([]);

  useEffect(() => {
    const arr = [
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/dell.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/razer.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lenovo.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/asus.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/hp.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/microsoft.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/apple.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/9/24/5f6c4ee7ed9fd_1600933607.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/acer.png",
      },
      {
        img: "https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lg.png",
      },
    ];
    setData(arr);
  }, []);

  return (
    <Slider {...settings}>
      {brand.map((e) => (
        <div className="slide-brand w-75 mt-2">
          {" "}
          <a href="#!" className="text-decoration-none">
            <img src={e.img} class="w-100" alt="" />
          </a>{" "}
        </div>
      ))}
    </Slider>
  );
};

export default Brand;
