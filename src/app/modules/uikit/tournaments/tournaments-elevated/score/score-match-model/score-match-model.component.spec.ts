import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMatchModelComponent } from './score-match-model.component';

describe('ScoreMatchModelComponent', () => {
  let component: ScoreMatchModelComponent;
  let fixture: ComponentFixture<ScoreMatchModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreMatchModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreMatchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
