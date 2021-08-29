import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamManagementDocumentsComponent } from './f-team-management-documents.component';

describe('FTeamManagementDocumentsComponent', () => {
  let component: FTeamManagementDocumentsComponent;
  let fixture: ComponentFixture<FTeamManagementDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamManagementDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamManagementDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
