import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { IPerson } from '../person';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  starWidth: number;
  @Input('starRating') rating: number;
  //@Output() starClicked = new EventEmitter<string>();
  @Output() starClicked = new EventEmitter<IPerson>();
  person: IPerson = {
    name: 'Soroush',
    age: 0,
    school: 'SBU'
  };
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.starWidth = this.rating * 66.5 / 5;
  }

  onStarClicked(){
    //this.starClicked.emit(`The rating is ${this.rating}`);
    this.person.age = this.rating;
    this.starClicked.emit(this.person);
  }

}
