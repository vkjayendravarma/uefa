import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeopleRequestsComponent } from './f-people-requests.component';

describe('FPeopleRequestsComponent', () => {
  let component: FPeopleRequestsComponent;
  let fixture: ComponentFixture<FPeopleRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPeopleRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeopleRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
