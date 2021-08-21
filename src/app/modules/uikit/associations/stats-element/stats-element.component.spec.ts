import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsElementComponent } from './stats-element.component';

describe('StatsElementComponent', () => {
  let component: StatsElementComponent;
  let fixture: ComponentFixture<StatsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
