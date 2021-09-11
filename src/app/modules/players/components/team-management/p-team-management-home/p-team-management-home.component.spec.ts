import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementHomeComponent } from './p-team-management-home.component';

describe('PTeamManagementHomeComponent', () => {
  let component: PTeamManagementHomeComponent;
  let fixture: ComponentFixture<PTeamManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
