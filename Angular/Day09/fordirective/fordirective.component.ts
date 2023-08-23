import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core Java','Spring Boot','HTML.CSS,JS','Angular 12','Docker','AWS','Kubernates','Jenkings','Data Analysis','Machine Learning'];
  
  arrobj=[
      {
        name:'Samasung',
        price:25000,
        qty:1
      },
      {
        name:'iPhone',
        price:100000,
        qty:1
      },
      {
        name:'One Plus',
        price:45000,
        qty:1
      },
      {
        name:'Motorolla',
        price:30000,
        qty:1
      },
      {
        name:'Realme',
        price:18000,
        qty:1
      }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
