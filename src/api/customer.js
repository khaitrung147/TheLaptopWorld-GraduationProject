import URL from "./URL";
import axios from "axios";

export const getListCustomer = async (id) => {
  return await axios.get(`${URL}/tai-khoan-khach-hang`);
};

export const getCustomer = async (id) => {
  return await axios.get(`${URL}/tai-khoan-khach-hang/${id}`);
};

export const updateInfoCustomer = async ({ userId, body }) => {
  return await axios.patch(`${URL}/tai-khoan-khach-hang/${userId}`, {
    TenKhachHang: body.Name,
    Email: body.Email,
    Phone: body.Phone,
  });
};

export const updatePassCustomer = async ({ userId, hash }) => {
  return await axios.patch(`${URL}/tai-khoan-khach-hang/${userId}`, {
    Password: hash,
  });
};

export const loginCustomer = async (body) => {
  return await axios.post(`${URL}/tai-khoan-khach-hang/login`, body);
};

export const registerCustomer = async (body) => {
  return await axios.post(`${URL}/tai-khoan-khach-hang`, body);
};
