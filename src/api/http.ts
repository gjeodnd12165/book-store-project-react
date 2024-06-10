import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
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

// 공통 요청 부분

type TRequestMethod = 'get' | 'post' | 'put' | 'delete'

export const requestHandler = async <T = never>(
  method: TRequestMethod,
  url: string,
  payload?: T,
) => {
  let response: AxiosResponse<T>;

  switch (method) {
    case 'get':
      response = await httpClient.get(url);
      break;
    case 'post':
      response = await httpClient.post(url, payload);
      break;
    case 'put':
      response = await httpClient.put(url, payload);
      break;
    case 'delete':
      response = await httpClient.delete(url);
      break;
    default:
      throw new Error(`Unsupported method: ${method}`);
  }

  return response.data;
}