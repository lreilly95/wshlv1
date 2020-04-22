import { NumberValueAccessor } from '@angular/forms';

export interface Player {
    id: number;
    firstName: string;
    lastName: string;
    number: number;
    teamId: number;
    position: string;
    gamesPlayed: number;
    points: number;
    goals: number;
    assists: number;
    piMs: number;
    plusMinus: number;
    sog: number;
}
