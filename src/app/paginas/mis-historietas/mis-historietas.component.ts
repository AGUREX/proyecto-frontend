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
  
  constructor(private route:ActivatedRoute,private freeForAllService:ServicioFreeforAllService) { }

  ngOnInit() { this.route.params.subscribe(); }
  
  }
