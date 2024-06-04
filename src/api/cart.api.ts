import { ICart } from "../model/cart.model";
import { httpClient } from "./http";

interface IAddCartParams {
  bookId: number;
  quantity: number;
}

export const addCart = async (params: IAddCartParams) => {
  const response = await httpClient.post('/cart', params);
  
  return response.data;
}

export const fetchCart = async () => {
  const response = await httpClient.get<ICart[]>('/cart');

  return response.data;
}

export const deleteCart = async (cartId: number) => {
  const response = await httpClient.delete(`/cart/${cartId}`);

  return response.data;
}