import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observe-one',
  templateUrl: './observe-one.component.html',
  styleUrls: ['./observe-one.component.css']
})
export class ObserveOneComponent implements OnInit {

  private input: Observable<number> = Observable.range(1, 10).flatMap((i) => Observable.of(i).delay(i * 1000));
  private inputArray: number[] = [];
  private squareOutputArray: number[] = [];
  constructor() {
    this.input.subscribe(i => this.inputArray.push(i));
    const squaredInput = this.input.map(i => i * i);
    squaredInput.subscribe((i) => this.squareOutputArray.push(i));
  }

  ngOnInit() {
  }

}
