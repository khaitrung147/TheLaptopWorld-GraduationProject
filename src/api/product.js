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
export const filterProduct = (key) => {
  const { currentPage, sort, filter } = key;
  console.log(key);
  return axios.get(
    `http://localhost:5000/api/v1/filter?page=${currentPage}&q=${filter}&order=${sort}`
  );
};
