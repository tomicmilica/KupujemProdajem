
import axios from "axios";
require('dotenv').config()
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAd = async (id?: number) => {
  const response = await axios.get(BASE_URL + `/getAd/${id}`);
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


  const response = await axios.get(BASE_URL + `/findAd?${query}`);
  console.log(response);
  return response;
}

