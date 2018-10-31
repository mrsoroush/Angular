import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  absent: boolean = true;
  names: string[] = ['soroush', 'shadan', 'marjan', 'sara'];

  score: number = 100;

  constructor() { }

  ngOnInit() {
  }

  toggleAppear(){
    this.absent = !this.absent;
  }

}
