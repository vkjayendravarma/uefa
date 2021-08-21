import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsReuestElementComponent } from './registrations-reuest-element.component';

describe('RegistrationsReuestElementComponent', () => {
  let component: RegistrationsReuestElementComponent;
  let fixture: ComponentFixture<RegistrationsReuestElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationsReuestElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsReuestElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
