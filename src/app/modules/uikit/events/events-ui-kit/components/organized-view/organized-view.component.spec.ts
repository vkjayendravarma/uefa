import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizedViewComponent } from './organized-view.component';

describe('OrganizedViewComponent', () => {
  let component: OrganizedViewComponent;
  let fixture: ComponentFixture<OrganizedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
