import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {

  isLoggedIn : boolean = false;

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    console.log('Oinit Service service '+this.isLoggedIn);
  }

  

  onLogin(model:any){
    console.log('Before posting login '+this.isLoggedIn);
    this.http.post('https://localhost:5001/api/account/login',model).subscribe(response => {
      console.log(response);
      this.isLoggedIn = true;
      console.log('After posting service '+this.isLoggedIn);
    }, error => {
      this.isLoggedIn = false;
      console.log(error);
    })
  }


}
