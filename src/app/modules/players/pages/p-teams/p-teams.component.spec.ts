import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTeamsComponent } from './p-teams.component';

describe('PTeamsComponent', () => {
  let component: PTeamsComponent;
  let fixture: ComponentFixture<PTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
