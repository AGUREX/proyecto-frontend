import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  @Input() showAll:Boolean;

  users:User[];


  constructor(private userService:UserService) { }

  ngOnInit() { 
    this.userService.getUsers().subscribe(
    (data:User[])=> this.users= data,
     ()=> console.log('Lista de historias cargada')
    
  );
  }

}
