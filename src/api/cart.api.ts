import { httpClient } from "./http";

interface IAddCartParams {
  bookId: number;
  quantity: number;
}

export const addCart = async (params: IAddCartParams) => {
  const response = await httpClient.post('/cart', params);
  
  return response.data;
}