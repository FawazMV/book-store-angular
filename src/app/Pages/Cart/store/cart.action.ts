import { props, createAction } from '@ngrx/store'
import { CartModel } from '../../Models/Cart.model'
import { CartState } from './cart.state'

export const addToCart = createAction(
  '[cart state] addto cart',
  props<{ item: CartModel }>()
)

export const addToCartSuccess = createAction('[cart state] add to cart success')

export const cartCountChange = createAction(
  '[cart state] count Increment',
  props<{ item: CartModel; count: number }>()
)

export const cartDelete = createAction(
  '[cart state] count delete',
  props<{ item: CartModel }>()
)

export const localCart = createAction('[cart state] take localstorage cart ')

export const localCartSuccess = createAction(
  '[cart state] take localstorage cart success',
  props<CartState>()
)
export const cartCheckout = createAction('[cart state] cart checkout')
