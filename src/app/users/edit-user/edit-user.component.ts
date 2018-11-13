import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user';
import { CanComponentDeactivate } from 'src/app/services/can-deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  
  userId;
  userName;
  
  userSubscription: Subscription;
  queryParamsSubscription: Subscription;
  user: IUser;
  allowEdit = false;
  saveChanges = false;
  
  constructor(private route: ActivatedRoute, 
    private userService: UserService, private router: Router) { }
    
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
  
  onSave() {
    this.user.id = this.userId;
    this.user.name = this.userName;
    this.userService.updateUser(this.user.id, this.user);
    this.saveChanges = true;
    this.router.navigate(['../'], {relativeTo: this.route});
   }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    if(!this.allowEdit){
      return true;
    }
    if((this.userId !== this.user.id || this.userName !== this.user.name) && !this.saveChanges){
      return confirm('Do you want to exit without saving?');
    } else {
      return true;
    }
  }
        
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
      }
      