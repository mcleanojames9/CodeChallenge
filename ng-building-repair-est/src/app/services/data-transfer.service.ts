import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Estimate } from '../models/estimate';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) {}
    private headers = new HttpHeaders({'Content-Type':'application/json'});
    url='http://127.0.0.1:5000'

  getUser(user:User) {
    return this.http.post(this.url+'/app_user', user, { observe: 'response' });
  }
  saveEstimate(estimate: Estimate){
    console.log("Saving estimate...")
    return this.http.post<Estimate>(this.url+'/estimate', estimate, { headers: this.headers });
  }
}
