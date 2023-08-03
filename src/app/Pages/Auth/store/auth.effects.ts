import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs'
import { AuthService } from 'src/app/Services/auth.service'
import { AuthResponseData } from '../../Models/AuthResponseData'
import {
  autoLogin,
  loginStart,
  loginSuccess,
  logOut,
  signupStart,
  signupSuccess
} from './auth.actions'
import { Store } from '@ngrx/store'
import {
  setErrorMessage,
  setLoadingSpinner
} from 'src/app/Store/shared/shared.actions'
import { Router } from '@angular/router'
import { User } from '../../Models/user.model'

@Injectable()
export class AuthEffects {
  constructor (
    private actions$: Actions,
    private service: AuthService,
    private store: Store,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap(action => {
        return this.service.login(action.email, action.password).pipe(
          map((data: AuthResponseData | any) => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            const user = this.service.formatUser(data)
            this.service.setUserLocalStorage(user)
            return loginSuccess({ user, redirect: true })
          }),
          catchError(errResp => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            return of(
              setErrorMessage({
                message: this.service.getErrorMessage(errResp.error.message)
              })
            )
          })
        )
      })
    )
  })
  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(action => {
          if (action.redirect) this.router.navigate(['/'])
        })
      )
    },
    { dispatch: false }
  )

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLogin),
      mergeMap(() => {
        const data = this.service.getUserLocalStorage()
        if (data) return of(loginSuccess({ user: data, redirect: false }))
        return of()
      })
    )
  })

  logOut$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          this.service.setLocalStorageEmpty()
          this.router.navigate([''])
        })
      )
    },
    { dispatch: false }
  )

  signupStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap(action => {
        return this.service.signup(action.email, action.password).pipe(
          map(() => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            return signupSuccess()
          }),
          catchError(errResp => {
            this.store.dispatch(setLoadingSpinner({ status: false }))
            return of(
              setErrorMessage({
                message: this.service.getErrorMessage(errResp.error.message)
              })
            )
          })
        )
      })
    )
  })
  signupRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(signupSuccess),
        tap(() => {
          this.router.navigate(['auth/login'])
        })
      )
    },
    { dispatch: false }
  )
}
