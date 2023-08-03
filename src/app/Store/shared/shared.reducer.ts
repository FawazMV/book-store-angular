import { createReducer, on } from '@ngrx/store'
import { setErrorMessage, setLoadingSpinner, setModal } from './shared.actions'
import { intilalState } from './shared.state'
// const _sharedReducer = createReducer(
//   intilalState,
//   on(setLoadingSpinner, (state, action) => {
//     return {
//       ...state,
//       showLoading: action.status
//     }
//   })
// )

// export function SharedReducer (state: any, action: any) {
//   return _sharedReducer(state, action)
// }

export const SharedReducer = createReducer(
  intilalState,
  on(setLoadingSpinner, (state, action) => {
    return { ...state, showLoading: action.status }
  }),
  on(setErrorMessage, (state, action) => {
    return { ...state, errorMessage: action.message }
  }),
  on(setModal, (state, action) => {
    return { ...state, modalMessage: action.message }
  })
)
