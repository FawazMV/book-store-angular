import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CartState } from '../Pages/Cart/store/cart.state'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = 'http://localhost:7777'
  constructor (private http: HttpClient) {}

  setCartinLocal (itmes: CartState) {
    localStorage.setItem('cart', JSON.stringify(itmes))
  }

  getCartinLocal () {
    const res = localStorage.getItem('cart')
    if (res) return JSON.parse(res)
  }

  checkout () {
    return this.http.get(this.url + '/checkout')
  }
}
