import axios, { AxiosRequestConfig } from 'axios';
import { getToken, removeToken } from '../store/authStore';

const BASE_URL = 'http://localhost:1234' as const;
const DEFAULT_TIMEOUT = 30000 as const;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": 'application/json',
      "Authorization": getToken() ?? ""
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
    return response;
  },(error) => {
    // 로그인 토큰 만료
    if (error.response.status === 401) {
      removeToken();
      window.location.href = '/users/signin';
      return;
    }
    return Promise.reject(error);
  })

  return axiosInstance;
}

export const httpClient = createClient();