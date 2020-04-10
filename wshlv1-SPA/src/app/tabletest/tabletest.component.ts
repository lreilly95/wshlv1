import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-tabletest',
templateUrl: './tabletest.component.html',
styleUrls: ['./tabletest.component.css'],
})
export class TabletestComponent {
  elements: any = [
    {id: 1, number: '44', first: 'Stuart', last: 'Brand', pos:'F', pts:'20', gls:'9', asts:'11'},
    {id: 2, number: '18', first: 'Kevin', last: 'Kyle', pos:'F', pts:'20', gls:'9', asts:'11'},
    {id: 3, number: '2', first: 'Darren', last: 'Francis', pos:'D', pts:'4', gls:'0', asts:'4'},
    {id: 4, number: '98', first: 'Otto', last: 'Oswald', pos:'D', pts:'2', gls:'1', asts:'1'},
    {id: 5, number: '67', first: 'Jack', last: 'Jackson', pos:'F', pts:'34', gls:'14', asts:'20'},
    {id: 6, number: '3', first: 'Shaun', last: 'Evans', pos:'D', pts:'21', gls:'9', asts:'12'}
  ];

  headElements = ['ID', 'Number', 'First', 'Last', 'Position', 'Points', 'Goals', 'Assists'];

}