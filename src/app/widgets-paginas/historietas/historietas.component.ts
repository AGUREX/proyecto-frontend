import { Component, OnInit } from '@angular/core';
import { Historieta } from 'src/app/modelos-de-datos/story-data-model';
import { ServicioFreeforAllService } from 'src/app/servicio-freefor-all.service';

@Component({
  selector: 'app-historietas',
  templateUrl: './historietas.component.html',
  styleUrls: ['./historietas.component.css']
})
export class HistorietasComponent implements OnInit {
  historietas:Historieta[];
  historieta:Historieta;
  mensaje={
    contenido: 'hola'
  }
  
    constructor(private freeForAllService:ServicioFreeforAllService) { }
  
    ngOnInit() {
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
      historieta.author= "Agurex";
      historieta.reactions = undefined;

      this.freeForAllService.addHistorieta(historieta).subscribe(
      () => {
          return this.historietas.push(historieta)
        });   
    }
    
  }


