/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import Slider from "react-slick";

const ProductImg = () => {
  const [img, setData] = useState([]);
  useEffect(() => {
    const arr = [
      {
        arr: 1,
        img: "https://lumen.thinkpro.vn//backend/uploads/product/avatar/2021/9/17/rog-strix-g513im-hn057t-thinkprojpg",
      },
      {
        arr: 2,
        img: "https://lumen.thinkpro.vn//backend/uploads/product/avatar/2021/2/18/lenovo-thinkcentre-m725s-sffjpg",
      },
      {
        arr: 3,
        img: "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2021/4/6/nitro5-2020-03.jpg",
      },
    ];
    setData(arr);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipeToSlide: true,
          dots: false,
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
          background: "rgba(194, 191, 191, 0.911)",
          marginRight: "1rem",
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
          background: "rgba(194, 191, 191, 0.911)",
          marginLeft: "1rem",
          zIndex: "2",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="w-75 img-slide d-block m-auto ">
      <Slider {...settings}>
        {img.map((e) => (
          <div className="ctn ">
            <img className="w-100 h-100" src={e.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ProductImg;
