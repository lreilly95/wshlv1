import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GoalieService } from '../_services/goalie.service';
import { Goalie } from '../_models/goalie';

// Using  a resolver suppresses errors relating to components being loaded before the API returns data
@Injectable()
export class GoaliesEditResolver implements Resolve<Goalie> {
    constructor(private goalieService: GoalieService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Goalie> {
        return this.goalieService.getGoalie(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving Goalie data.');
                this.router.navigate(['/goalies']);
                return of(null);
            })
            );
        }
    }