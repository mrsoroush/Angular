import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home', //Selector as Tag
  //selector: '.app-home', //Selector as Class
  //selector: '[app-home]', //Selector as Property
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  ngOnInit(){}

  constructor(){
    setTimeout(() => {
      this.allowClick = true;
    }, 6000)
  }

  age: number = 30;
  name: string = 'Soroush';
  allowClick = false;
  btnClick = 'Button is not clicked.';
  lastName = "";
  buttonClicked = false;

  getName(){
    return this.name;
  }

  onButtonClicked(){
    this.buttonClicked = true;
    this.btnClick = 'Buttun is clicked now!';
  }

  onInputChange(event : Event){
    this.lastName = (<HTMLInputElement>event.target).value;
    //this.lastName = (event.target as HTMLInputElement).value;
  }

}
