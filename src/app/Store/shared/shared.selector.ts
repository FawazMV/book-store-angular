import { createFeatureSelector, createSelector } from '@ngrx/store'
import { SharedState } from './shared.state'

export const SHARED_STATE_NAME = 'shared'

const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getSharedState, state => {
  return state.showLoading
})

// export const errorMessageSelector = createSelector(
//   (state: AppState) => state.shared,
//   (errorMessage: SharedState) => errorMessage.errorMessage
// )

export const errorMessageSelector = createSelector(
  getSharedState,
  state => state.errorMessage
)

export const modalMessageSelector = createSelector(
  getSharedState,
  state => state.modalMessage
)
