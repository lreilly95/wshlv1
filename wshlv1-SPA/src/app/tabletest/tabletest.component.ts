import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Player } from '../_models/player';
import { Goalie } from '../_models/goalie';
import { PlayerService } from '../_services/player.service';
import { GoalieService } from '../_services/goalie.service';
import { NotificationService } from '../_services/notification.service';
import { AuthService } from '../_services/auth.service';

@Component({
selector: 'app-tabletest',
templateUrl: './tabletest.component.html',
styleUrls: ['./tabletest.component.css'],
})

export class TabletestComponent implements OnInit {
  elements: Player[];
  goalies: Goalie[];
  sortElements = ['number', 'firstName', 'lastName', 'teamId',
  'position', 'gamesPlayed', 'points', 'goals', 'assists', 'piMs', 'plusMinus', 'sog'];
  headElements = ['Number', 'Name', 'Surname', 'Team', 'Pos', 'Played', 'Points', 'Goals', 'Assists', 'PIMs', '+/-', 'SoG'];
  sortGoalies = ['number', 'firstName', 'lastName', 'teamId', 'savePercentage', 'gamesPlayed', 'gamesWon', 'gaa'];
  headGoalies = ['Number', 'Name', 'Surname' , 'Team', 'SV%', 'Played', 'Won', 'GAA'];
  baseUrl = environment.apiUrl;
  teamMap = new Map();

  constructor(private playerService: PlayerService, private goalieService: GoalieService,
              private http: HttpClient, private toastr: NotificationService, private authService: AuthService) { }


  ngOnInit() {
    this.loadPlayers();
    this.loadGoalies();
    this.mapTeams();
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      this.elements = players.sort((a, b) => b.points - a.points); // Default sorting, players by points descending
    }, error => {
      this.toastr.error(error);
    });
  }

  loadGoalies() {
    this.goalieService.getGoalies().subscribe((goalies: Goalie[]) => {
      this.goalies = goalies.sort((a, b) => b.savePercentage - a.savePercentage); // Default sorting, by SV% descending
    }, error => {
      this.toastr.error(error);
    });
  }

  // Maps teamId to team names
  mapTeams() {
    this.teamMap.set(1, 'Paisley Pioneers');
    this.teamMap.set(2, 'Glasgow Giants');
    this.teamMap.set(3, 'Ayr Assassins');
    this.teamMap.set(4, 'Dumfries Destroyers');
    this.teamMap.set(5, 'Kilmarnock Kestrels');
    this.teamMap.set(6, 'Stirling Stingrays');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  }

