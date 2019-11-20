import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historieta } from 'src/app/modelos-de-datos/story-data-model';
import { ServicioFreeforAllService } from 'src/app/servicio-freefor-all.service';

@Component({
  selector: 'app-mis-cosas',
  templateUrl: './mis-cosas.component.html',
  styleUrls: ['./mis-cosas.component.css']
})
export class MisCosasComponent implements OnInit {
historietas:Historieta[];
  constructor(private freeForAllService:ServicioFreeforAllService) { }
  
  ngOnInit() {
    this.freeForAllService.getStories().subscribe(
      (data:Historieta[])=> this.historietas= data,
       ()=> console.log('Lista de historias cargada')
      
    );
  }


}
