import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamManagementDocumentsComponent } from './p-team-management-documents.component';

describe('PTeamManagementDocumentsComponent', () => {
  let component: PTeamManagementDocumentsComponent;
  let fixture: ComponentFixture<PTeamManagementDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamManagementDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamManagementDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
