import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementSquadsComponent } from './f-team-management-squads.component';

describe('FTeamManagementSquadsComponent', () => {
  let component: FTeamManagementSquadsComponent;
  let fixture: ComponentFixture<FTeamManagementSquadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementSquadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementSquadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
