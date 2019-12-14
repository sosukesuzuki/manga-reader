import axios, { AxiosPromise } from 'axios';

const BASE_URL = 'https://wfc2-image-api-259809.appspot.com/api/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

export function get(path: string, params: any = {}): AxiosPromise {
    return axiosInstance.get(path, { params });
}
