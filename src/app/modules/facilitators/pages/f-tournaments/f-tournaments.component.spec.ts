import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTournamentsComponent } from './f-tournaments.component';

describe('FTournamentsComponent', () => {
  let component: FTournamentsComponent;
  let fixture: ComponentFixture<FTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTournamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
