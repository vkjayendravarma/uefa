import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsListViewComponent } from './stats-list-view.component';

describe('StatsListViewComponent', () => {
  let component: StatsListViewComponent;
  let fixture: ComponentFixture<StatsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
