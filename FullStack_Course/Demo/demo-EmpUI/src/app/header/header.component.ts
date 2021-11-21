import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() headerChoice = new EventEmitter<string>();

  @Input() headerLoginStatus : any;

  @Input() headerLoginName : string = '';

  @Output() headerLogOutStatus = new EventEmitter<boolean>();

  options = ['Edit' ,'LogOut']
  constructor() {

   }

  ngOnInit(): void {
    
  }

  onSelected(headerChoice:string){
    this.headerChoice.emit(headerChoice);
  }

  onLogOut(){
    this.headerLoginStatus = !this.headerLoginStatus;
    this.headerLogOutStatus.emit(this.headerLoginStatus);
  }
}
