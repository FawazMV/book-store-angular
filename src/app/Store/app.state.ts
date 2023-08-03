import { BooksReducers } from '../Pages/Home/store/books.reducers'
import { SHARED_STATE_NAME } from './shared/shared.selector'
import { SharedState } from './shared/shared.state'
import { SharedReducer } from './shared/shared.reducer'
import { AuthReducer } from '../Pages/Auth/store/auth.reducers'
import { AuthState } from '../Pages/Auth/store/auth.state'
import { BooksState } from '../Pages/Home/store/books.state'
import { CartState } from '../Pages/Cart/store/cart.state'
import { CartReducer } from '../Pages/Cart/store/cart.reducers'

export interface AppState {
  auth: AuthState
  [SHARED_STATE_NAME]: SharedState
  books: BooksState
  cart: CartState
}

export const appReducer = {
  books: BooksReducers,
  [SHARED_STATE_NAME]: SharedReducer,
  auth: AuthReducer,
  cart: CartReducer
}
