import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {


  @Input("score")
  score: number = 0

  @Output()
  rateClicked: EventEmitter<number> = new EventEmitter<number>();

  starAreaWidth: number = 75;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRateClicked() {
    this.rateClicked.emit(this.score);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.starAreaWidth = this.score * (90 / 5);
  }

}