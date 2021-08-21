import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaCriteriaViewComponent } from './ra-criteria-view.component';

describe('RaCriteriaViewComponent', () => {
  let component: RaCriteriaViewComponent;
  let fixture: ComponentFixture<RaCriteriaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaCriteriaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaCriteriaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
