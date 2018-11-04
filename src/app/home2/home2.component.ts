import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IPerson } from '../interfaces/person';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  message ="Hello from Home2";
  ratings: number[] = [2, 5, 3.5, 4, 1, 4.5];
  eventOutput: IPerson;
  name: string;
  @ViewChild('nameInputField') inputVar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClick(event: IPerson){
    console.log(event);
    this.eventOutput = event;
  }

  /*bottunClick(inputName: HTMLInputElement){
    //console.log(inputName.value);
    this.name = inputName.value;
  }*/

  bottunClick(){
    //console.log(this.inputVar);
    this.name = this.inputVar.nativeElement.value;
  }

}
