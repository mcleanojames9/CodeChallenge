import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor(private http: HttpClient) {}
    private headers = new HttpHeaders({'Content-Type':'application/json'});
    url='http://localhost:5000'
}
