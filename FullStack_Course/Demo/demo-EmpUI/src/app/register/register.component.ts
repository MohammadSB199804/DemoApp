import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../_Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alertFlag : boolean = this.registerService.isRegistered;


  constructor(private registerService:RegisterService) { 

  }


  model:any ={}

  ngOnInit(): void {
    this.onSignUp();
    }

  onSignUp(){
    this.registerService.signUp(this.model);
  }

}
