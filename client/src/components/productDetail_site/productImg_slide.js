/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import Slider from "react-slick";

const ProductImg = (props) => {
  const [img, setData] = useState([]);
  useEffect(() => {
    setData(props.data.HinhAnh);
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
          display: "none",
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
          display: "none",
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
    <>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 img-slider ">
        <div className="w-75 img-slide d-block m-auto ">
          <Slider {...settings}>
            {(props.data.HinhAnh || []).map((e) => (
              <div className="ctn">
                <img className="w-100" src={e.Url} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ProductImg;
