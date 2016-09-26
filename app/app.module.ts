import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import appRoutes from './app.routes';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, appRoutes ],
  declarations: [ AppComponent ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
