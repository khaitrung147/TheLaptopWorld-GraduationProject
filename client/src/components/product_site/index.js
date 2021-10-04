import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumb from '../../constants/breadcrumb';
import ProductList from './productList';

const Product= ()=>{

    return (
      <>
        <div className="container mt-3">
          <Breadcrumb 
            key=""
            currentPage="Sản phẩm"
            listBread={[
              {
                path: "/",
                pageName: "Trang chủ",
              },
            ]}
          />
        </div>
        <main>
          <div className="container mt-4 ">
            <div className="row">
              <div className="col-md-3 col-xl-3 col-sm-12 mb-3 filter">
                <h3 className="text-center">
                  <b>Bộ lọc</b>{" "}
                </h3>
                <div className="accordion " id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Thương hiệu
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Apple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Loại hàng
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="flexCheckDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault2"
                          >
                            Apple
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-xl-9 col-sm-12 ">
                <h3 className="text-center">
                  {" "}
                  <b>Sản phẩm của chúng tôi</b>{" "}
                </h3>
                <div className="w-25 select">
                  <select name id className="form-select">
                    <option value>Tất cả</option>
                    <option value>Mới nhập hàng</option>
                    <option value>Giá từ cao đến thấp</option>
                    <option value>Giá từ thấp đến cao</option>
                    <option value>Sắp xếp A &gt; Z</option>
                    <option value>Sắp xếp Z &gt; A</option>
                  </select>
                </div>
                <hr />
                <ProductList 
                    key=""
                />
              </div>
            </div>
          </div>
        </main>
      </>
    );
}

export default Product