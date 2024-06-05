import React from 'react'
import { Location, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { CartStyle } from './Cart';
import Title from '../components/common/Title';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';
import { IDelivery, IOrderSheet } from '../model/order.model';
import InputText from '../components/common/InputText';
import { useForm } from 'react-hook-form';
import FindAddressButton from '../components/order/FindAddressButton';
import { postOrder } from '../api/order.api';
import { useAlert } from '../hooks/useAlert';

interface IDeliveryForm extends IDelivery {
  addressDetail: string;
}

function Order() {
  const navigate = useNavigate();
  const { showAlert, showConfirm } = useAlert();
  const location: Location<Omit<IOrderSheet, 'delivery'>> = useLocation();
  const orderDataFromCart = location.state;
  const { totalQuantity, totalPrice, title } = orderDataFromCart;

  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors }
  } = useForm<IDeliveryForm>();

  const handlePay = (data: IDeliveryForm) => {
    const orderData: IOrderSheet = {
      ...orderDataFromCart,
      delivery: {
        ...data,
        address: `${data.address} ${data.addressDetail}`,
      }
    }
    
    showConfirm('주문을 진행하시겠습니까?', () => {
      postOrder(orderData).then(() => {
        showAlert('주문이 처리되었습니다.');
        navigate('/orderlist');
      });
    });
  }

  return (
    <>
      <Title size='large'>주문서 작성</Title>
      <OrderStyle>
        <div className="content">
          <div className="order-info">
            <Title size='medium' color='text'>
              배송 정보
            </Title>
            <form className="delivery">
              <fieldset>
                <label>주소</label>
                <div className="input">
                  <InputText inputType='text' 
                  {...register('address', { required: true })}/>
                </div>
                <FindAddressButton 
                onCompleted={(address) => {
                  setValue('address', address)
                }}/>
              </fieldset>
              {errors.address && <p className="error-text">주소를 입력해주세요</p>}

              <fieldset>
                <label>상세 주소</label>
                <div className="input">
                  <InputText inputType='text' 
                  {...register('addressDetail', { required: true })}/>
                </div>
              </fieldset>
              {errors.addressDetail && <p className="error-text">상세 주소를 입력해주세요</p>}

              <fieldset>
                <label>수령인</label>
                <div className="input">
                  <InputText inputType='text' 
                  {...register('receiver', { required: true })}/>
                </div>
              </fieldset>
              {errors.receiver && <p className="error-text">수령인을 입력해주세요</p>}

              <fieldset>
                <label>전화번호</label>
                <div className="input">
                  <InputText inputType='text' 
                  {...register('contact', { required: true })}/>
                </div>
              </fieldset>
              {errors.contact && <p className="error-text">전화 번호를 입력해주세요</p>}
            </form>
          </div>
          <div className="order-info">
            <Title size='medium' color='text'>
              주문 상품
            </Title>
            <strong>{title} 등 총 {totalQuantity} 권</strong>
          </div>
        </div>
        <div className="summary">
          <CartSummary 
          totalQauntity={totalQuantity} 
          totalPrice={totalPrice}/>
          <Button size='large' schema='primary' onClick={handleSubmit(handlePay)}>
            결제하기
          </Button>
        </div>
      </OrderStyle>
    </>
  )
}

const OrderStyle = styled(CartStyle)`
  .order-info {
    h1 {
      padding: 0 0 24px 0;
    }

    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;
  }

  .delivery {
    fieldset {
      border: 0;
      margin: 0;
      padding: 0 0 12px 0;
      display: flex;
      justify-content: start;
      gap: 8px;

      label {
        width: 80px;
      }

      .input {
        flex: 1;
        input {
          width: 100%;
        }
      }
    }
    
    .error-text {
      color: red;
      margin: 0;
      padding: 0 0 12px 0;
      text-align: right;
    }
  }

`;

export default Order