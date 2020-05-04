import { Injectable } from "@angular/core";
import { Player } from '../_models/player';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { PlayerService } from '../_services/player.service';
import { NotificationService } from '../_services/notification.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Using  a resolver suppresses errors relating to components being loaded before the API returns data
@Injectable()
export class PlayersEditResolver implements Resolve<Player> {
    constructor(private playerService: PlayerService, private router: Router, private toastr: NotificationService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Player> {
        return this.playerService.getPlayer(route.params['id']).pipe(
            catchError(error => {
                this.toastr.error('Problem retrieving data.');
                this.router.navigate(['/players']);
                return of(null);
            })
            );
        }
    }