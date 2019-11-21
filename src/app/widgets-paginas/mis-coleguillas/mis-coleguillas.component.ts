import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-mis-coleguillas',
  templateUrl: './mis-coleguillas.component.html',
  styleUrls: ['./mis-coleguillas.component.css']
})
export class MisColeguillasComponent implements OnInit {
user:User;
userList:User[];
constructor(private userService:UserService) { }

ngOnInit() { this.userService.getUsers().subscribe(
  (data:User[])=> this.userList= data,
   ()=> console.log('Lista de usuarios cargada')
);

}
  
  selecciona(user:User){
    
    if(!user.seleccionado){
    user.seleccionado = true}
    else {user.seleccionado = false}
    this.userService.updateUser(user).subscribe();
  }

  addFriend(user:User) {
    user.friend = true;
    this.userService.updateUser(user).subscribe();
  }

}
