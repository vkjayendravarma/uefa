import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTournamentComponent } from './create-edit-tournament.component';

describe('CreateEditTournamentComponent', () => {
  let component: CreateEditTournamentComponent;
  let fixture: ComponentFixture<CreateEditTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
