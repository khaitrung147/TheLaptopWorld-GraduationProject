import axios from "axios";
import URL from "./URL";

export const getList = () => {
  return axios.get(`${URL}/lien-he`);
};

export const postContact = async (body) => {
  return await axios.post(`${URL}/lien-he`, body);
};

export const updateContact = async (body) => {
  return await axios.patch(`${URL}/lien-he/${body.id}`, body.body);
};
