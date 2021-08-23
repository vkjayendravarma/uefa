import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesListViewComponent } from './fixtures-list-view.component';

describe('FixturesListViewComponent', () => {
  let component: FixturesListViewComponent;
  let fixture: ComponentFixture<FixturesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixturesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
