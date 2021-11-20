import URL from "./URL";
import axios from "axios";

export const getListStaff = async (id) => {
  return await axios.get(`${URL}/tai-khoan-nhan-vien`);
};

export const loginStaff = async (body) => {
  return await axios.post(`${URL}/tai-khoan-nhan-vien/login`, body);
};
