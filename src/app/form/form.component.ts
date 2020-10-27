import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {
  @Input() buttonText: string;
  @Input() reqType: string;
  showError: boolean;
  error: string;

  form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(5))
  });

  constructor(private user: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user.error.subscribe((res: string) => {
      this.error = res;
      this.showError = true;
    });
  }

  onSubmit(): void {
    this.user.handleRequest(this.reqType, this.form.value);
  }

  deleteErr(event: boolean) {
    this.showError = !event;
    this.user.error = null;
  }
}
