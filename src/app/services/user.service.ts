import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: IUser[] = [
    {id: 1, name: 'soroush'},
    {id: 2, name: 'shadan'},
    {id: 3, name: 'zahra'}
  ];

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUser(id: number){
    const user = this.users.find(
      (u) => {
        return u.id === id;
      });
    return user;
  }

  updateUser(id: number, user: IUser){
    let username = this.users.find(
      (u) => {
        return u.id === id;
      });
    username = user;
  }
  
}
