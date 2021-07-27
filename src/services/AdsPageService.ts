
import axios from "axios";

export const getAds = async () => {
  const response = await axios.get("http://localhost:3001/getAds");
  console.log(response);
  return response;
};

export const findAd = async (name?: string, category?: string) => {

  let query = '';

  if (name) {
    query += `search=${name}`;
  }

  if (category) {
    query += `&category=${category}`
  }


  const response = await axios.get(`http://localhost:3001/findAd?${query}`);
  console.log(response);
  return response;
}
