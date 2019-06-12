import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Taproom } from './tapRoom';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private taproomSource = new BehaviorSubject(new Taproom('CAG Stand'));
  currentTaproom = this.taproomSource.asObservable();
}