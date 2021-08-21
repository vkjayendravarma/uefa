import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsGalaryViewComponent } from './teams-galary-view.component';

describe('TeamsGalaryViewComponent', () => {
  let component: TeamsGalaryViewComponent;
  let fixture: ComponentFixture<TeamsGalaryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsGalaryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsGalaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
