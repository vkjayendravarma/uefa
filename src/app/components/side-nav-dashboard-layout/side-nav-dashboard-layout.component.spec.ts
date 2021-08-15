import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDashboardLayoutComponent } from './side-nav-dashboard-layout.component';

describe('SideNavDashboardLayoutComponent', () => {
  let component: SideNavDashboardLayoutComponent;
  let fixture: ComponentFixture<SideNavDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavDashboardLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
