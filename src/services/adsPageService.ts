import { authAxios } from '../configAuth'
require('dotenv').config()
const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAd = async (id?: number) => {
  const response = await authAxios.get(BASE_URL + `/getAd/${id}`);
  console.log(response);
  return response;
};

export const findAd = async (name?: string, category?: string, price?: string) => {

  let query = '';

  if (name) {
    query += `search=${name}`;
  }
  if (category) {
    query += `&category=${category}`
  }
  if (price) {
    query += `&price=${price}`
  }

  const response = await authAxios.get(`/findAd?${query}`);
  return response;
}

