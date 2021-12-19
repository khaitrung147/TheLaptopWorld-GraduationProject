import URL from "./URL";
import axios from "axios";

export const getListComment = async (id) => {
  return await axios.get(`${URL}/binh-luan-khach-hang/${id}`);
};

export const postComment = async (comment) => {
  console.log(comment);
  return await axios.post(`${URL}/binh-luan-khach-hang`, comment);
};

export const repComment = ({ idRep, body }) => {
  console.log(idRep, body);
  return axios.patch(`${URL}/binh-luan-khach-hang/${idRep}`, { PhanHoi: body });
};
