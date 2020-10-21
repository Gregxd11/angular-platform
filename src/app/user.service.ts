import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

// add user persistence
export class UserService {

  constructor(private http: HttpClient) { }
  id: string;
  register(user: {}): void {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=', {
      ...user,
      returnSecureToken: true
    }).subscribe((res: any) => this.id = res.localId);
  }
}
