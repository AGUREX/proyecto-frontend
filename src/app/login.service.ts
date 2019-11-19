import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions= {
  headers : new HttpHeaders (
    {
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
    )
  };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUserLogged(){
    return this.http.get('http://localhost:3000/user/1')
  }
}

