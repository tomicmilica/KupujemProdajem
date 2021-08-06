import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const authAxios = axios.create({
    baseURL: BASE_URL
})


export const refreshAccessToken = async (refreshToken: any) => {
    console.log("Refreshing token");
    console.log(refreshToken)
    const { data: { accessToken } } = await axios.post(BASE_URL + '/refresh', { token: refreshToken });
    localStorage.setItem('token', accessToken);

    return accessToken;
}

const interceptors_request = () => {
    authAxios.interceptors.request.use((config: any) => {
        console.log('request:', config);
        config.headers["Authorization"] = ("Bearer " + localStorage.getItem('token'));

        return config;
    }, error => {
        console.log({ error })
        return Promise.reject(error)
    })
}

const interceptors_response = () => {
    authAxios.interceptors.response.use((response: any) => {
        console.log('response:', response);
        return response
    }, async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            const access_token = await refreshAccessToken(localStorage.getItem('refreshToken'))
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            return authAxios(originalRequest);
        }
        return Promise.reject(error);

    })
}

export { interceptors_request, interceptors_response }