import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info-colega',
  templateUrl: './info-colega.component.html',
  styleUrls: ['./info-colega.component.css']
})
export class InfoColegaComponent implements OnInit {
  @Input() userList:User[];
  @Output() user:EventEmitter<User> = new EventEmitter<User>();
  
  constructor(private userservice:UserService) { }

  ngOnInit() { 
  }
 deleteUser(user:User){
    this.user.emit(user);
    user.seleccionado = false;
    this.userservice.updateUser(user).subscribe();
  }
}
