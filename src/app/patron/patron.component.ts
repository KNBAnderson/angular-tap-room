import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from "../data.service";
import { Taproom } from '../tapRoom';


@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  tapRoom: Taproom;
  thing;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentTaproom.subscribe(tapRoom => this.tapRoom = tapRoom)
  }

  dostuff() {
    console.log(this.thing);    
  }

  show() {
    //this.data.updateTaproom
  }

}
