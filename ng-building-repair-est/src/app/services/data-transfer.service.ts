import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) {}
    private headers = new HttpHeaders({'Content-Type':'application/json'});
    url='http://localhost:5000'

  getUser(user:User): Observable<User>{
    return this.http.get<User>(this.url+'/login');
  }
}
