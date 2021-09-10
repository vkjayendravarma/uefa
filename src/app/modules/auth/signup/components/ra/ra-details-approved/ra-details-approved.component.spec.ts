import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaDetailsApprovedComponent } from './ra-details-approved.component';

describe('RaDetailsApprovedComponent', () => {
  let component: RaDetailsApprovedComponent;
  let fixture: ComponentFixture<RaDetailsApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaDetailsApprovedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaDetailsApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
