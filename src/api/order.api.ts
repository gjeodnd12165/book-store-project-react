import { IOrder, IOrderDetailItem, IOrderSheet } from "../model/order.model";
import { requestHandler } from "./http";

export const postOrder = async (orderData: IOrderSheet) => {
  return await requestHandler<IOrderSheet>('post', '/orders', orderData);
}

export const fetchOrders = async () => {
  return await requestHandler<IOrder[]>('get', '/orders');
}

export const fetchOrder = async (orderId: number) => {
  return await requestHandler<IOrderDetailItem[]>('get', `/orders/${orderId}`);
}