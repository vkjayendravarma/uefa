import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FEventsIndividualComponent } from './f-events-individual.component';

describe('FEventsIndividualComponent', () => {
  let component: FEventsIndividualComponent;
  let fixture: ComponentFixture<FEventsIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FEventsIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FEventsIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
