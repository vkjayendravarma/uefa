import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTournamentsMonitorComponent } from './f-tournaments-monitor.component';

describe('FTournamentsMonitorComponent', () => {
  let component: FTournamentsMonitorComponent;
  let fixture: ComponentFixture<FTournamentsMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTournamentsMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTournamentsMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
