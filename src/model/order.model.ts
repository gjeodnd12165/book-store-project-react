export interface IOrder {
  id: number;
  totalPrice: number;
  totalQuantity: number;
  totalTypes: number;
  title: string;
  order: {
    createdAt: string;
    delivery: IDelivery;
  }
}

export interface IOrderSheet {
  cartItemIds: number[];
  title: string;
  totalPrice: number;
  totalQuantity: number;
  totalTypes: number;
  delivery: IDelivery;
}

export interface IDelivery {
  address: string;
  receiver: string;
  contact: string;
}

// need to be flatten
export interface IOrderDetailItem {
  bookId: number;
  book: {
    author: string;
    price: number;
    title: string;
  };
  quantity: number;
  order: {
    userId: number;
  }
}

export interface IOrderListItem extends IOrder {
  detail?: IOrderDetailItem[];
}