export interface SharedState {
  showLoading: boolean
  errorMessage: string
  modalMessage: string
}

export const intilalState: SharedState = {
  showLoading: false,
  errorMessage: '',
  modalMessage: ''
}
