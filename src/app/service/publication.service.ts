import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PublicationService {

  url=environment.app.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    return this.http.get(`${this.url}/publication.json`);
  }

  create(body:any): Observable<any>{
    return this.http.post(`${this.url}/publication.json`, body);
  }

  update(id: string, body:any): Observable<any>{
    return this.http.put(`${this.url}/${id}.json`, body);
  }

  patch(id: string, body:any): Observable<any>{
    return this.http.patch(`${this.url}/publication/${id}.json`, body);
  }

  delete(id: string): Observable<any>{
    return this.http.delete(`${this.url}/publication/${id}.json`);
  }
}
