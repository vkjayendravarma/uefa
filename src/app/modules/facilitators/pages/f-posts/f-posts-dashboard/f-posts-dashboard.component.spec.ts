import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPostsDashboardComponent } from './f-posts-dashboard.component';

describe('FPostsDashboardComponent', () => {
  let component: FPostsDashboardComponent;
  let fixture: ComponentFixture<FPostsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPostsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPostsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
