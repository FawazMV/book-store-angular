import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { getUser } from '../../Auth/store/auth.selectors'
import { addToCart } from '../../Cart/store/cart.action'
@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() book!: any
  user$ = this.store.select(getUser)

  constructor (private store: Store) {}

  addToCart (book: any) {
    const item = {
      id: book.isbn13,
      price: book.price,
      title: book.title,
      image: book.image,
      count: 1
    }
    this.store.dispatch(addToCart({ item }))
  }
}
