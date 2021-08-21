import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAssociationsCriteriaComponent } from './a-associations-criteria.component';

describe('AAssociationsCriteriaComponent', () => {
  let component: AAssociationsCriteriaComponent;
  let fixture: ComponentFixture<AAssociationsCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAssociationsCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAssociationsCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
