import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementAttendanceComponent } from './p-team-management-attendance.component';

describe('PTeamManagementAttendanceComponent', () => {
  let component: PTeamManagementAttendanceComponent;
  let fixture: ComponentFixture<PTeamManagementAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
