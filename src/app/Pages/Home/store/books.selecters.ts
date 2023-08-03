import { createSelector } from '@ngrx/store'
import { BooksModle } from '../../Models/Books.model'
import { BooksState } from './books.state'
// import { BooksState } from './books.state';
// const getPostsState = createFeatureSelector<BooksState>('books');

// export const getBooks = createSelector(getPostsState, (state) => {
//     return state.posts;
// });

export const bookSelector = createSelector(
  (state: BooksState) => state.books,
  (books: ReadonlyArray<BooksModle>) => books
)
