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
  successMsg: string;
  showMsg: boolean;

  constructor(private auth: AuthService, public user: UserService) {}

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
    this.user.error.next('');
    this.user.successMsg.subscribe(res => {
      this.successMsg = res;
      this.showMsg = true;
    });
  }

  closeMessage() {
    this.showMsg = false;
  }
}
