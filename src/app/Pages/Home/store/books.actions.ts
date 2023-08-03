import { createAction, props } from '@ngrx/store'
import { BooksModle } from '../../Models/Books.model'

export const getBooks = createAction('[Books] Get books')
export const getBooksSuccess = createAction(
  '[Books] Get books success',
  //   (books: ReadonlyArray<BooksModle>) => ({books})
  props<{ books: ReadonlyArray<BooksModle> }>()
)
