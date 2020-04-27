/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GoaliesEditComponent } from './goalies-edit.component';

describe('GoaliesEditComponent', () => {
  let component: GoaliesEditComponent;
  let fixture: ComponentFixture<GoaliesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaliesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaliesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
