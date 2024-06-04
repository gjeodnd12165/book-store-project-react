import React from 'react'
import { FaRegCircle } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';
import styled from 'styled-components'

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconButton({ isChecked, onCheck }: Props) {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
      {
        isChecked ?
        <FaRegCircleCheck /> :
        <FaRegCircle />
      }
    </CheckIconButtonStyle>
  )
}

const CheckIconButtonStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default CheckIconButton