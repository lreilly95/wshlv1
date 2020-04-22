import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {
  elements: any;
  // tslint:disable-next-line: max-line-length
  sortElements = ['name', 'gamesPlayed', 'points', 'wins', 'losses', 'otw', 'otl'];
  headElements = ['Team', 'Played', 'Points', 'Wins', 'Losses', 'OTW', 'OTL'];
  baseUrl = environment.apiUrl;
  teamMap = new Map();

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get(this.baseUrl + 'teams').subscribe(response => {
      this.elements = response;
    }, error => {
      console.log(error);
    });
  }
}
