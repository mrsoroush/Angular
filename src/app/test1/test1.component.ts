import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  colorCode: number;

  constructor() {
    this.colorCode = Math.random();
   }

  ngOnInit() {
  }

  getColor(){
    return this.colorCode > 0.5 ? "red" : "green";
  }

}
