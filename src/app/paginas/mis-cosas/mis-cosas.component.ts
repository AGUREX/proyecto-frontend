import { Component, OnInit } from '@angular/core';
import { Historieta } from 'src/app/modelos-de-datos/story-data-model';
import { ServicioFreeforAllService } from 'src/app/servicio-freefor-all.service';
import { User } from 'src/app/modelos-de-datos/user-data-model';
import { LoginService } from 'src/app/login.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mis-cosas',
  templateUrl: './mis-cosas.component.html',
  styleUrls: ['./mis-cosas.component.css']
})
export class MisCosasComponent implements OnInit {
  
historietas:Historieta[];
login:User;
  constructor(private freeForAllService:ServicioFreeforAllService,private userLoginService:LoginService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.userLoginService.getUserLogged().subscribe(
      (user:User)=> this.login= user,
       ()=> console.log('Login cargado')
    );
    this.freeForAllService.getStories().subscribe(
      (data:Historieta[])=> this.historietas= data,
       ()=> console.log('Lista de historias cargada')
    );
    
  }


}
