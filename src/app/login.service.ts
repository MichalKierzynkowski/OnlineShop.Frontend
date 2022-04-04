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
    const response = this.http.post<any>("http://localhost:5222/api/Authentication", credentials);

    response.subscribe(x => console.log(x))
    return response;
  }
}
