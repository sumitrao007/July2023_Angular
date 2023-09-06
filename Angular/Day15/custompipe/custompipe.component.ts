import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum magni ducimus eum ut soluta ad? Facere repellat cupiditate praesentium corrupti pariatur quos fugit. At dolorem repudiandae perspiciatis sequi officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum magni ducimus eum ut soluta ad? Facere repellat cupiditate praesentium corrupti pariatur quos fugit. At dolorem repudiandae perspiciatis sequi officiis.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
