import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];
  teamMap = new Map();
  logoMap = new Map();

  constructor(private gameService: GameService, private http: HttpClient,
              private alertify: AlertifyService, private authService: AuthService) { }

  ngOnInit() {
    this.loadGames();
    this.mapTeams();
    this.mapLogos();
  }

  loadGames() {
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.games = games;
    }, error => {
      this.alertify.error(error);
    });
  }

  mapTeams() {
    this.teamMap.set(1, 'Paisley Pioneers');
    this.teamMap.set(2, 'Glasgow Giants');
    this.teamMap.set(3, 'Ayr Assassins');
    this.teamMap.set(4, 'Dumfries Destroyers');
    this.teamMap.set(5, 'Kilmarnock Kestrels');
    this.teamMap.set(6, 'Stirling Stingrays');
  }

  mapLogos() {
    this.logoMap.set(1, '/assets/img/paisleylogo.png');
  }

  getLogo(teamId) {
    return this.logoMap.get(teamId);
  }
}
