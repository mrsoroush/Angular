import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { IUser } from "../interfaces/user" ;
import { UserService } from "./user.service";

@Injectable()
export class userResolver implements Resolve<IUser>{

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
            Observable<IUser> | Promise<IUser> | IUser{
        return this.userService.getUser(+route.params['id']);
    }

}