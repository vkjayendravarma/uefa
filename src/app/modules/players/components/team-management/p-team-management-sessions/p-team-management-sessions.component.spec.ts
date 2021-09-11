import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementSessionsComponent } from './p-team-management-sessions.component';

describe('PTeamManagementSessionsComponent', () => {
  let component: PTeamManagementSessionsComponent;
  let fixture: ComponentFixture<PTeamManagementSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
