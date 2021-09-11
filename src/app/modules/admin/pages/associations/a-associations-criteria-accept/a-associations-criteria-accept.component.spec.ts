import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAssociationsCriteriaAcceptComponent } from './a-associations-criteria-accept.component';

describe('AAssociationsCriteriaAcceptComponent', () => {
  let component: AAssociationsCriteriaAcceptComponent;
  let fixture: ComponentFixture<AAssociationsCriteriaAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAssociationsCriteriaAcceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAssociationsCriteriaAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
