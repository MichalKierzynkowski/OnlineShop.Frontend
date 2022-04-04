import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../models/credentials';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  credentials: LoginCredentials = {
    login: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  login() {
    alert('login');
  }
}
