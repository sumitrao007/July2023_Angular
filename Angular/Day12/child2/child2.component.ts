import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() ChildStrEvent=new EventEmitter();

 @Output() ChildArrEvent=new EventEmitter();

 @Output() ChildMsgEvent=new EventEmitter();

  strData:string='Data to be send from Child to Parent....';

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

@Output() ChildDateEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.ChildStrEvent.emit(this.strData);
    this.ChildArrEvent.emit(this.arrobj)
  }

  onSendMsg(inputmsg:string){
      this.ChildMsgEvent.emit(inputmsg);
  }

  onSendDate(inputdate:string){
    this.ChildDateEvent.emit(inputdate)
  }

}
