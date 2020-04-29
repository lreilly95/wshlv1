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
import { TeamsComponent } from './teams/teams.component';
import { GamesComponent } from './games/games.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { StandingsComponent } from './standings/standings.component';
import { PlayersEditComponent } from './players-edit/players-edit.component';
import { AdminComponent } from './admin/admin.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PlayersEditResolver } from './_resolvers/players-edit.resolver';
import { GoaliesEditResolver } from './_resolvers/goalies-edit.resolver';
import { GoaliesEditComponent } from './goalies-edit/goalies-edit.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      TabletestComponent,
      LoginFormComponent,
      HomeComponent,
      RegisterComponent,
      TeamsComponent,
      GamesComponent,
      StandingsComponent,
      PlayersEditComponent,
      GoaliesEditComponent,
      AdminComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [
      AuthService,
      PlayersEditResolver,
      GoaliesEditResolver,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }