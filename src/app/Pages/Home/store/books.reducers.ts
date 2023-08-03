import { createReducer, on } from '@ngrx/store'
import { getBooksSuccess } from './books.actions'
import { InitialState } from './books.state'

export const BooksReducers = createReducer(
  InitialState,
  on(getBooksSuccess, (state, { books }) => [...books])
)
