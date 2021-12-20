import React, { useEffect } from "react";
import Sidebar from "../sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailOrder } from "../../../redux/actions/order";
import ListOrder from "./listOrder";
import "./index.css";
function Oredered() {
  if (localStorage.thelaptopworld_token) {
    var { userId } = JSON.parse(localStorage.getItem("thelaptopworld_token"));
  }
  const { data } = useSelector((state) => state.order);
  if (data) {
    var orderUser = data.data;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailOrder(userId));
  }, [dispatch, userId]);
  return (
    <main>
      <div className="container mt-5 mb-5">
        <div className="row">
          <Sidebar />
          <div
            className="col-xl-10 col-lg-9 col-md-9"
            style={{ overflowX: "scroll" }}
          >
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
              {(orderUser || []).map((e) => (
                <ListOrder data={e} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Oredered;
