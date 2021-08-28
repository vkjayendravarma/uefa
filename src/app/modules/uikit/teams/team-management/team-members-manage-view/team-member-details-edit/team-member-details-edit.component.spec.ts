import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberDetailsEditComponent } from './team-member-details-edit.component';

describe('TeamMemberDetailsEditComponent', () => {
  let component: TeamMemberDetailsEditComponent;
  let fixture: ComponentFixture<TeamMemberDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
