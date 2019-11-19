import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioFreeforAllService } from 'src/app/servicio-freefor-all.service';
import { Historieta } from 'src/app/modelos-de-datos/story-data-model';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {
  historietas:Historieta[];
  historieta:Historieta;
  constructor(private route:ActivatedRoute,private freeForAllService:ServicioFreeforAllService) { 
 
  }
  mensaje={
    contenido: 'hola'
  }
  ngOnInit() { this.route.params.subscribe();
    this.freeForAllService.getStories().subscribe(
      (data:Historieta[])=> this.historietas= data,
       ()=> console.log('Lista de historias cargada')
      
    );
  }
  
  addHistorieta(historieta: Historieta){
    this.freeForAllService.addHistorieta(historieta).subscribe(historieta=> this.historietas.push(historieta));
  }

  onSubmit(){
    let historieta = new Historieta;
    historieta.content = this.mensaje.contenido;
    historieta.date = "fecha";
    historieta.reactions = undefined;
    this.freeForAllService.addHistorieta(historieta).subscribe();   
  }

}
