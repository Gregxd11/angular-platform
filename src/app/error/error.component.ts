import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: [ './error.component.scss' ]
})
export class ErrorComponent implements OnInit {
  @Output() erase = new EventEmitter<boolean>();
  @Input() error: string;
  constructor(public user: UserService) {}

  ngOnInit(): void {}

  delete() {
    this.erase.emit(true);
  }
}
