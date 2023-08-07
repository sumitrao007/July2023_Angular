import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  num:number=4;
  imgUrl:string='../../assets/bg9.png';
  constructor() { }

  ngOnInit(): void {
  }

  getName(){
    this.name='Spruha Raokhande'
    return this.name;
  }
  

}
