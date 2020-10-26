import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(public user: UserService, public auth: AuthService) {}

  ngOnInit(): void {
    this.user.isLoggedIn.subscribe((res: boolean) => (this.isAuthenticated = res));
  }
}
