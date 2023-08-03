import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AppState } from 'src/app/Store/app.state'
import { setLoadingSpinner } from 'src/app/Store/shared/shared.actions'
import { signupStart } from '../store/auth.actions'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor (private store: Store<AppState>) {}

  signupForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    confirmPassword: new FormControl(null, [Validators.required])
  })

  showEmailErrors (): string {
    const emailForm = this.signupForm.get('email')
    if (emailForm?.touched && !emailForm.valid) {
      if (emailForm.getError('required')) return 'Email Id is required'
      if (emailForm.getError('email')) return 'Email Id is not valid'
    }
    return ''
  }

  showPasswordErrors (): string {
    const passwordForm = this.signupForm.get('password')
    if (passwordForm?.touched && !passwordForm.valid) {
      if (passwordForm.getError('required')) return 'Password is required'
      if (passwordForm.getError('minlength'))
        return 'Password length should be minimum 3 letters'
    }
    return ''
  }
  showConfirmPasswordErrors (): string {
    const passwordForm = this.signupForm.get('confirmPassword')
    if (passwordForm?.touched) {
      if (passwordForm.getError('required'))
        return 'Please confirm your password'
      if (passwordForm.value !== this.signupForm.get('password')?.value)
        return 'Password is not matching'
    }
    return ''
  }

  onSubmit () {
    if (this.signupForm.invalid) return
    const { email, password } = this.signupForm.value
    this.store.dispatch(setLoadingSpinner({ status: true }))
    this.store.dispatch(signupStart({ email, password }))
  }
}
