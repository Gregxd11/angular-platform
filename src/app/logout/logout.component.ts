import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: [ './logout.component.scss' ]
})
export class LogoutComponent implements OnInit {
  constructor(public user: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user.handleRequest('LOGOUT');
    this.router.navigate([ '' ]);
  }
}
