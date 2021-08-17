import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryEventsViewComponent } from './single-category-events-view.component';

describe('SingleCategoryEventsViewComponent', () => {
  let component: SingleCategoryEventsViewComponent;
  let fixture: ComponentFixture<SingleCategoryEventsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCategoryEventsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryEventsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
