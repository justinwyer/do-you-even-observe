import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observe-dice',
  templateUrl: './observe-dice.component.html',
  styleUrls: ['./observe-dice.component.css']
})
export class ObserveDiceComponent implements OnInit {

  private die: Observable<number[]> = Observable.create(
    (obs) => setInterval(() =>
      obs.next([Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)]), 500));
  private roll: number[] = [0, 0];
  constructor() {
    this.die
      .takeWhile(r => r[0] !== 1 || r[1] !== 1)
      .concat(Observable.of([1, 1]))
      .subscribe(r => this.roll = r);
  }

  ngOnInit() {
  }

}
