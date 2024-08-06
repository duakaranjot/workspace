import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponenet } from './header/header.componenet';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    ,HeaderComponenet, UserComponent,TasksComponent,TaskComponent,AddTaskComponent,CardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponenet,UserComponent,TasksComponent,TaskComponent,AddTaskComponent]
})
export class AppModule { }
