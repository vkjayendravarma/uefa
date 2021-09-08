import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementAnnouncementsComponent } from './f-team-management-announcements.component';

describe('FTeamManagementAnnouncementsComponent', () => {
  let component: FTeamManagementAnnouncementsComponent;
  let fixture: ComponentFixture<FTeamManagementAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
