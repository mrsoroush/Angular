import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  users: IUser[] = [
    {id: 1, name: 'soroush'},
    {id: 2, name: 'shadan'},
    {id: 3, name: 'zahra'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(id: number){
    this.router.navigate(['/accounts', id, 'edit'],
                        {queryParams: {allowEdit: 1, key2:true},
                        fragment: 'paragraph1'});
  }

}
