import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.component.html',
  styleUrls: ['./home-star.component.css']
})
export class HomeStarComponent implements OnInit {

  //@ViewChild(LikesComponent) child;
  //prop : [];
  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;
  textOfComment: string;
  showDiv = false;
  

  constructor() {
   }

  ngOnInit() {
  }

  onClick(event){
    this.textOfComment = event;
    this.showDiv = true;
  }

  onLikeClicked(){
    this.numberOfLikes = this.numberOfLikes + 1;
  }

  onDislikeClicked(){
    this.numberOfDislikes = this.numberOfDislikes + 1;
  }


}
