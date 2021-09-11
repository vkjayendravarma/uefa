import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeopleInviteesComponent } from './f-people-invitees.component';

describe('FPeopleInviteesComponent', () => {
  let component: FPeopleInviteesComponent;
  let fixture: ComponentFixture<FPeopleInviteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPeopleInviteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeopleInviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
