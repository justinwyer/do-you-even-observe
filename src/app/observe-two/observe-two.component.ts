import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observe-two',
  templateUrl: './observe-two.component.html',
  styleUrls: ['./observe-two.component.css']
})
export class ObserveTwoComponent implements OnInit {

  private input: Observable<string> = Observable.from(['Dacs', 'Patrick', 'Ruddy', 'Reza', 'Hlulani']).flatMap((value, i) => Observable.of(value).delay((i + 1) * 1000));
  private inputArray: string[] = [];
  private outputArray: string[] = [];
  constructor() {
    this.input.subscribe(i => this.inputArray.push(i));
    this.input.map(i => i.toUpperCase()).subscribe(i => this.outputArray.push(i));
  }

  ngOnInit() {
  }

}
