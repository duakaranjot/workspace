import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponenet } from './header/header.componenet';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponenet, UserComponent],
  imports: [BrowserModule, AppRoutingModule,SharedModule,TasksModule],
  providers: [],
  bootstrap: [AppComponent, HeaderComponenet, UserComponent],
})
export class AppModule {}
