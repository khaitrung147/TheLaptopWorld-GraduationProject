import URL from "./URL";
import axios from "axios";

export const getListCustomer = async (id) => {
  return await axios.get(`${URL}/tai-khoan-khach-hang`);
};
