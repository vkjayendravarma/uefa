import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesFlowComponent } from './matches-flow.component';

describe('MatchesFlowComponent', () => {
  let component: MatchesFlowComponent;
  let fixture: ComponentFixture<MatchesFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
