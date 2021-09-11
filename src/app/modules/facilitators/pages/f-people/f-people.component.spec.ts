import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeopleComponent } from './f-people.component';

describe('FPeopleComponent', () => {
  let component: FPeopleComponent;
  let fixture: ComponentFixture<FPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FPeopleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
