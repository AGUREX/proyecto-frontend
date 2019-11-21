import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-info-colega',
  templateUrl: './info-colega.component.html',
  styleUrls: ['./info-colega.component.css']
})
export class InfoColegaComponent implements OnInit {
  @Input() userList:User[];
  
  constructor() { }

  ngOnInit() { 
  }

}
