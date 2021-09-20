import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoachModalComponent } from './add-coach-modal.component';

describe('AddCoachModalComponent', () => {
  let component: AddCoachModalComponent;
  let fixture: ComponentFixture<AddCoachModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoachModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
