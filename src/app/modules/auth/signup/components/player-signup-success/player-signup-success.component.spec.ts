import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSignupSuccessComponent } from './player-signup-success.component';

describe('PlayerSignupSuccessComponent', () => {
  let component: PlayerSignupSuccessComponent;
  let fixture: ComponentFixture<PlayerSignupSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSignupSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
