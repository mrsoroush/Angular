import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HomeComponent } from './components/home/home.component';
import { Test1Component } from './components/test1/test1.component';
import { Home2Component } from './components/home2/home2.component';
import { AboutComponent } from './components/about/about.component';
import { StarComponent } from './components/star/star.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeStarComponent } from './components/home-star/home-star.component';
import { StarCommentComponent } from './components/star-comment/star-comment.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { AdvancedHighlightDirective } from './directives/advanced-highlight.directive';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { UnlessDirective } from './directives/unless.directive';
import { LogServiceComponent } from './components/log-service/log-service.component';
import { AddAccountComponent } from './components/accounts/add-account/add-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { EditAccountsComponent } from './components/accounts/edit-accounts/edit-accounts.component';
import { UserService } from './services/user.service';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginService } from './services/login-service.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { userResolver } from './services/user-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    Test1Component,
    Home2Component,
    AboutComponent,
    StarComponent,
    HeaderComponent,
    HomeStarComponent,
    StarCommentComponent,
    BasicHighlightDirective,
    AdvancedHighlightDirective,
    StructuralDirectivesComponent,
    UnlessDirective,
    LogServiceComponent,
    AddAccountComponent,
    NavigationComponent,
    UsersComponent,
    UserComponent,
    AccountsComponent,
    EditAccountsComponent,
    EditUserComponent,
    Notfound404Component,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    AccountsService,
    LoggingService,
    UserService,
    AuthGuard,
    LoginService,
    CanDeactivateGuard,
    userResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
