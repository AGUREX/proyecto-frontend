import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { 

  }
  ngOnInit() { this.route.params.subscribe();
  }
}
