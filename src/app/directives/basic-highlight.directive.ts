import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  //elRef: ElementRef;

  constructor(private elRef: ElementRef) {
    //this.elRef = elRef;
   }

   ngOnInit(){
     this.elRef.nativeElement.style.color = "red";
     this.elRef.nativeElement.style.backgroundColor = "#ddd";
   }

}
