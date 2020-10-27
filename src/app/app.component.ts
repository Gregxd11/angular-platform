import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  title = 'platform';
  isAuthenticated: boolean;

  constructor(private auth: AuthService, public user: UserService) {}

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
  }
}
