import React from "react";
import Sidebar from "../sidebar";

function Oredered() {
  return (
    <main>
      <div className="container mt-5">
        <div className="row">
          <Sidebar />
          <div className="col-xl-10 col-lg-9 col-md-9">
            <h3 className="fw-bold">Lịch sử đặt hàng</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Đơn hàng</th>
                  <th scope="col">Thời gian mua</th>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>9/9/2021</td>
                  <td>MSI Modern 14 B11</td>
                  <td>23.000.000vnđ</td>
                  <td>Đang xử lý</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Oredered;
