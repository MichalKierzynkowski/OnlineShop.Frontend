import { Injectable } from '@angular/core';
import { LoginCredentials } from './models/credentials';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(credentials: LoginCredentials): void {
    console.log(credentials);
  }
}
