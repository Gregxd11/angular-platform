import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  id: string;
  error: string;

  public isLoggedIn = new Subject();

  register(user: {}) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALc31vx9tfrnE7pcanh9OG5ToEW22nACY',
        {
          ...user,
          returnSecureToken: true
        }
      )
      .subscribe((res: any) => {
        this.id = res.localId;
        localStorage.setItem('token', res.idToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this.isLoggedIn.next(true);
      }, (err) => (this.error = err));
  }

  login(user: {}) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALc31vx9tfrnE7pcanh9OG5ToEW22nACY',
        {
          ...user,
          returnSecureToken: true
        }
      )
      .subscribe((res: any) => {
        this.id = res.localId;
        localStorage.setItem('token', res.idToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        this.isLoggedIn.next(true);
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isLoggedIn.next(false);
  }

  handleRequest(reqtype: string, user: {} = null) {
    switch (reqtype) {
      case 'REGISTER':
        return this.register(user);
      case 'LOGIN':
        return this.login(user);
      case 'LOGOUT':
        return this.logout();
    }
  }
}
