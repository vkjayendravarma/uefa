import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeopleFacilitatorsComponent } from './f-people-facilitators.component';

describe('FPeopleFacilitatorsComponent', () => {
  let component: FPeopleFacilitatorsComponent;
  let fixture: ComponentFixture<FPeopleFacilitatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPeopleFacilitatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeopleFacilitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
