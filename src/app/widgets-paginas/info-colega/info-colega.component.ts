import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info-colega',
  templateUrl: './info-colega.component.html',
  styleUrls: ['./info-colega.component.css']
})
export class InfoColegaComponent implements OnInit {
userList:User[];
  constructor(private userService:UserService) { }

  ngOnInit() { this.userService.getUsers().subscribe(
    (data:User[])=> this.userList= data,
     ()=> console.log('Lista de usuarios cargada')
  );

  }

}
