import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from "../data.service";
import { Taproom, Keg } from '../tapRoom';
// import { AppModule } from './app/app.module';
import * as M from 'node_modules/materialize-css/dist/js/materialize';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  tapRoom: Taproom;
  thing;
  kegs: Keg[] = [];
  constructor(private data: DataService) { 
    this.kegs.push(
      new Keg('Number Six Saison', 'Battlebar Beerlactica', 6, 124, 66, 'This full-bodied saison may lead you to bad decisions.'), 
      new Keg('Skin Job Stout', 'Battlebar Beerlactica', 8.9, 72, 100, 'Made from 100% synthetic components, this smooth stout with surprise you'), 
      new Keg('Adama Pale Ale', 'Battlebar Beerlactica', 5.5, 40, 23, 'This traditional ale will command your taste buds'), 
      new Keg('The Wheat-eenth Colony', 'Battlebar Beerlactica', 7, 103, 43, 'This illusive wheat ale is a great way to end the night, if you can find it'), 
      new Keg('Col. Tigh Rye', 'Battlebar Beerlactica', 12, 9, 98, 'This rye, aged in bourban barrels for an unknown abount of time, will declare marshall law on your tastebuds, and affect your depth perception.'))
  }

  ngOnInit() {
    this.data.currentTaproom.subscribe(tapRoom => this.tapRoom = tapRoom) 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, 
        {
        options: 'left'
      });
    });       
  }

  navOpen() {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.getInstance(elems);
    
  }


  
}
