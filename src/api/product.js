import axios from "axios";
import URL from "./URL";

export const getListProduct = async () => {
  return await axios.get(`${URL}/san-pham`);
};

export const getDetailProduct = async (key) => {
  return await axios.get(`${URL}/san-pham/${key}`);
};

export const searchProduct = async (key) => {
  return await axios.get(`${URL}/search?q=${key}`);
};
