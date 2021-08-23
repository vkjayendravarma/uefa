import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTournamentsDashboardComponent } from './f-tournaments-dashboard.component';

describe('FTournamentsDashboardComponent', () => {
  let component: FTournamentsDashboardComponent;
  let fixture: ComponentFixture<FTournamentsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTournamentsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTournamentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
