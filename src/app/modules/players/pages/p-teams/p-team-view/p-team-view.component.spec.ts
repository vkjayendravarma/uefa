import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamViewComponent } from './p-team-view.component';

describe('PTeamViewComponent', () => {
  let component: PTeamViewComponent;
  let fixture: ComponentFixture<PTeamViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
