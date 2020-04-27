import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goalie } from '../_models/goalie';

@Injectable({
  providedIn: 'root'
})
export class GoalieService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getGoalies(): Observable<Goalie[]> {
  return this.http.get<Goalie[]>(this.baseUrl + 'goalies');
}

getGoalie(id): Observable<Goalie> {
  return this.http.get<Goalie>(this.baseUrl + 'goalies/' + id);
}

getGoaliesTeam(teamId): Observable<Goalie[]> {
  return this.http.get<Goalie[]>(this.baseUrl + 'goalies/team' + teamId);
}


// Send a http PUT request to API, body is goalie object
updateGoalie(id: number, goalie: Goalie) {
  return this.http.put(this.baseUrl + 'goalies/' + id, goalie);
}

}
