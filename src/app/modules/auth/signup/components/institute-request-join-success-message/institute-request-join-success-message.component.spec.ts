import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteRequestJoinSuccessMessageComponent } from './institute-request-join-success-message.component';

describe('InstituteRequestJoinSuccessMessageComponent', () => {
  let component: InstituteRequestJoinSuccessMessageComponent;
  let fixture: ComponentFixture<InstituteRequestJoinSuccessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteRequestJoinSuccessMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteRequestJoinSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
