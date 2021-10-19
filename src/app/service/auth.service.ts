import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  url=environment.auth.apiBaseUrl;
  key=environment.auth.key;
  constructor(private http:HttpClient) { }

  public login(body:any): Observable<any>{
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body)
  }

  public signUp(body:any){
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.key}`,body);
  }
}
