import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Player } from '../_models/player';
import { NotificationService } from '../_services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../_services/player.service';
import { NgForm } from '@angular/forms';
//import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})
export class PlayersEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  player: Player;
  errors: boolean = false;
  constructor(private playerService: PlayerService, private http: HttpClient,
              private toastr: NotificationService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.player = data.player;
    });
  }

  // Calls player service, send a http PUT request with player object
  updatePlayer() {
    this.playerService.updatePlayer(this.player.id, this.player).subscribe(next => {
      this.toastr.success('Player Updated');
      this.editForm.reset(this.player);
    }, error => {
      this.toastr.error(error);
      this.editForm.reset(this.player);
    });
  }

  // Client side validation of player data
  validateInput() {
    this.errors = false;
    if (!isNumeric(this.player.number) || this.player.number < 1 || this.player.number > 98) {
      this.toastr.error('Player number must be a number between 1 & 98');
      this.errors = true;
    }
    if (!isNumeric(this.player.teamId) || this.player.teamId < 1 || this.player.teamId > 6) {
      this.toastr.error('Player Team ID must be a number between 1 & 6');
      this.errors = true;
    }
    if (!isNumeric(this.player.points) || !isNumeric(this.player.goals) || !isNumeric(this.player.assists)
    || !isNumeric(this.player.gamesPlayed) || !isNumeric(this.player.piMs)
    || !isNumeric(this.player.plusMinus) || !isNumeric(this.player.sog)) {
      this.toastr.error('Player stats must be numeric');
      this.errors = true;
    }
    if (isNumeric(this.player.firstName) || isNumeric(this.player.lastName) || isNumeric(this.player.position)) {
      this.toastr.error('Names and positions cannot be numeric');
      this.errors = true;
    }
    if (this.player.position !== 'F' && this.player.position != 'D') {
      this.toastr.error('Position must be either "F" or "D"');
      this.errors = true;
    }
    if (this.errors === false) {
      this.updatePlayer();
    } else {
      this.editForm.reset(this.player);
    }

    // simplified implementation of isNumeric from rxjs, which is no longer available from v6
    function isNumeric(val: any): boolean {
      return !(val instanceof Array) && (val - parseFloat(val) + 1) >= 0;
    }
  }
}
