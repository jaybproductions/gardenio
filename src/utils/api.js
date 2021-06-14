import axios from "axios";

export const getAllVegetables = async () => {
  const response = await axios.get("http://localhost:94/vegetables/all");
  return response.data;
};

export const getCrop = async (type, crop) => {
  const response = await axios.get(`http://localhost:94/${type}/${crop}`);
  return response.data;
};
