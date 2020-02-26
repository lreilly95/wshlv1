import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TabletestComponent } from './tabletest/tabletest.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      TabletestComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
