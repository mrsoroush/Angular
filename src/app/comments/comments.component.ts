import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  //text: string;
  @ViewChild('myTextarea') textareaVar : ElementRef;
  @Output() buttonClicked = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  onButtonClicked(){
    this.buttonClicked.emit(this.textareaVar.nativeElement.value);
  }

}
