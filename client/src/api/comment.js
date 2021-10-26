import URL from "./URL";
import axios from "axios";

export const getListComment = async (id) => {
  return await axios.get(`${URL}/binh-luan-khach-hang/${id}`);
};

export const postComment = async (comment) => {
  return await axios.post(`${URL}/binh-luan-khach-hang`, comment);
};
