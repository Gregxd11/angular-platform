import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  // username: string;

  constructor(public user: UserService, public auth: AuthService) {}

  ngOnInit(): void {
    this.user.isLoggedIn.subscribe((res: boolean) => {
      this.isAuthenticated = res;
      // this.username = this.user.username;
    });
  }
}
