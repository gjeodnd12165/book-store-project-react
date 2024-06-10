import React, { useState } from 'react'
import styled from 'styled-components'
import InputText from '../common/InputText';
import Button from '../common/Button';
import { IBookDetail } from '@/model/book.model';
import { Link } from 'react-router-dom';
import { useBook } from '@/hooks/useBook';

interface Props {
  book: IBookDetail
}

function AddToCart({ book }: Props) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, cartAdded } = useBook(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }

  return (
    <AddToCartStyle $added={cartAdded}>
      <div>
        <InputText 
        onChange={handleChange}
        inputType='number' 
        value={quantity} />
        <Button 
        onClick={handleIncrease}
        size='medium' 
        schema='normal'>
          +
        </Button>
        <Button 
        onClick={handleDecrease}
        size='medium' 
        schema='normal'>
          -
        </Button>
      </div>
      <Button 
      onClick={addToCart(quantity)}
      size='medium' 
      schema='primary'>
        장바구니에 담기
      </Button>
      <div className="added">
        <p>장바구니에 추가 되었습니다.</p>
        <Link to='/cart'>장바구니로 이동</Link>
      </div>
    </AddToCartStyle>
  )
}

interface AddToCartStyleProps {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .added {
    position: absolute;
    right: 0;
    top: 90px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => $added ? '1' : '0'};
    transition: opacity 0.5s ease;

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

export default AddToCart