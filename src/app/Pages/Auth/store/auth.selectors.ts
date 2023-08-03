import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthState } from './auth.state'

export const AUTH_STATE_NAME = 'auth'

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME)

export const getUser = createSelector(getAuthState, state => {
  return state.user
})

export const getToken = createSelector(getAuthState, state => state.user?.token)
// export const errorMessageSelector = createSelector(
//   (state: AppState) => state.shared,
//   (errorMessage: SharedState) => errorMessage.errorMessage
// )
