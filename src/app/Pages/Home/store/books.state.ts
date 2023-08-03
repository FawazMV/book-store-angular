import { BooksModle } from '../../Models/Books.model'

export interface BooksState {
  books: BooksModle[]
}

export const InitialState: Array<BooksModle> = []
