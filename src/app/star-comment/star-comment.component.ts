import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-star-comment',
  templateUrl: './star-comment.component.html',
  styleUrls: ['./star-comment.component.css']
})
export class StarCommentComponent implements OnInit {

  @ViewChild('rating') rate: ElementRef;
  rate2: number;
  numberOfRating: number = 0;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onRate(){
    this.rate2 = this.rate.nativeElement.value;
    this.numberOfRating = this.numberOfRating + 1;
    this.count = (this.count + this.rate2) / this.numberOfRating;
  }

}
