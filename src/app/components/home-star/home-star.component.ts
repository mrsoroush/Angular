import { Component, OnInit, ViewChild, ElementRef, 
  DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked } from '@angular/core';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.component.html',
  styleUrls: ['./home-star.component.css']
})
export class HomeStarComponent implements 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked {

  comments: IComment[] = [];

  @ViewChild('commentText') comm : ElementRef;
  
  constructor() { 
    console.log("Constructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }
  
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  addComment(){
    let c: IComment = {
      comment: this.comm.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    }
    this.comments.push(c);
  }

  reviewsCount(c: IComment, n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }

  commentLike(c: IComment){
    c.like++;
  }

  commentDislike(c: IComment){
    c.dislike++;
  }


}
