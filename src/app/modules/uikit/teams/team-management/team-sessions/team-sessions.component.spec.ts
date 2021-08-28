import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSessionsComponent } from './team-sessions.component';

describe('TeamSessionsComponent', () => {
  let component: TeamSessionsComponent;
  let fixture: ComponentFixture<TeamSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
