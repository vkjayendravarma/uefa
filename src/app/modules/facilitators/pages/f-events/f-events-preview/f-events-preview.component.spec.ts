import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEventsPreviewComponent } from './f-events-preview.component';

describe('FEventsPreviewComponent', () => {
  let component: FEventsPreviewComponent;
  let fixture: ComponentFixture<FEventsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEventsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEventsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
