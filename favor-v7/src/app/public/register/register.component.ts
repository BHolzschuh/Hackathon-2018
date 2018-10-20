import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

export interface User {
  first: string;
  last: string;
  phone: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    phone: ['', Validators.compose([
      Validators.pattern('^(0|[1-9][0-9]*)$'),
      Validators.minLength(10),
      Validators.maxLength(11),
      Validators.required,
    ])],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email,
    ])],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
    ])],
  });

  message;
  user = {} as User;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  register(value) {
    this.authService.register(value)
      .then(res => {
        this.message = res;
      });
  }

  goBack() {
    this.router.navigateByUrl('public/login');
  }

}
