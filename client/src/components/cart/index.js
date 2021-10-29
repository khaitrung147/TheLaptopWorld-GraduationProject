import React from "react";
import Breadcrumb from "../../constants/breadcrumb";
import "./cart.css"
export default function Cart() {
  return (
<section class="h-100">
    <div class="container h-100 py-5">
    <div className=" pt-3">
          <Breadcrumb
            key=""
            currentPage="Giỏ Hàng"
            listBread={[
              {
                path: "/",
                pageName: "Trang chủ",
              },
            ]}
          />
        </div>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-8">
          <div class="justify-content-between align-items-center mb-4 text-center">
            <h3 class="fw-bold mb-0 text-black">Giỏ Hàng</h3>
            <hr/>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-md-2 col-lg-2 col-xl-2">Sản phẩm </th>
                <th scope="col-md-2 col-lg-2 col-xl-2">Giá</th>
                <th scope="col-md-2 col-lg-2 col-xl-2">Số lượng</th>
              </tr>
            </thead>
          </table>
          <div class="card rounded-3 mb-4">
            <div class="card-body p-6">
              <div class="row d-flex align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img src="https://www.freepnglogos.com/uploads/macbook-png/macbook-the-church-apple-your-source-for-apple-news-and-33.png"
                    class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <h5 class=" mb-0">Macbook</h5>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-3 offset-lg-1">
                  <h5 class="mb-0 text-info" >200.000vnđ</h5>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fa fa-minus text-dark" aria-hidden="true"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-1"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fa fa-plus text-dark" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-dark"><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div class="card rounded-3 mb-4">
            <div class="card-body p-6">
              <div class="row d-flex align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img src="https://www.freepnglogos.com/uploads/macbook-png/macbook-the-church-apple-your-source-for-apple-news-and-33.png"
                    class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <h5 class=" mb-0">Macbook</h5>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-3 offset-lg-1">
                  <h5 class="mb-0 text-info" >200.000vnđ</h5>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-1"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fa fa-minus text-dark" aria-hidden="true"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fa fa-plus text-dark" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#" class="text-dark"><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
  
          <div class="card rounded-3 mb-4">
            <div class="card-body p-6">
              <div class="row d-flex  align-items-center">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img src="https://www.freepnglogos.com/uploads/macbook-png/macbook-the-church-apple-your-source-for-apple-news-and-33.png "
                    class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <h5 class=" mb-0">Macbook</h5>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-3 offset-lg-1">
                  <h5 class="mb-0 text-info" >200.000vnđ</h5>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                  <button class="btn btn-link px-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fa fa-minus text-dark" aria-hidden="true"></i>
                  </button>
  
                  <input id="form1" min="0" name="quantity" value="2" type="number"
                    class="form-control form-control-sm" />
  
                  <button class="btn btn-link px-1"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fa fa-plus text-dark" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-dark"><i class="fa fa-times" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 align-items-stretch g-3">
              <div class="col-6">
                <div class="h-100 overflow-hidden text-dark bg-red-200 rounded-5 rounded">
                <div className="row ">
                <div class="col-sm-2">
                <div className='w-100 ms-3 mt-4'>
                <i class="fa fa-truck text-danger" aria-hidden="true"></i>
                    </div>
                  </div>
                  <a href="#" class="col-sm-10">
                  <h5 class="fs-6 mt-3 fw-bolder text-danger">+2 Woking days</h5>
                  <h6 className="text-danger ">
                      11-2021 
                    </h6>
                  </a>
                </div>
                      </div>
                    </div>

                <div class="col-3">
                  <div class="h-100 overflow-hidden text-dark bg-white rounded-5 rounded ">
                  <div class="fs-5 mt-3 text-center fw-bolder text-info danger "><a href="#">Add coupon</a></div>
                      </div>
                    </div>
              <div class="col-3">
                <div class="h-100 overflow-hidden bg-Secondary rounded-5 text-center rounded">
                    <h5 className="fw-bolder text-dark">Total: $2012</h5>
                    <a href="#"
              className="rounded-pill bg-info fw-bold btn custom-btn"
            >
              <span className="p-3 text-white">Checkout</span>
            </a>
                </div>
              </div>
              </div>
        </div>
      </div>
    </div>
  </section>
  );
}