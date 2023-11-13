import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private headers = new HttpHeaders({'Content-Type':'multipart/form-data','Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'})

  private apiEndpoint:String = 'https://fcfkih6dva.execute-api.us-east-1.amazonaws.com/'

  private httpOptions = {
    headers: this.headers
  };


  constructor(private http: HttpClient) { }

 

  helloWorld():Observable<Object>{
    return this.http.get<Object>(this.apiEndpoint+'login')}
   } 
