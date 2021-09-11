import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateInviteComponent } from './email-template-invite.component';

describe('EmailTemplateInviteComponent', () => {
  let component: EmailTemplateInviteComponent;
  let fixture: ComponentFixture<EmailTemplateInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTemplateInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTemplateInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
