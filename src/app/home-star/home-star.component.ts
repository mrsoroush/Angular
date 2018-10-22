import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LikesComponent } from '../likes/likes.component';

@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.component.html',
  styleUrls: ['./home-star.component.css']
})
export class HomeStarComponent implements OnInit, AfterViewInit {

  @ViewChild(LikesComponent) child;
  //prop : [];
  numberOfLikes: number;
  numberOfDislikes: number;
  textOfComment: string;
  

  constructor() {
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.numberOfLikes = this.child.likes;
    this.numberOfDislikes = this.child.dislikes;
  }

  onClick(event){
    this.textOfComment = event;
  }


}
