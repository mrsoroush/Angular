import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  
  errorMessage: string;
  messageSubscription: Subscription;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data[0]['message'];
    this.messageSubscription = this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data[0]['message'];
      });
    }

    ngOnDestroy(): void {
      this.messageSubscription.unsubscribe();
    }
    
  }
  