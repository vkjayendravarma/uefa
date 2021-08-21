import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsTabviewComponent } from './registrations-tabview.component';

describe('RegistrationsTabviewComponent', () => {
  let component: RegistrationsTabviewComponent;
  let fixture: ComponentFixture<RegistrationsTabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationsTabviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsTabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
