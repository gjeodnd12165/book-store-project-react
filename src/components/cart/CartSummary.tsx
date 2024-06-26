import React from 'react'
import { styled } from 'styled-components'
import { formatNumber } from '@/utils/format';

interface Props {
  totalQauntity: number;
  totalPrice: number;
}

function CartSummary({ totalQauntity, totalPrice }: Props) {
  return (
    <CartSummaryStyle>
      <h1>주문 요약</h1>
      <dl>
        <dt>총 수량</dt>
        <dd>{totalQauntity} 개</dd>
      </dl>
      <dl>
        <dt>총 금액</dt>
        <dd>{formatNumber(totalPrice)} 원</dd>
      </dl>
    </CartSummaryStyle>
  )
}

const CartSummaryStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;
  width: 240px;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  dl {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    dd {
      font-weight: 760;
    }
  }

  @media screen AND ${({ theme }) => (theme.mediaQuery.mobile)} {
    width: 100%;
  }
`

export default CartSummary