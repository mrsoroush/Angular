import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../comment';

@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.component.html',
  styleUrls: ['./home-star.component.css']
})
export class HomeStarComponent implements OnInit {

  comments: IComment[] = [];

  @ViewChild('commentText') comm : ElementRef;
  
  constructor() {
   }

  ngOnInit() {
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
