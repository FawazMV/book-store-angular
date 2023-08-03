import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { BookService } from 'src/app/Services/book.service'
import { getBooks, getBooksSuccess } from './books.actions'
import { catchError, map, mergeMap, of } from 'rxjs'
import { setErrorMessage } from 'src/app/Store/shared/shared.actions'

@Injectable()
export class BooksEffects {
  constructor (private actions$: Actions, private service: BookService) {}
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks),
      mergeMap(() =>
        this.service.getBooks().pipe(
          map(response => {
            return getBooksSuccess({ books: response.books })
          }),
          catchError(() => {
            return of(
              setErrorMessage({
                message:
                  'Something went wrong, please try again after some time'
              })
            )
          })
        )
      )
    )
  )
}
