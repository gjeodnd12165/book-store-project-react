import { useEffect, useState } from "react"
import { ICart } from "../model/cart.model"
import { deleteCart, fetchCart } from "../api/cart.api";

export const useCart = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCarts(carts.filter((item) => item.id !== id));
    });
  }

  useEffect(() => {
    fetchCart().then((carts) => {
      setCarts(carts);
    })
  }, []);
  useEffect(() => {
    setIsEmpty(carts.length === 0);
  }, [carts]);


  return { carts, isEmpty, deleteCartItem };
}
