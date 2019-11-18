import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
user:User={id:1,
  name:'string',
  surname:'string',
  birthDate:'string',
  startDate:'string',
  user:'string',
  pass:'string'};

  constructor() { }

  ngOnInit() {
  }

}
