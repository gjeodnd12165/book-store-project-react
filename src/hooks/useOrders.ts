import { useEffect, useState } from "react"
import { IOrderListItem } from "../model/order.model";
import { fetchOrder, fetchOrders } from "../api/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<IOrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((os) => {
      setOrders(os);
    });
  }, []);

  const selectOrderItem = (orderId: number) => {
    setSelectedItemId(selectedItemId === orderId ? null : orderId);
    
    if (orders.find((item) => item.id === orderId)?.detail) return;
    
    fetchOrder(orderId).then((orderDetail) => {
      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: orderDetail,
            }
          } else {
            return item
          }
        })
      )
    });
  }

  return { orders, selectedItemId, selectOrderItem };
}