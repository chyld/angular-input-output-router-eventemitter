import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent implements OnInit {
  // do not need Output in this scenario
  // just a normal EventEmitter
  notify = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  clicked(value: number) {
    let r = Math.random();
    this.notify.emit(value + r);
  }
}
