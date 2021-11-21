import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() logOutStatus : boolean = false;

  constructor() { }

  ngOnInit(): void {
    // console.log('Home page log out status ' + this.logOutStatus);
  }

}
