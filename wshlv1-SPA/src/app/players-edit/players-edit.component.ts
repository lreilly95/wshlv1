import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Player } from '../_models/player';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../_services/player.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})
export class PlayersEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  player: Player;
  constructor(private playerService: PlayerService, private http: HttpClient,
              private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      this.player = data['player'];
    });
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.player.id, this.player).subscribe(next => {
      this.alertify.success('Player Updated');
      this.editForm.reset(this.player);
    }, error => {
      this.alertify.error(error);
    });
  }
}
