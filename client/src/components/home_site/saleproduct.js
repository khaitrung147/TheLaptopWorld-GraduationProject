/* eslint-disable no-dupe-keys */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

import Slider from "react-slick";

const Saleproduct = (props) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    pauseOnHover: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "20px",
    swipeToSlide: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          swipeToSlide: true,
          nextArrow: false,
          prevArrow: false,
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

  const [Data, setData] = useState([]);
  useEffect(() => {
    const arr = [
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "Dell Inspiron 14 7405 2 in 1",
      },
      {
        name: "HP Pavilion 15 (Intel Gen 11)",
      },
      {
        name: "Acer Swift 3X (Chính hãng)",
      },
      {
        name: "HP Victus 16",
      },
      {
        name: "MSI Modern 14 B10",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
      {
        name: "ASUS ROG Strix G15 (G513)",
      },
    ];
    setData(arr);
  }, []);

  return (
    <Slider {...settings}>
      {Data.map((e) => (
        <div class="card p-2 product-card " key={e.id}>
          <a class="mb-4 product-tag" href="#">
            <div class="img-box w-100">
              <img
                src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2021/9/15/macbook-pro-13-2020-1jpg"
                class="w-100"
                alt=""
              />
            </div>
          </a>
          <div class="card-body">
            <h6> {e.name} </h6>
            <h6>
              <p>
                Giá từ : <b class="text-danger">200.000vnđ</b>
              </p>
            </h6>
            <p>
              <small>
                <del>300.000vnđ</del>
              </small>
            </p>

            <small>
              <i class="fas fa-gifts text-danger me-2"></i> Đang giảm giá
            </small>
          </div>

          <div class="hide-slide w-100">
            <p class="bg-light p-3 text-dark">
              Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS (1920 x
              1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
            </p>
            <div className="p-2">
              <button class="w-100 btn-info btn text-light rounded-pill fw-bold">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Saleproduct;
