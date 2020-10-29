import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent implements OnInit {
  @Input() post;
  @Output() close = new EventEmitter<boolean>();
  @Output() postId = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.emit(false);
  }

  addToGroup(id: string) {
    this.postId.emit(id);
  }
}
