import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../_models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

getGames(): Observable<Game[]> {
  return this.http.get<Game[]>(this.baseUrl + 'games');
}

getGame(id): Observable<Game> {
  return this.http.get<Game>(this.baseUrl + 'games/' + id);
}

getGamesTeam(teamId): Observable<Game[]> {
  return this.http.get<Game[]>(this.baseUrl + 'games/team' +teamId);
}

updateGame(id: number, game: Game) {
  this.http.put(this.baseUrl + 'games/' + id, game);
}
}
