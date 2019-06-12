import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";
import { Taproom } from './tapRoom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  tapRoom: Taproom

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentTaproom.subscribe(tapRoom => this.tapRoom = tapRoom)
  }
}