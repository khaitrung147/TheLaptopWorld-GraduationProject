import URL from "./URL";
import axios from "axios";

export const getListOrder = async () => {
  return await axios.get(`${URL}/Don-hang`);
};

export const getDetailOrder = async (id) => {
  return await axios.get(`${URL}/Don-hang/${id}`);
};

export const postOrder = async (body) => {
  console.log('body :>> ', body);
  return axios.post(`${URL}/Don-hang/`, body);
}
