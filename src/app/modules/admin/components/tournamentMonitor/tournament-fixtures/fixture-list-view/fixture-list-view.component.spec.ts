import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureListViewComponent } from './fixture-list-view.component';

describe('FixtureListViewComponent', () => {
  let component: FixtureListViewComponent;
  let fixture: ComponentFixture<FixtureListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixtureListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtureListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
