import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaDetailsSuccessComponent } from './ra-details-success.component';

describe('RaDetailsSuccessComponent', () => {
  let component: RaDetailsSuccessComponent;
  let fixture: ComponentFixture<RaDetailsSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaDetailsSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaDetailsSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
