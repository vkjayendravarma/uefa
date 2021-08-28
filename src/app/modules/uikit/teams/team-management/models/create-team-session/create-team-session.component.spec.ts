import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamSessionComponent } from './create-team-session.component';

describe('CreateTeamSessionComponent', () => {
  let component: CreateTeamSessionComponent;
  let fixture: ComponentFixture<CreateTeamSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTeamSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
