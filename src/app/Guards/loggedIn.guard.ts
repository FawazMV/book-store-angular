import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { map } from 'rxjs'
import { Store } from '@ngrx/store'
import { AppState } from '../Store/app.state'
import { getUser } from '../Pages/Auth/store/auth.selectors'

@Injectable({
  providedIn: 'root'
})
export class LoggeInAuthGuard {
  constructor (private store: Store<AppState>, private router: Router) {}

  canActivate () {
    return this.store.select(getUser).pipe(
      map(user => {
        if (!user) {
          return true // User is authenticated, allow access to the route
        } else {
          return this.router.navigate(['/']) // User is not authenticated, redirect to login
        }
      })
    )
  }
}
