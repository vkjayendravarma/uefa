import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewEventModelComponent } from './create-new-event-model.component';

describe('CreateNewEventModelComponent', () => {
  let component: CreateNewEventModelComponent;
  let fixture: ComponentFixture<CreateNewEventModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewEventModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewEventModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
