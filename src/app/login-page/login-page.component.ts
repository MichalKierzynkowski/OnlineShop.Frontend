import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../models/credentials';
import {LoginService} from "../login.service";

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

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login() {
    const b = this.loginService.login(this.credentials);
    console.log(b.pipe());
  }
}
