import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementSquadsComponent } from './p-team-management-squads.component';

describe('PTeamManagementSquadsComponent', () => {
  let component: PTeamManagementSquadsComponent;
  let fixture: ComponentFixture<PTeamManagementSquadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementSquadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementSquadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
