import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

function Order() {
  const location = useLocation();
  const orderData = location.state;

  return (
    <OrderStyle>
      Order
    </OrderStyle>
  )
}

const OrderStyle = styled.div`
  
`;

export default Order