import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../_models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

// Get all players
getPlayers(): Observable<Player[]> {
  return this.http.get<Player[]>(this.baseUrl + 'players');
}

// Get player with ID
getPlayer(id): Observable<Player> {
  return this.http.get<Player>(this.baseUrl + 'players/' + id);
}

// Get all players playing for a team
getPlayersTeam(teamId): Observable<Player[]> {
  return this.http.get<Player[]>(this.baseUrl + 'players/team' + teamId);
}

// Send http PUT request to API with player object
updatePlayer(id: number, player: Player) {
  return this.http.put(this.baseUrl + 'players/' + id, player);
}

}
