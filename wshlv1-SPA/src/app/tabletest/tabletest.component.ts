import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-tabletest',
templateUrl: './tabletest.component.html',
styleUrls: ['./tabletest.component.css'],
})
export class TabletestComponent implements OnInit {
  elements: any;
  goalies: any;
  // tslint:disable-next-line: max-line-length
  sortElements = ['number', 'firstName', 'lastName', 'teamId', 'position', 'gamesPlayed', 'points', 'goals', 'assists', 'piMs', 'plusMinus', 'sog'];
  headElements = ['Number', 'Name', 'Surname', 'Team', 'Pos', 'Played', 'Points', 'Goals', 'Assists', 'PIMs', '+/-', 'SoG'];
  sortGoalies = ['number', 'firstName', 'lastName', 'teamId', 'savePercentage', 'gamesPlayed', 'gamesWon', 'gaa'];
  headGoalies = ['Number', 'Name', 'Surname' , 'Team', 'SV%', 'Played', 'Won', 'GAA'];
  baseUrl = 'http://localhost:5000/api/';
  teamMap = new Map();

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get(this.baseUrl + 'players').subscribe(response => {
      this.elements = response;
    }, error => {
      console.log(error);
    });

    this.http.get(this.baseUrl + 'goalies').subscribe(response => {
      this.goalies = response;
    }, error => {
      console.log(error);
    });

    this.teamMap.set(1, 'Paisley Pioneers');
    this.teamMap.set(2, 'Glasgow Giants');
    this.teamMap.set(3, 'Ayr Assassins');
    this.teamMap.set(4, 'Dumfries Destroyers');
    this.teamMap.set(5, 'Kilmarnock Kestrels');
    this.teamMap.set(6, 'Stirling Stingrays');
  }
}
