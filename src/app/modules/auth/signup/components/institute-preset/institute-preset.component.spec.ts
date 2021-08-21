import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePresetComponent } from './institute-preset.component';

describe('InstitutePresetComponent', () => {
  let component: InstitutePresetComponent;
  let fixture: ComponentFixture<InstitutePresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutePresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutePresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
