import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAccount } from '../../../interfaces/account';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  accounts: IAccount[] = [];

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private accountService: AccountsService) { 
    this.accountService.userAdded.subscribe(
      (account: IAccount) => alert(account)
    );
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  addNewAccount(){
    let a: IAccount = {name: this.username.nativeElement.value, password: this.password.nativeElement.value};
    this.accountService.addAccount(a);
    this.accountService.userAdded.emit(a);
  }

}
