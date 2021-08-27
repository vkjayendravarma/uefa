import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDocumentsComponent } from './team-documents.component';

describe('TeamDocumentsComponent', () => {
  let component: TeamDocumentsComponent;
  let fixture: ComponentFixture<TeamDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
