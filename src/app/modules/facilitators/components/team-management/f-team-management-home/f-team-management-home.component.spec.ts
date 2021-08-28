import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementHomeComponent } from './f-team-management-home.component';

describe('FTeamManagementHomeComponent', () => {
  let component: FTeamManagementHomeComponent;
  let fixture: ComponentFixture<FTeamManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
