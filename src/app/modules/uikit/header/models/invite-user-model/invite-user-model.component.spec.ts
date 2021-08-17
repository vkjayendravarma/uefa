import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUserModelComponent } from './invite-user-model.component';

describe('InviteUserModelComponent', () => {
  let component: InviteUserModelComponent;
  let fixture: ComponentFixture<InviteUserModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteUserModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUserModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
