import { CartModel } from '../../Models/Cart.model'

export interface CartState {
  items: CartModel[]
  totalPrice: number
}

export const intilalState: CartState = {
  items: [],
  totalPrice: 0
}
