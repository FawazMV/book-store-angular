import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { AuthResponseData } from '../Pages/Models/AuthResponseData'
import { User } from '../Pages/Models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://book-store-service-5zpd.onrender.com'
  constructor (private http: HttpClient) {}

  login (email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.url + '/login', {
      email,
      password
    })
  }
  signup (email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.url + '/register', {
      email,
      password
    })
  }

  formatUser (data: AuthResponseData) {
    return new User(data.token, data?.email)
  }

  getErrorMessage (message: string) {
    switch (message) {
      case 'Email Id not found':
        return 'Email Id not found'
      case 'Invalid credentials.':
        return 'Invalid credentials'
      case 'Duplicate found':
        return 'Email Id already registered'
      default:
        return 'Unknow error occurred. Please try again'
    }
  }

  setUserLocalStorage (user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUserLocalStorage (): User | null {
    const item = localStorage.getItem('user')
    if (item) {
      const data = JSON.parse(item)
      const user = new User(data.token, data?.email)
      return user
    }
    return null
  }

  setLocalStorageEmpty () {
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
  }
}
