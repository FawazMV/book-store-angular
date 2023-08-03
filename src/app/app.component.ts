import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { AppState } from './Store/app.state'
import {
  errorMessageSelector,
  getLoading,
  modalMessageSelector
} from './Store/shared/shared.selector'
import { setErrorMessage, setModal } from './Store/shared/shared.actions'
import { autoLogin } from './Pages/Auth/store/auth.actions'
import { localCart } from './Pages/Cart/store/cart.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Book-Store'
  showLoading = this.store.select(getLoading)
  showModal = this.store.select(modalMessageSelector)
  errorMessage$ = this.store.select(errorMessageSelector)
  constructor (private store: Store<AppState>) {}

  ngOnInit () {
    this.store.dispatch(autoLogin())
    this.store.dispatch(localCart())
    this.showModal.subscribe(value => {
      if (value) {
        setTimeout(() => {
          this.store.dispatch(setModal({ message: '' }))
        }, 1500) // 2000 milliseconds = 2 seconds
      }
    })
  }
  removeError () {
    this.store.dispatch(setErrorMessage({ message: '' }))
  }
}
