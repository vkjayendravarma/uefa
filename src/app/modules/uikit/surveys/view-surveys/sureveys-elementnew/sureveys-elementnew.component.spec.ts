import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureveysElementNewComponent } from './sureveys-elementnew.component';

describe('SureveysElementNewComponent', () => {
  let component: SureveysElementNewComponent;
  let fixture: ComponentFixture<SureveysElementNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SureveysElementNewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SureveysElementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
