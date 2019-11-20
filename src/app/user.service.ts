import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './modelos-de-datos/user-data-model';
import { Observable } from 'rxjs';
const httpOptions= {
  headers : new HttpHeaders (
    {
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:3000/user');
  }

  updateUser(user:User):Observable<User>{
    const url = `http://localhost:3000/user/${user.id}`;
    return this.http.put<User>(url,user,httpOptions);
  }
}
