import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEmailTemplateComponent } from './f-email-template.component';

describe('FEmailTemplateComponent', () => {
  let component: FEmailTemplateComponent;
  let fixture: ComponentFixture<FEmailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEmailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
