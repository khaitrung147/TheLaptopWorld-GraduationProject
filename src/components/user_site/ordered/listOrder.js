import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function ListOrder({ data }) {
  console.log(data);
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{data._id}</th>
          <td> {moment(data.createdAt).format("DD/MM/YYYY, HH:mm A")}</td>
          <td>
            <Link to={`/san-pham/${data.SanPham[0].MaSanPham}`}>
              {data.SanPham[0].MaSanPham}
            </Link>
          </td>
          <td>{data.SanPham[0].GiaTien.toLocaleString("vi-vn")}vnđ</td>
          <td>
            {data.TrangThai == 1 ? (
              <b>Đã xác nhận</b>
            ) : data.TrangThai == 2 ? (
              <b>Đang giao hàng</b>
            ) : data.TrangThai == 3 ? (
              <b>Đã nhận hàng</b>
            ) : (
              <b>Đang chờ xác nhận</b>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
}

export default ListOrder;
