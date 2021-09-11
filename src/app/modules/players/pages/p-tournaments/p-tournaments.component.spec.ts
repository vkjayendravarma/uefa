import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTournamentsComponent } from './p-tournaments.component';

describe('PTournamentsComponent', () => {
  let component: PTournamentsComponent;
  let fixture: ComponentFixture<PTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTournamentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
