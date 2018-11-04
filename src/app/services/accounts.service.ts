import { IAccount } from "../interfaces/account";

export class AccountsService{
    accounts: IAccount[] = [
        {name: "soroush", password: "1234"},
        {name: "shadan", password: "5678"},
        {name: "zahra", password: "9012"},
    ];

    addAccount(a: IAccount){
        this.accounts.push(a);
    }
}