import React from 'react'
import Empty from '../common/Empty'
import { FaShoppingCart } from 'react-icons/fa'

function CartEmpty() {
  return (
    <Empty 
    icon={<FaShoppingCart />}
    title='장바구니가 비었습니다'
    description={<>장바구니를 채워보세요</>} />
  )
}

export default CartEmpty