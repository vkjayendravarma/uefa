import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementMembersComponent } from './f-team-management-members.component';

describe('FTeamManagementMembersComponent', () => {
  let component: FTeamManagementMembersComponent;
  let fixture: ComponentFixture<FTeamManagementMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
