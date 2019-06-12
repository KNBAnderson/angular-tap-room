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
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentTaproom.subscribe(tapRoom => this.tapRoom = tapRoom)
  }


  show() {
    //this.data.updateTaproom
  }

}
