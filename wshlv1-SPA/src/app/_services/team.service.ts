import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../_models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getTeams(): Observable<Team[]> {
  return this.http.get<Team[]>(this.baseUrl + 'teams'); // Gets list of teams from API
}

}
