import axios from "axios";
import URL from "./URL";

export const getList = () => {
  return axios.get(`${URL}/hang-san-xuat`);
};
