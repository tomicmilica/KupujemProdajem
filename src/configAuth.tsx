import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: localStorage.getItem('token')
    }
})