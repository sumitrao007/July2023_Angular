import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson={
    id:0,
    fname:'',
    status:''
  }
  dataReceived:string='';
  constructor(private route:ActivatedRoute,
              private serviceNotification:NotificationService) { }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getNotification();
  }

  getNotification(){
      this.serviceNotification.notification
      .subscribe((data)=>{
          this.dataReceived=data;
      })
  }

  getDataFromUrl(){
    this.route.queryParamMap
    .subscribe((param:any)=>{
        this.myjson.id=+param.get("id");
        this.myjson.fname=param.get("fname");
        this.myjson.status=param.get("status");
    })
  }

  onSend(message:string){
      this.serviceNotification.sendMessage(message);
  }

}
