import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strData:string='Data to be send from parent....'

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }
  sendDate!:any;

  childStrData:string='';
  childArrData:any[]=[];
  childMsgData:string='';

  @Output() parentDateEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend(mydate:any){
    this.sendDate=mydate;
  }

  onDataReceived(data:string){
    this.parentDateEvent.emit(data);
  }

}
