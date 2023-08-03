import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { async } from 'rxjs'
import { AppState } from 'src/app/Store/app.state'
import { logOut } from '../../Auth/store/auth.actions'
import { getUser } from '../../Auth/store/auth.selectors'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar: boolean = false
  user = this.store.select(getUser)
  logoutMenu = [
    { name: 'Register', route: 'auth/register', show: false },
    { name: 'Login', route: 'auth/login', show: false, condi: 'user|async' }
  ]
  loginMenu = [{ name: 'Cart', route: 'cart', show: true, condi: 'user|async' }]

  constructor (private store: Store<AppState>) {}

  onLogout () {
    const res = confirm('Are you sure you want to log out?')
    if (res) this.store.dispatch(logOut())
  }
}
