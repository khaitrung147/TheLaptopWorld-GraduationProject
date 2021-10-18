import axios from "axios";
import URL from "./URL";

export const getProduct = async () => {
  return await axios.get(`${URL}/san-pham`);
};
