import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number;
  @Input('starRating') rating: number;
  @Output() starClicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.starWidth = this.rating * 86 / 5;
  }

  onStarClicked(){
    this.starClicked.emit(`The rating is ${this.rating}`);
  }

}
