import { Component, OnInit, OnChanges, Input } from '@angular/core';

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

  ngOnChanges(): void{
    this.starWidth = this.rating * 66 / 5;
  }

}
