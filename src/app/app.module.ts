import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BlueColorDirective } from './blue-color.directive';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { CommentpostComponent } from './commentpost/commentpost.component';

@NgModule({
  declarations: [
    AppComponent,
    BlueColorDirective,
    HomeComponent,
    CreatepostComponent,
    EditpostComponent,
    CommentpostComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'createpost',
        component: CreatepostComponent
      },
      {
        path: 'editpost',
        component: EditpostComponent
      },
      {
        path: 'commentpost',
        component: CommentpostComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
