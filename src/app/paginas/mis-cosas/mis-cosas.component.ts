import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mis-cosas',
  templateUrl: './mis-cosas.component.html',
  styleUrls: ['./mis-cosas.component.css']
})
export class MisCosasComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { 

  }

  ngOnInit() { this.route.params.subscribe();
  }


}
