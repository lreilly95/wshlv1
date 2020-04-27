import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goalie } from '../_models/goalie';
import { GoalieService } from '../_services/goalie.service';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-goalies-edit',
  templateUrl: './goalies-edit.component.html',
  styleUrls: ['./goalies-edit.component.css']
})
export class GoaliesEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  goalie: Goalie;
  errors: boolean = false;
  constructor(private goalieService: GoalieService, private http: HttpClient,
              private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.goalie = data.goalie;
    });
  }

  // Calls goalie service to send a http PUT request, updating the database
  updateGoalie() {
    this.goalieService.updateGoalie(this.goalie.id, this.goalie).subscribe(next => {
      this.alertify.success('Goalie Updated');
      this.editForm.reset(this.goalie);
    }, error => {
      this.alertify.error(error);
    });
  }

  validateInput() {
    this.errors = false;
    if (!isNumeric(this.goalie.number) || this.goalie.number < 1 || this.goalie.number > 98) {
      this.alertify.error('Goalie number must be a number between 1 & 98');
      this.errors = true;
    }
    if (!isNumeric(this.goalie.teamId) || this.goalie.teamId < 1 || this.goalie.teamId > 6) {
      this.alertify.error('Goalie Team ID must be a number between 1 & 6');
      this.errors = true;
    }
    if (!isNumeric(this.goalie.savePercentage) || !isNumeric(this.goalie.gamesPlayed) || !isNumeric(this.goalie.gamesWon)
    || !isNumeric(this.goalie.gaa)) {
      this.alertify.error('Goalie stats must be numeric');
      this.errors = true;
    }
    if (isNumeric(this.goalie.firstName) || isNumeric(this.goalie.lastName)) {
      this.alertify.error('Names and positions cannot be numeric');
      this.errors = true;
    }
    if (this.errors === false) {
      this.updateGoalie();
    } else {
      this.editForm.reset(this.goalie);
    }

    // simplified implementation of isNumeric from rxjs, which is no longer available from v6
    function isNumeric(val: any): boolean {
      return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0;
    }
  }
}
