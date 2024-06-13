import React from 'react'
import styled from 'styled-components'
import Title from '../components/common/Title'
import { useOrders } from '../hooks/useOrders';
import { formatDate, formatNumber } from '../utils/format';
import Button from '../components/common/Button';

function OrderList() {
  const { orders, selectedItemId, selectOrderItem } = useOrders();

  return (
    <>
    <Title size='large'>주문 내역</Title>
    <OrderListStyle>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>주문일자</th>
            <th>주소</th>
            <th>수령인</th>
            <th>전화번호</th>
            <th>대표상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <React.Fragment key={order.id}>
              <tr>
                <td data-title="id">{order.id}</td>
                <td data-title="주문일자">{formatDate(order.order.createdAt, 'YYYY.MM.DD')}</td>
                <td data-title="주소">{order.order.delivery.address}</td>
                <td data-title="수령인">{order.order.delivery.receiver}</td>
                <td data-title="전화번호">{order.order.delivery.contact}</td>
                <td data-title="대표상품명">{order.title}</td>
                <td data-title="수량">{order.totalQuantity}</td>
                <td data-title="금액">{formatNumber(order.totalPrice)} 원</td>
                <td data-title="">
                  <Button 
                  onClick={() => selectOrderItem(order.id)}
                  size='small' 
                  schema='normal'>자세히</Button>
                </td>
              </tr>
              {selectedItemId === order.id && (
                <tr>
                  <td colSpan={8}>
                    <ul className='detail'>
                      {
                        order.detail?.map((item) => (
                          <li key={item.bookId}>
                            <div>
                              <span>
                                {item.bookId}
                              </span>
                              <span>
                                {item.book.author}
                              </span>
                              <span>
                                {formatNumber(item.book.price)} 원
                              </span>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </td>
                  <td></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </OrderListStyle>
    </>
  )
}

const OrderListStyle = styled.div`
  padding: 0 0 24p 0;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
  }

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    text-align: center;
  }

  .detail {
    margin: 0;
    li {
      list-style: square;
      text-align: left;
      div {
        display: flex;
        padding: 8px 12px;
        gap: 8px;
      }
    }
  }

  @media screen AND (${({ theme }) => (theme.mediaQuery.mobile)}) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -10000px;
      left: -10000px;
    }

    tr {
      border-bottom: 1px solid #000;
    }
    
    td {
      border: none;
      border-bottom: 1px solid #ccc;
      position: relative;
      padding-left: 50%;
      white-space: normal;
      text-align: left;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }

    td:before {
      content: attr(data-title);
    }
  }
`;

export default OrderList