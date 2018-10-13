import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  message ="Hello from Home2";
  ratings: number[] = [2, 5, 3.5, 4, 1, 4.5];
  eventOutput: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.eventOutput = event;
  }

}
