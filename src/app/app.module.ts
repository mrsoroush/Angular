import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import{ TestComponent } from './test.component';
import { HomeComponent } from './home/home.component';
import { Test1Component } from './test1/test1.component';
import { Home2Component } from './home2/home2.component';
import { AboutComponent } from './about/about.component';
import { StarComponent } from './star/star.component';
import { HeaderComponent } from './header/header.component';
import { HomeStarComponent } from './home-star/home-star.component';
import { StarCommentComponent } from './star-comment/star-comment.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { AdvancedHighlightDirective } from './directives/advanced-highlight.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { UnlessDirective } from './directives/unless.directive';
import { LogServiceComponent } from './log-service/log-service.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountsService } from './services/accounts.service';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
