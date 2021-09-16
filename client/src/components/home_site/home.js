/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="container mt-3">
          <div className="row h-100">
            <div className="col-xl-8 col-md-12 col-sm-12 mb-2">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="#">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/9/7/Trung%20thu%20808x288.jpg"
                        className="d-block w-100 rounded-3"
                        alt="..."
                      />
                    </a>
                  </div>

                  <div className="carousel-item">
                    <a href="#">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/8/26/808x288%20copy.jpg"
                        className="d-block w-100 rounded-3"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="#">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/banner/2021/8/15/KV%20back2school-808x288%20copy.jpg"
                        className="d-block w-100 rounded-3"
                        alt="..."
                      />
                    </a>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-xl-4 col-md-12 col-sm-12 mt-md-3 mt-sm-3 mt-xl-0 ">
              <div className="  w-100 fw-bold news-box">
                <p className="p-4 news">
                  {" "}
                  <a href="" className="text-decoration-none">
                    ASUS ra mắt ProArt StudioBook 16 / Pro 16 OLED – bộ đôi
                    laptop cho creator tốt nhất từng được tạo ra
                  </a>{" "}
                </p>
              </div>
              <div className="  w-100 fw-bold news-box">
                <p className="p-4 news">
                  {" "}
                  <a href="" className="text-decoration-none">
                    ASUS ra mắt ProArt StudioBook 16 / Pro 16 OLED – bộ đôi
                    laptop cho creator tốt nhất từng được tạo ra
                  </a>{" "}
                </p>
              </div>
              <div className=" w-100 fw-bold news-box">
                <p className="p-4 news">
                  {" "}
                  <a href="" className="text-decoration-none">
                    ASUS ra mắt ProArt StudioBook 16 / Pro 16 OLED – bộ đôi
                    laptop cho creator tốt nhất từng được tạo ra
                  </a>{" "}
                </p>
              </div>
              <div className=" mt-3 ms-sm-2">
                <a
                  href="news.html"
                  className="text-decoration-none text-black ms-2"
                >
                  <b className="">
                    {" "}
                    Tất cả tin tức{" "}
                    <i className="fas fa-chevron-right ms-2 text-info"></i>
                  </b>
                </a>
              </div>
            </div>
            <hr className="mt-3" />
          </div>

          <div className="mt-3">
            <div className="container-slider ">
              <h3 className="Head fw-bold ">
                {" "}
                Sản phẩm giảm giá <span className="Arrows"></span>
              </h3>

              <div className="SlickCarousel">
                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={"#"}
              className=" rounded-pill mt-4 view-all d-block m-auto w-25"
            >
              {" "}
              <b>Xem tất cả </b>{" "}
            </a>
          </div>

          <div className="mt-3">
            <h2 className="fw-bold">Laptop hiện có</h2>
            <div className="container-slider2 mt-5">
              <div className="SlickCarousel2 ">
                <div className="col-md-1">
                  <a href="">
                    <img
                      className="w-100"
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/dell.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    {" "}
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/razer.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lenovo.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/asus.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/microsoft.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    {" "}
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/apple.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/9/24/5f6c4ee7ed9fd_1600933607.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    {" "}
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/acer.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-1 ">
                  <a href="">
                    <img
                      className="w-100 "
                      src="https://lumen.thinkpro.vn/backend/uploads/brand/icon/2020/8/7/lg.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="container-slider3 ">
              <h6 className="Head3 fw-bold">Khoảng giá </h6>

              <div className="SlickCarousel3  ">
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    Trên 50 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    40 - 50 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    30 - 40 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    20 - 30 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    15 - 20 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    10 - 15 triệu
                  </button>
                </div>
                <div className=" currentcy ">
                  <button href="" className="fw-bold">
                    Dưới 10 triệu
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-xl-3 col-md-6 col-sm-6 col-6 product-box mb-3">
              <div className="card p-2 product-card ">
                <a className=" mb-4 product-tag" href="#">
                  <div className="img-box w-100">
                    <img
                      src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h5>Laptop Acer 55(Chính hãng)</h5>
                </a>
                <div className="card-body ">
                  <h5>
                    <p>
                      Giá từ : <b className="text-danger">200.000vnđ</b>
                    </p>
                  </h5>
                  <p>
                    {" "}
                    <del>300.000vnđ</del>{" "}
                  </p>

                  <p>
                    <i className="fas fa-gifts text-danger me-2"></i> Đang giảm
                    giá
                  </p>
                </div>
                <div className="hide">
                  Color: <b className="text-warning"> Gold </b>
                  <p></p>
                  <button className="w-100 btn-info btn text-light">
                    {" "}
                    Add cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-sm-6 col-6 product-box mb-3">
              <div className="card p-2 product-card ">
                <a className=" mb-4 product-tag" href="#">
                  <div className="img-box w-100">
                    <img
                      src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h5>Laptop Acer 55(Chính hãng)</h5>
                </a>
                <div className="card-body ">
                  <h5>
                    <p>
                      Giá từ : <b className="text-danger">200.000vnđ</b>
                    </p>
                  </h5>
                  <p>
                    {" "}
                    <del>300.000vnđ</del>{" "}
                  </p>

                  <p>
                    <i className="fas fa-gifts text-danger me-2"></i> Đang giảm
                    giá
                  </p>
                </div>
                <div className="hide">
                  Color: <b className="text-warning"> Gold </b>
                  <p></p>
                  <button className="w-100 btn-info btn text-light">
                    {" "}
                    Add cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-sm-6 col-6 product-box mb-3">
              <div className="card p-2 product-card ">
                <a className=" mb-4 product-tag" href="#">
                  <div className="img-box w-100">
                    <img
                      src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h5>Laptop Acer 55(Chính hãng)</h5>
                </a>
                <div className="card-body ">
                  <h5>
                    <p>
                      Giá từ : <b className="text-danger">200.000vnđ</b>
                    </p>
                  </h5>
                  <p>
                    {" "}
                    <del>300.000vnđ</del>{" "}
                  </p>

                  <p>
                    <i className="fas fa-gifts text-danger me-2"></i> Đang giảm
                    giá
                  </p>
                </div>
                <div className="hide">
                  Color: <b className="text-warning"> Gold </b>
                  <p></p>
                  <button className="w-100 btn-info btn text-light">
                    {" "}
                    Add cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 col-sm-6 col-6 product-box mb-3">
              <div className="card p-2 product-card ">
                <a className=" mb-4 product-tag" href="#">
                  <div className="img-box w-100">
                    <img
                      src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <h5>Laptop Acer 55(Chính hãng)</h5>
                </a>
                <div className="card-body ">
                  <h5>
                    <p>
                      Giá từ : <b className="text-danger">200.000vnđ</b>
                    </p>
                  </h5>
                  <p>
                    {" "}
                    <del>300.000vnđ</del>{" "}
                  </p>

                  <p>
                    <i className="fas fa-gifts text-danger me-2"></i> Đang giảm
                    giá
                  </p>
                </div>
                <div className="hide">
                  Color: <b className="text-warning"> Gold </b>
                  <p></p>
                  <button className="w-100 btn-info btn text-light">
                    {" "}
                    Add cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a
            href={"#"}
            className=" rounded-pill mt-4 view-all d-block m-auto w-25"
          >
            {" "}
            <b>Xem tất cả </b>{" "}
          </a>

          <div className="mt-3">
            <div className="container-slider4 ">
              <h3 className="Head4 fw-bold ">
                {" "}
                Hàng đang về<span className="Arrows4"></span>
              </h3>

              <div className="SlickCarousel4">
                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>

                <div className="card p-2 product-card">
                  <a className="mb-4 product-tag" href="#">
                    <div className="img-box w-100">
                      <img
                        src="https://lumen.thinkpro.vn//backend/uploads/product/avatar/2020/11/20/swift514_00gold.jpg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <h5>Laptop Acer 55(Chính hãng)</h5>
                  </a>
                  <div className="card-body">
                    <h5>
                      <p>
                        Giá từ : <b className="text-danger">200.000vnđ</b>
                      </p>
                    </h5>
                    <p>
                      <del>300.000vnđ</del>
                    </p>

                    <p>
                      <i className="fas fa-gifts text-danger me-2"></i> Đang
                      giảm giá
                    </p>
                  </div>

                  <div className="hide-slide p-3 w-100">
                    <p className="mt-3 bg-light p-3">
                      Intel Core i5-1135G7, RAM 8GB, 512GB m.2 NVMe, 14" FHD IPS
                      (1920 x 1080), Intel Iris Xe, 48Wh, Pink (SF314-59-5178)
                    </p>
                    <button className="w-100 btn-info btn text-light rounded-pill">
                      Add cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={"#"}
              className=" rounded-pill mt-4 view-all d-block m-auto w-25"
            >
              {" "}
              <b>Xem tất cả </b>{" "}
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
