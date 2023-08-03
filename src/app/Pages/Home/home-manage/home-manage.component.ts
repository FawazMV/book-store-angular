import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { getBooks } from '../store/books.actions'
import { bookSelector } from '../store/books.selecters'
import { BooksState } from '../store/books.state'
@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent implements OnInit {
  books$ = this.store.select(bookSelector)
  booksLength: number = 0
  private booksSubscription!: Subscription

  constructor (private store: Store<BooksState>) {}

  ngOnInit (): void {
    this.getBooks()
    this.booksSubscription = this.books$.subscribe(books => {
      this.booksLength = books.length
    })
  }

  ngOnDestroy (): void {
    this.booksSubscription.unsubscribe()
  }
  getBooks () {
    this.store.dispatch(getBooks())
  }
}
