import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsTableModelComponent } from './points-table-model.component';

describe('PointsTableModelComponent', () => {
  let component: PointsTableModelComponent;
  let fixture: ComponentFixture<PointsTableModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointsTableModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsTableModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
