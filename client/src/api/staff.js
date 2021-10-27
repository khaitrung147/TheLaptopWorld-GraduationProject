import URL from "./URL";
import axios from "axios";

export const getListStaff = async (id) => {
  return await axios.get(`${URL}/tai-khoan-nhan-vien`);
};
