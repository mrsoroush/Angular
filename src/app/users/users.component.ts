import { Component, OnInit } from '@angular/core';

import { IUser } from '../interfaces/user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [{id: 0, name: ''}];

  constructor(private userServise: UserService) { }

  ngOnInit() {
    this.users = this.userServise.getUsers();
  }



}
