import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
