import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsElementComponent } from './teams-element.component';

describe('TeamsElementComponent', () => {
  let component: TeamsElementComponent;
  let fixture: ComponentFixture<TeamsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
