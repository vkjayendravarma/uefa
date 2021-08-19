import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureveysElementComponent } from './sureveys-element.component';

describe('SureveysElementComponent', () => {
  let component: SureveysElementComponent;
  let fixture: ComponentFixture<SureveysElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SureveysElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SureveysElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
