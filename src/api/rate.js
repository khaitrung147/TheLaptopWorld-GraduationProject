import URL from "./URL";
import axios from "axios";

export const getListRate = async (id) => {
  return await axios.get(`${URL}/danh-gia/${id}`);
};

export const postRate = async (body) => {
  return await axios.post(`${URL}/danh-gia`, body);
};
