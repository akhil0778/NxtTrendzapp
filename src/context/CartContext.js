import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
})

export default CartContext
