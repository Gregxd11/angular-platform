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
  public error = new Subject();

  // Successful response
  success(res: any) {
    this.id = res.localId;
    this.error = null;
    localStorage.setItem('token', res.idToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    this.isLoggedIn.next(true);
    this.router.navigate([ 'posts' ]);
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
      .subscribe(
        (res: any) => this.success(res),
        (err) => this.error.next(err.error.error.message)
      );
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
      .subscribe(
        (res: any) => this.success(res),
        (err) => {
          this.error.next(err.error.error.message);
        }
      );
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
