import URL from "./URL";
import axios from "axios";

export const getListCustomer = async (id) => {
  return await axios.get(`${URL}/tai-khoan-khach-hang`);
};

export const loginCustomer = async (body) => {
  return await axios.post(`${URL}/tai-khoan-khach-hang/login`, body);
};

// export const registerCustomer = async (body) => {
//   return await axios.post(`${URL}/tai-khoan-khach-hang`, body);
// };
export const registerCustomer = async (body) => {
  return await axios.post(`${URL}/tai-khoan-khach-hang`, body);
};