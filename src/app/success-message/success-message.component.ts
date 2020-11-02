import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: [ './success-message.component.scss' ]
})
export class SuccessMessageComponent implements OnInit {
  @Output() erase = new EventEmitter<boolean>();
  @Input() successMsg: string;
  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.erase.emit(true);
  }
}
