import { IOrder, IOrderDetailItem, IOrderSheet } from "../model/order.model";
import { httpClient } from "./http";

export const postOrder = async (orderData: IOrderSheet) => {
  const response = await httpClient.post<IOrderSheet>('/orders', orderData);
  return response.data;
}

export const fetchOrders = async () => {
  const response = await httpClient.get<IOrder[]>('/orders');
  return response.data;
}

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get<IOrderDetailItem[]>(`/orders/${orderId}`);
  return response.data;
}