import { Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoginService } from '../_Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginEventStatus = new EventEmitter<{status : boolean , name : string}>();

  // @Input()  logOutStatus : any;

  loginStatus : boolean = false ;
  model : any = {};
  loader:boolean =false;




  constructor(private loginService :LoginService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.loader = true;
    this.loginService.onLogin(this.model);
    setTimeout(()=>{  
      console.log('From Login ' +  this.loginService.isLoggedIn);
      this.loginStatus =this.loginService.isLoggedIn;
      console.log('loginStatus ' + this.loginStatus);
      this.loader = false;
      console.log(this.model);
      let loginModel = {status:this.loginStatus , name : this.model.userName};
      console.log('Login Model '+loginModel.name + ' '+ loginModel.status);
      this.loginEventStatus.emit(loginModel);
    },2000);

  
  }

}
