import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  backendResponse:string='';
  constructor(private loginService:LoginService,
            private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(email:any,pwd:any){
    let obj={
      email:email,
      password:pwd
    }

    this.loginService.login(obj)
    .subscribe((response:any)=>{
      console.log(response);
      if(response.msg=='Valid User'){
          sessionStorage.setItem("username",response.user.username)
          this.router.navigate(['/dashboard']);
      }else{
          this.backendResponse=response.msg;
      }
    })


  }

}
