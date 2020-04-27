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
}
