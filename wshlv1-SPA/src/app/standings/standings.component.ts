import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Team } from '../_models/team';
import { TeamService } from '../_services/team.service';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  elements: Team[];
  sortElements = ['name', 'gamesPlayed', 'points', 'wins', 'losses', 'otw', 'otl'];
  headElements = ['Team', 'Played', 'Points', 'Wins', 'Losses', 'OTW', 'OTL'];
  baseUrl = environment.apiUrl;
  teamMap = new Map();

  constructor(private http: HttpClient, private teamService: TeamService, private toastr: NotificationService) { }


  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.elements = teams.sort((a, b) => b.points - a.points);
    }, error => {
      this.toastr.error(error);
    });
  }
}
