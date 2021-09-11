import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementAnnouncementsComponent } from './p-team-management-announcements.component';

describe('PTeamManagementAnnouncementsComponent', () => {
  let component: PTeamManagementAnnouncementsComponent;
  let fixture: ComponentFixture<PTeamManagementAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
