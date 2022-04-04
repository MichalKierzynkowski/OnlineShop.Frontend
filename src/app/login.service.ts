import { Injectable } from '@angular/core';
import { LoginCredentials } from './models/credentials';
import { Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<any> {
    console.log(credentials);

    const res = this.http.get<any>("http://localhost:5222/api/Authentication/not-secret");
    // const res = this.http.get<any>("https://reqbin.com/echo/get/json");


    // return of();
    res.subscribe(x => console.log(x))
    return res;
  }
}
