export interface IOrder {
  id: number;
  created_at: string;
  address: string;
  receiver: string;
  contact: string;
  title: string;
  total_types: number;
  total_price: number;
  total_quantity: number;
}