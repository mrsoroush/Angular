import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../../user';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  user: IUser = {id: 0, name: ''};
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    console.log(this.route);
    this.user.id = this.route.snapshot.params['id'];
    this.user.name = this.route.snapshot.params['name'];
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
      );
    }

    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
    }
    
  }
  