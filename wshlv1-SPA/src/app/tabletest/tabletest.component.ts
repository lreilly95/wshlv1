import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-tabletest',
templateUrl: './tabletest.component.html',
styleUrls: ['./tabletest.component.css'],
})
export class TabletestComponent implements OnInit {
  elements: any;

  headElements = ['Number', 'First Name', 'Last Name', 'Position', 'Points', 'Goals', 'Assists'];

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/players').subscribe(response => {
      this.elements = response;
    }, error => {
      console.log(error);
    })
  }
}