import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToPlatformComponent } from './invite-to-platform.component';

describe('InviteToPlatformComponent', () => {
  let component: InviteToPlatformComponent;
  let fixture: ComponentFixture<InviteToPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteToPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteToPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
