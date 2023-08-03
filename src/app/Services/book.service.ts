import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'https://api.itbook.store/'
  constructor (private http: HttpClient) {}

  getBooks (): Observable<any> {
    return this.http.get(this.url + '1.0/new')
    // .pipe(
    //   map((data: any) => {
    //     const posts: any[] = [];
    //     for (let key in data) {
    //       posts.push({ ...data[key], id: key });
    //     }
    //     return posts;
    //   })
    // );
  }
}
