import axios from "axios";
import { authAxios } from '../configAuth'
const BASE_URL = process.env.REACT_APP_BASE_URL;

interface UserResponse {
    username: string;
}

export const getUser = async () => {
    const response = await authAxios.get<UserResponse>(`/user`);

    return response;
}