import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TabletestComponent } from './tabletest/tabletest.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      TabletestComponent,
      LoginFormComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
