import { AfterContentInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})
export class ProfileComponent implements OnDestroy, AfterContentInit {
  username: string;
  constructor(public user: UserService) {}

  ngAfterContentInit(): void {
    this.username = this.user.usernameRefresh();
  }

  ngOnDestroy(): void {
    this.username = undefined;
  }
}
