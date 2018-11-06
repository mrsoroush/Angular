import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-accounts',
  templateUrl: './edit-accounts.component.html',
  styleUrls: ['./edit-accounts.component.css']
})
export class EditAccountsComponent implements OnInit, OnDestroy {
  
  queryParamsSubscription: Subscription;
  fragmentSubscription: Subscription;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (query) => {
        console.log(query);
      });
      this.fragmentSubscription = this.route.fragment.subscribe(
        (string) => {
          console.log(string);
        });
      }
  
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }
  
    }
    