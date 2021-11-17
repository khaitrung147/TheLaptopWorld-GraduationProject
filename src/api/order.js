import URL from "./URL";
import axios from "axios";

// export const getListStaff = async (id) => {
//   return await axios.get(`${URL}/Don-hang/${id}`);
// };

// export const postRate = async (rate) => {
//   return await axios.post(`${URL}/Don-hang`, rate);
// };

export const getListOrder = async (id) => {
  return await axios.get(`http://localhost:5000/api/v1/Don-hang/${id}`);
};

export const postRate = async (rate) => {
  return await axios.post(`http://localhost:5000/api/v1/Don-hang`, rate);
};
