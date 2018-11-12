import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.loginService.isAuthentication().then(
      (auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      });
  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  //   boolean | Observable<boolean> | Promise<boolean> {
  //   return this.canActivate(childRoute, state);
  // }



}
