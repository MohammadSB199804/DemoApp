import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-EmpUI';
  users: any;
  headerChoice : string = 'register';
  loginStatus : boolean = false;
  loginName : string = '';
  headerLogOutStatus : boolean = false;
  // @Output() headerAppStatusLogOut = new EventEmitter<boolean>();

  constructor(private http:HttpClient){ // Angular comes with lifecycle events , the lifecycle event that takes place after the constructor known as initilization 

  }
  
  ngOnInit() {
    // this.getUsers()
  }

  // getUsers(){
  //   this.http.get('https://localhost:5001/api/Employees').subscribe(response => {   // we have an ok param. and error param. as functions in subscriber method.
  //       this.users = response;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  onNavigate(hChoice:string){
    this.headerChoice = hChoice;
  }

  onLoginStatus(loginModel:{status : boolean , name : string}){
    this.loginStatus =loginModel.status;
    this.loginName = loginModel.name;
  } 

  logOutStatus(logOutStatus:boolean){
    // this.headerLogOutStatus = logOutStatus;
    // this.headerAppStatusLogOut.emit(this.headerLogOutStatus);
  }
}
