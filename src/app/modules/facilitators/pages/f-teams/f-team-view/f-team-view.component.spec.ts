import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTeamViewComponent } from './f-team-view.component';

describe('FTeamViewComponent', () => {
  let component: FTeamViewComponent;
  let fixture: ComponentFixture<FTeamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTeamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
