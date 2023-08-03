import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CartState } from './cart.state'

export const CART_STATE_NAME = 'cart'

const getCartState = createFeatureSelector<CartState>(CART_STATE_NAME)

export const getCartItems = createSelector(getCartState, state => {
  return state.items
})

export const getCartPrice = createSelector(getCartState, state => {
  return state.totalPrice
})

export const getCartStates = createSelector(getCartState, state => {
  return state
})
