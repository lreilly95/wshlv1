import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../_services/player.service';
import { GoalieService } from '../_services/goalie.service';
import { NotificationService } from '../_services/notification.service';
import { Player } from '../_models/player';
import { Goalie } from '../_models/goalie';
import { Game } from '../_models/game';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  selectedTeamId: number;
  players: Player[];
  goalies: Goalie[];
  games: Game[];
  teamMap = new Map();
  logoMap = new Map();
  sortElements = ['number', 'firstName', 'lastName',
  'position', 'gamesPlayed', 'points', 'goals', 'assists', 'piMs', 'plusMinus', 'sog'];
  headElements = ['Number', 'Name', 'Surname', 'Pos', 'Played', 'Points', 'Goals', 'Assists', 'PIMs', '+/-', 'SoG'];
  sortGoalies = ['number', 'firstName', 'lastName', 'savePercentage', 'gamesPlayed', 'gamesWon', 'gaa'];
  headGoalies = ['Number', 'Name', 'Surname' , 'SV%', 'Played', 'Won', 'GAA'];

  constructor(private playerService: PlayerService, private goalieService: GoalieService,
              private toastr: NotificationService, private gameService: GameService) { }

  ngOnInit() {
    this.mapTeams();
    this.mapLogos();
  }

  // Load players of selected team
  loadPlayers(selectedTeamId) {
    this.playerService.getPlayersTeam(selectedTeamId).subscribe((players: Player[]) => {
      this.players = players.sort((a, b) => b.points - a.points); // Default sorting, by points descending
    }, error => {
      this.toastr.error(error);
    });
  }

  // Load goalies for selected team.
  loadGoalies(selectedTeamId) {
    this.goalieService.getGoaliesTeam(selectedTeamId).subscribe((goalies: Goalie[]) => {
      this.goalies = goalies.sort((a, b) => b.savePercentage - a.savePercentage); // Default sorting, by SV% descending
    }, error => {
      this.toastr.error(error);
    });
  }

  // Load games with selected teamID
  loadGames(selectedTeamId) {
    this.gameService.getGamesTeam(selectedTeamId).subscribe((games: Game[]) => {
      this.games = games.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Default sorting, by date ascending
    }, error => {
      this.toastr.error(error);
    });
  }

  // Map of team names to teamIDs
  mapTeams() {
    this.teamMap.set(1, 'Paisley Pioneers');
    this.teamMap.set(2, 'Glasgow Giants');
    this.teamMap.set(3, 'Ayr Assassins');
    this.teamMap.set(4, 'Dumfries Destroyers');
    this.teamMap.set(5, 'Kilmarnock Kestrels');
    this.teamMap.set(6, 'Stirling Stingrays');
  }

  // Map of logo assets to teamIDs
  mapLogos() {
    this.logoMap.set(1, '/assets/img/paisleylogo.png');
    this.logoMap.set(2, '/assets/img/glasgowlogo.png');
    this.logoMap.set(3, '/assets/img/ayrlogo.png');
    this.logoMap.set(4, '/assets/img/dumfrieslogo.png');
    this.logoMap.set(5, '/assets/img/kilmarnocklogo.png');
    this.logoMap.set(6, '/assets/img/stirlinglogo.png');
  }

  // Called when team radio button is changed
  updateComponent() {
    this.loadPlayers(this.selectedTeamId);
    this.loadGoalies(this.selectedTeamId);
    this.loadGames(this.selectedTeamId);
  }

  // Returns logo of team with teamID
  getLogo(teamId) {
    return this.logoMap.get(teamId);
  }

}
