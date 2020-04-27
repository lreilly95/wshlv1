import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TabletestComponent } from './tabletest/tabletest.component';
import { TeamsComponent } from './teams/teams.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { RegisterComponent } from './register/register.component';
import { GamesComponent } from './games/games.component';
import { AdminComponent } from './admin/admin.component';
import { PlayersEditComponent } from './players-edit/players-edit.component';
import { AuthGuard } from './_guards/auth.guard';
import { PlayersEditResolver } from './_resolvers/players-edit.resolver';
import { GoaliesEditComponent } from './goalies-edit/goalies-edit.component';
import { GoaliesEditResolver } from './_resolvers/goalies-edit.resolver';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'players', component: TabletestComponent},
    { path: 'teams', component: TeamsComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'games', component: GamesComponent},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: 'players/:id', component: PlayersEditComponent, resolve: {player: PlayersEditResolver}, canActivate: [AuthGuard]},
    { path: 'goalies/:id', component: GoaliesEditComponent, resolve: {goalie: GoaliesEditResolver}, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
