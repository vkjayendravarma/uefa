import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSingleViewComponent } from './teams-single-view.component';

describe('TeamsSingleViewComponent', () => {
  let component: TeamsSingleViewComponent;
  let fixture: ComponentFixture<TeamsSingleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsSingleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
