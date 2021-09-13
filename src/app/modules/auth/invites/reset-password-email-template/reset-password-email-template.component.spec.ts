import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordEmailTemplateComponent } from './reset-password-email-template.component';

describe('ResetPasswordEmailTemplateComponent', () => {
  let component: ResetPasswordEmailTemplateComponent;
  let fixture: ComponentFixture<ResetPasswordEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordEmailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
