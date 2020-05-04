import { Component, OnInit } from '@angular/core';
import { Game } from '../_models/game';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../_services/notification.service';
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
              private toastr: NotificationService, private authService: AuthService) { }

  ngOnInit() {
    this.loadGames();
    this.mapTeams();
    this.mapLogos();
  }

  loadGames() {
    this.gameService.getGames().subscribe((games: Game[]) => {
      this.games = games;
    }, error => {
      this.toastr.error(error);
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
    this.logoMap.set(2, '/assets/img/glasgowlogo.png');
    this.logoMap.set(3, '/assets/img/ayrlogo.png');
    this.logoMap.set(4, '/assets/img/dumfrieslogo.png');
    this.logoMap.set(5, '/assets/img/kilmarnocklogo.png');
    this.logoMap.set(6, '/assets/img/stirlinglogo.png');
  }

  getLogo(teamId) {
    return this.logoMap.get(teamId);
  }
}
