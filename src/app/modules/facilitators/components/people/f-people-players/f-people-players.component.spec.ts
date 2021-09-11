import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPeoplePlayersComponent } from './f-people-players.component';

describe('FPeoplePlayersComponent', () => {
  let component: FPeoplePlayersComponent;
  let fixture: ComponentFixture<FPeoplePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPeoplePlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPeoplePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
