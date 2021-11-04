import URL from "./URL";
import axios from "axios";

export const getListRate = async (id) => {
  return await axios.get(`${URL}/danh-gia/${id}`);
};
