import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementSessionsComponent } from './f-team-management-sessions.component';

describe('FTeamManagementSessionsComponent', () => {
  let component: FTeamManagementSessionsComponent;
  let fixture: ComponentFixture<FTeamManagementSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
