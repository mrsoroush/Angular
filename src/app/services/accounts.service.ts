import { IAccount } from "../interfaces/account";
import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()

export class AccountsService{
    accounts: IAccount[] = [
        {name: "soroush", password: "1234"},
        {name: "shadan", password: "5678"},
        {name: "zahra", password: "9012"},
    ];

    constructor(private loggingService: LoggingService){ }

    userAdded = new EventEmitter<IAccount>();

    addAccount(a: IAccount){
        this.accounts.push(a);
        this.loggingService.logMessage(a.toString());
    }
}