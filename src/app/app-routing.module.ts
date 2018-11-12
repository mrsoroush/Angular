import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Notfound404Component } from "./components/notfound404/notfound404.component";
import { EditAccountsComponent } from "./components/accounts/edit-accounts/edit-accounts.component";
import { AccountsComponent } from "./components/accounts/accounts.component";
import { EditUserComponent } from "./users/edit-user/edit-user.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'users', canActivate: [AuthGuard] , component: UsersComponent, children: [
      {path:':id', component: UserComponent},
      // {path:':id/:name', component: UserComponent},
      {path:':id/edit', component: EditUserComponent},
    ] },
    { path:'accounts', component: AccountsComponent },
    { path:'accounts/:id/edit', component: EditAccountsComponent },
    { path: 'not-found', component: Notfound404Component },
    { path: '**', redirectTo: '/not-found' },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}