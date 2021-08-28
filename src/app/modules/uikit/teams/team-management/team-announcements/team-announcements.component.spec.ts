import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAnnouncementsComponent } from './team-announcements.component';

describe('TeamAnnouncementsComponent', () => {
  let component: TeamAnnouncementsComponent;
  let fixture: ComponentFixture<TeamAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
