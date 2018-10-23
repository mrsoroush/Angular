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
import { CommentsComponent } from './comments/comments.component';

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
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
