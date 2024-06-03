import React from 'react'
import styled from 'styled-components'
import { IBookDetail } from '../../model/book.model';
import Button from '../common/Button';
import { FaHeart } from 'react-icons/fa';

interface Props {
  book: IBookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Props) {
  return (
    <LikeButtonStyle 
    onClick={onClick}
    size='medium' 
    schema={book.liked ? 'like' : 'normal'}>
        <FaHeart />
        {book.likes}
    </LikeButtonStyle>
  )
}

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;
  svg {
    color: inherit;
    path {
      color: inherit;
    }
  }
`

export default LikeButton