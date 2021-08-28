import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamMemberModelComponent } from './add-team-member-model.component';

describe('AddTeamMemberModelComponent', () => {
  let component: AddTeamMemberModelComponent;
  let fixture: ComponentFixture<AddTeamMemberModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeamMemberModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamMemberModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
