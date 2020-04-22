/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoalieService } from './goalie.service';

describe('Service: Goalie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalieService]
    });
  });

  it('should ...', inject([GoalieService], (service: GoalieService) => {
    expect(service).toBeTruthy();
  }));
});
