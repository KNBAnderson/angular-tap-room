import { Component, OnInit } from '@angular/core';
import { Taproom } from '../tapRoom';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  tapRoom: Taproom;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentTaproom.subscribe(tapRoom => this.tapRoom = tapRoom)
  }


  show() {
    //this.data.updateTaproom
  }
}
