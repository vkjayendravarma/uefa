import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMembersElementComponent } from './team-members-element.component';

describe('TeamMembersElementComponent', () => {
  let component: TeamMembersElementComponent;
  let fixture: ComponentFixture<TeamMembersElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMembersElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMembersElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
