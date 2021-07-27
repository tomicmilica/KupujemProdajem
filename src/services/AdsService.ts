
import axios from "axios";

export const getAds = async () => {
  const response = await axios.get("http://localhost:3001/getAds");
  console.log(response);
  return response;
};

export const findAd = async (query: string) => {
  const response = await axios.get(`http://localhost:3001/findAd?search=${query}`);
  console.log(response);
  return response;
}
