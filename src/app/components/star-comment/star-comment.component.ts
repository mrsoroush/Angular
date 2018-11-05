import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-comment',
  templateUrl: './star-comment.component.html',
  styleUrls: ['./star-comment.component.css']
})
export class StarCommentComponent implements OnInit, OnChanges {

  starWidth;
  @Input() rating: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    this.starWidth = this.rating * 66 / 5;
  }

}
