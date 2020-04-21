import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabletestComponent } from './tabletest/tabletest.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { RegisterComponent } from './register/register.component';
import { GamesComponent } from './games/games.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'players', component: TabletestComponent},
    { path: 'teams', component: TeamsComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'games', component: GamesComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
