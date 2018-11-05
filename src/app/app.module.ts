import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import{ TestComponent } from './test.component';
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
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id/:name', component: UserComponent},
  {path:'accounts', component: StarComponent}
];

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AccountsService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
