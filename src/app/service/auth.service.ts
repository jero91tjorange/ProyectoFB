import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map }  from  'rxjs/operators';//Para usar la funcion map y filter si se desea usar

@Injectable()
export class AuthService {
  url=environment.auth.apiBaseUrl;
  key=environment.auth.key;
  constructor(private http:HttpClient) { }

  public login(body:any): Observable<any>{
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(//con el pipe itereitor
      
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId)//idToken y localId es como se reciben los valores que llegan como respuesta del login
        return res;
      })
    );
  }

  public signUp(body:any){
    return this.http.post(`${this.url}/v1/accounts:signUp?key=${this.key}`,body);
  }

  private authSuccess(token:string, userId:string){
    localStorage.setItem('token', token);//guardar los dos datos en el localstorage
    localStorage.setItem('userId', userId);
  }
}
