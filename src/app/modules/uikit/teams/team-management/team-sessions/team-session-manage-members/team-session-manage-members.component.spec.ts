import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSessionManageMembersComponent } from './team-session-manage-members.component';

describe('TeamSessionManageMembersComponent', () => {
  let component: TeamSessionManageMembersComponent;
  let fixture: ComponentFixture<TeamSessionManageMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamSessionManageMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSessionManageMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
