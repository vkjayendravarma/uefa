import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTournamentsRegisterComponent } from './f-tournaments-register.component';

describe('FTournamentsRegisterComponent', () => {
  let component: FTournamentsRegisterComponent;
  let fixture: ComponentFixture<FTournamentsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTournamentsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTournamentsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
