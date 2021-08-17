import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsDashboardComponent } from './associations-dashboard.component';

describe('AssociationsDashboardComponent', () => {
  let component: AssociationsDashboardComponent;
  let fixture: ComponentFixture<AssociationsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
