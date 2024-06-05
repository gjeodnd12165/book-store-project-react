import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Title from '../components/common/Title'
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';
import CartEmpty from '../components/cart/CartEmpty';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import { useAlert } from '../hooks/useAlert';
import { IOrderSheet } from '../model/order.model';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const { carts, isEmpty, deleteCartItem } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const { showAlert, showConfirm } = useAlert();

  const handleCheckItem = (id: number) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);      
    }
  }

  const handleDeleteItem = (id: number) => {
    deleteCartItem(id);
  }

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.quantity;
      }
      return acc;
    }, 0)
  }, [carts, checkedItems]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return acc + cart.price;
      }
      return acc;
    }, 0)
  }, [carts, checkedItems]);

  const totalTypes = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItems.includes(cart.id)) {
        return [...acc, cart.id];
      }
      return acc;
    }, new Array<number>).length;
  }, [carts, checkedItems]);

  const handleOrder = () => {
    if (checkedItems.length === 0) {
      showAlert('주문할 상품을 선택해 주세요');
      return;
    }

    const orderData: Omit<IOrderSheet, 'delivery'> = {
      cartItemIds: checkedItems,
      totalTypes: totalTypes,
      totalPrice: totalPrice,
      totalQuantity: totalQuantity,
      title: carts[0].title
    }

    showConfirm('주문하시겠습니까?', () => {
      navigate('/order', { state: orderData });
    })
  }

  return (
    <>
      <Title size='large'>장바구니</Title>
        {!isEmpty && (
          <CartStyle>
          <div className="content">
          {
            carts.map((item) => (
              <CartItem 
              key={item.id} 
              cart={item} 
              checkedItems={checkedItems} 
              onCheck={handleCheckItem}
              onDelete={handleDeleteItem} />
            ))
          }
          </div>
          <div className="summary">
            <CartSummary
            totalQauntity={totalQuantity}
            totalPrice={totalPrice} />
            <Button size='large' schema='primary' onClick={handleOrder}>주문하기</Button>
          </div>
          </CartStyle>)
        }
      {isEmpty && <CartEmpty />}
    </>
  )
}

export const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default Cart