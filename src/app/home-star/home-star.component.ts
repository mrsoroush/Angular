import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IComment } from '../comment';


@Component({
  selector: 'app-home-star',
  templateUrl: './home-star.component.html',
  styleUrls: ['./home-star.component.css']
})
export class HomeStarComponent implements OnInit {
  text: string;
  @ViewChild('myTextarea') textareaVar : ElementRef;
  allComment: IComment;
  comments: IComment = {
    comment: '',
    like: 0,
    dislike: 0,
    star: 0,
    numberOfReviews: 0,
  };
 
  constructor() {
   }

  ngOnInit() {
  }

  buttonClicked(){
    //this.comments.comment = this.textareaVar.nativeElement.value;
    this.text = this.textareaVar.nativeElement.value;
  }

  /*onClick(event: IComment){
    console.log(event);
    this.allComment = event;
  }*/

}
