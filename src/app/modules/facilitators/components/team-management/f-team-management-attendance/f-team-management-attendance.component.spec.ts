import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementAttendanceComponent } from './f-team-management-attendance.component';

describe('FTeamManagementAttendanceComponent', () => {
  let component: FTeamManagementAttendanceComponent;
  let fixture: ComponentFixture<FTeamManagementAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
