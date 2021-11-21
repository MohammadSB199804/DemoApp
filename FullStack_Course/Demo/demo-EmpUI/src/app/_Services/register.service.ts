import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  Employees : any = {}
  isRegistered : boolean = false;

  constructor(private http:HttpClient) {

   }

   signUp(model:any){
      this.http.post('https://localhost:5001/api/Account/register', model).subscribe(response => {   // we have an ok param. and error param. as functions in subscriber method.
        console.log(response);
       this.isRegistered=true;
        console.log(this.isRegistered);
    }, error => {
      console.log(error);
    });
   }


}
