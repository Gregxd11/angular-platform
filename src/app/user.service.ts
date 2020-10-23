import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

// add user persistence
export class UserService {

  constructor(private http: HttpClient) { }
  id: string;

  handleRequest(reqtype: string, user: {}){
    switch(reqtype){
      case 'REGISTER':
        this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALc31vx9tfrnE7pcanh9OG5ToEW22nACY', {
          ...user,
          returnSecureToken: true
        }).subscribe((res: any) => this.id = res.localId);
    }
  }
}
