import axios from "axios";
import URL from "./URL";

export const getProduct = async () => {
  return axios.get(`${URL}/san-pham`);
};
