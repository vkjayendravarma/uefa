import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteRequestJoinComponent } from './institute-request-join.component';

describe('InstituteRequestJoinComponent', () => {
  let component: InstituteRequestJoinComponent;
  let fixture: ComponentFixture<InstituteRequestJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteRequestJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteRequestJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
