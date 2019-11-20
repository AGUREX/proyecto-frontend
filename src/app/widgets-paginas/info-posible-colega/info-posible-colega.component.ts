import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/modelos-de-datos/user-data-model';

@Component({
  selector: 'app-info-posible-colega',
  templateUrl: './info-posible-colega.component.html',
  styleUrls: ['./info-posible-colega.component.css']
})
export class InfoPosibleColegaComponent implements OnInit {
  user:User;
  userList:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {this.userService.getUsers().subscribe(
    (data:User[])=> this.userList= data,
     ()=> console.log('Lista de usuarios cargada')
  );
  }
  
  addFriend(user:User) {
    user.friend = true;
    this.userService.updateUser(user).subscribe();

  }
}
