import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  userName: string;
  
  constructor() { }

  ngOnInit() {
  }

  show() {
    console.log(this.userName);    
  }

}
