import { createReducer, on } from '@ngrx/store'
import {
  addToCart,
  cartCountChange,
  cartDelete,
  localCartSuccess
} from './cart.action'
import { intilalState } from './cart.state'

export const CartReducer = createReducer(
  intilalState,
  on(addToCart, (state, action) => {
    let item = { ...action.item }
    const dupe = state.items.find(x => x.id === item.id)
    const newArr = state.items.filter(x => x.id !== item.id)
    if (dupe) {
      item.count = dupe.count + 1
    }
    let price = item.price
    const arr = price.split('$')

    return {
      ...state,
      items: [...newArr, item],
      totalPrice: state.totalPrice + +arr[1]
    }
  }),
  on(cartCountChange, (state, action) => {
    const index = state.items.findIndex(x => x.id == action.item.id)
    if (index !== -1) {
      const updatedItems = [...state.items]
      const item = { ...updatedItems[index] }
      item.count = item.count + action.count
      if (item.count <= 0) return { ...state }
      updatedItems[index] = item

      let price = item.price
      const arr = price.split('$')

      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice + +arr[1] * action.count
      }
    }
    return { ...state }
  }),
  on(cartDelete, (state, action) => {
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.item.id),
      totalPrice:
        state.totalPrice - action.item.count * +action.item.price.split('$')[1]
    }
  }),
  on(localCartSuccess, (state, action) => {
    return {
      ...state,
      items: action.items,
      totalPrice: action.totalPrice
    }
  })
)
