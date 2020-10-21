import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() buttonText: string;
  @Input() url: string;

  form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(5))
  });


  constructor(private user: UserService, public router: Router) { }

  ngOnInit(): void {
    console.log(this.user.id);
  }

  onSubmit(): void {
    this.user.register(this.form.value);
    this.router.navigate(['posts']);
  }

}
