import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Historieta } from './modelos-de-datos/story-data-model';
import { Observable } from 'rxjs';


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
export class ServicioFreeforAllService {

  constructor(private http:HttpClient) { 

  }
  getStories(){
    return this.http.get('http://localhost:3000/storyDataModel');
  }
  addHistorieta(historieta:Historieta):Observable<Historieta>{
    return this.http.post<Historieta>('http://localhost:3000/storyDataModel',historieta,httpOptions)
  }
}
