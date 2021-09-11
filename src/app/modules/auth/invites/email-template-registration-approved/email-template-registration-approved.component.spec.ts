import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateRegistrationApprovedComponent } from './email-template-registration-approved.component';

describe('EmailTemplateRegistrationApprovedComponent', () => {
  let component: EmailTemplateRegistrationApprovedComponent;
  let fixture: ComponentFixture<EmailTemplateRegistrationApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTemplateRegistrationApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTemplateRegistrationApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
