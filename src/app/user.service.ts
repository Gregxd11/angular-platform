import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, public router: Router) {}
  id: string;

  public isLoggedIn = new Subject();
  public error = new Subject<string>();

  // Successful response
  success(res: any) {
    this.id = res.localId;
    this.error.next('');
    localStorage.setItem('token', res.idToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    this.isLoggedIn.next(true);
    this.router.navigate([ 'posts' ]);
  }

  // Error response
  failed(err: any) {
    const regex = /_/g;
    const errorMessage: string = err.error.error.message;
    this.error.next(errorMessage.replace(regex, ' '));
  }

  register(user: {}) {
    this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALc31vx9tfrnE7pcanh9OG5ToEW22nACY',
        {
          ...user,
          returnSecureToken: true
        }
      )
      .subscribe(res => this.success(res), err => this.failed(err));
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
      .subscribe(res => this.success(res), err => this.failed(err));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    this.isLoggedIn.next(false);
    this.router.navigate([ '' ]);
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
