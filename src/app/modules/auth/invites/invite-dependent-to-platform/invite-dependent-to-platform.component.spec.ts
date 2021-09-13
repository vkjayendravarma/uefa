import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteDependentToPlatformComponent } from './invite-dependent-to-platform.component';

describe('InviteDependentToPlatformComponent', () => {
  let component: InviteDependentToPlatformComponent;
  let fixture: ComponentFixture<InviteDependentToPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteDependentToPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteDependentToPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
