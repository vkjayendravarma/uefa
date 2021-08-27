import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersManageViewComponent } from './team-members-manage-view.component';

describe('TeamMembersManageViewComponent', () => {
  let component: TeamMembersManageViewComponent;
  let fixture: ComponentFixture<TeamMembersManageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersManageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersManageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
