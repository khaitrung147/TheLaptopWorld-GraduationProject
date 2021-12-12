import URL from "./URL";
import axios from "axios";

export const getListOrder = async (id) => {
  return await axios.get(`${URL}/Don-hang/${id}`);
};

export const postOrder = async (body) => {
  return axios.post(`${URL}/Don-hang/`, body);
}
