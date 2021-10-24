import URL from "./URL";
import axios from "axios";

export const getListComment = async (id) => {
  return await axios.get(`${URL}/binh-luan-khach-hang/${id}`);
};
