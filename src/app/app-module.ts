import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app';
import { AboutComponent } from './pages/about/about';
import { GreetingComponent } from './pages/greeting/greeting';
import { GroupsComponent } from './pages/groups/groups';
import { NavComponent } from './shared/nav/nav';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent,
    AboutComponent,
    GreetingComponent,
    GroupsComponent,
    NavComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
