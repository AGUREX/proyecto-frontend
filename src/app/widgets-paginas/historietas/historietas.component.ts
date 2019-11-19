import { Component, OnInit } from '@angular/core';
import { Historieta } from 'src/app/modelos-de-datos/story-data-model';
import { ServicioFreeforAllService } from 'src/app/servicio-freefor-all.service';

@Component({
  selector: 'app-historietas',
  templateUrl: './historietas.component.html',
  styleUrls: ['./historietas.component.css']
})
export class HistorietasComponent implements OnInit {

  constructor(private freeForAllService:ServicioFreeforAllService) { }
historietas:Historieta[];
  ngOnInit() {
    this.freeForAllService.getStories().subscribe(
      (data:Historieta[])=> this.historietas= data,
       ()=> console.log('Lista de historias cargada')
      
    );
  }
  
  
  
}
