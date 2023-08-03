import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/Store/app.state'
import { setLoadingSpinner } from 'src/app/Store/shared/shared.actions'
import { CartModel } from '../../Models/Cart.model'
import { cartCheckout, cartCountChange, cartDelete } from '../store/cart.action'
import { getCartItems, getCartPrice } from '../store/cart.selectors'
@Component({
  selector: 'app-cart-manage',
  templateUrl: './cart-manage.component.html',
  styleUrls: ['./cart-manage.component.css']
})
export class CartManageComponent {
  cartItems$ = this.store.select(getCartItems)
  totalPrice$ = this.store.select(getCartPrice)
  constructor (private store: Store<AppState>) {}
  quantity: number = 0

  incrementQuantity (item: CartModel) {
    this.store.dispatch(cartCountChange({ item, count: 1 }))
  }
  decrementQuantity (item: CartModel) {
    this.store.dispatch(cartCountChange({ item, count: -1 }))
  }
  calculateTotal (v1: string, v2: number): number {
    const newArr = v1.split('$')
    return +newArr[1] * v2
  }
  removeItem (item: CartModel) {
    const res = confirm('Are you sure you want to remove this item?')
    if (res) this.store.dispatch(cartDelete({ item }))
  }
  checkout () {
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(cartCheckout())
  }
}
