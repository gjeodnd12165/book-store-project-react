import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:1234' as const;
const DEFAULT_TIMEOUT = 30000 as const;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": 'application/json',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
    return response;
  },(error) => {
    return Promise.reject(error);
  })

  return axiosInstance;
}

export const httpClient = createClient();