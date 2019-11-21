import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';


@Component({
  selector: 'app-info-posible-colega',
  templateUrl: './info-posible-colega.component.html',
  styleUrls: ['./info-posible-colega.component.css']
})
export class InfoPosibleColegaComponent implements OnInit {
  @Input() userList:User[];
  @Output() user:EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }
 addFriend(user:User){
   this.user.emit(user);
 }
}
