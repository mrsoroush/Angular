import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {
  
  userId;
  userName;
  
  userSubscription: Subscription;
  queryParamsSubscription: Subscription;
  user: IUser;
  allowEdit = false;
  
  constructor(private route: ActivatedRoute, 
              private userService: UserService) { }
    
  ngOnInit() {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUser(+params['id']);
      });
    this.queryParamsSubscription = this.route.queryParams.subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        });
        
        this.userId = this.user.id;
        this.userName = this.user.name;
      }
        
    ngOnDestroy(): void {
      this.userSubscription.unsubscribe();
      this.queryParamsSubscription.unsubscribe();
    }
      }
      