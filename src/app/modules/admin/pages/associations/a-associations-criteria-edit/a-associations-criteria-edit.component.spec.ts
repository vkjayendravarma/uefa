import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAssociationsCriteriaEditComponent } from './a-associations-criteria-edit.component';

describe('AAssociationsCriteriaEditComponent', () => {
  let component: AAssociationsCriteriaEditComponent;
  let fixture: ComponentFixture<AAssociationsCriteriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAssociationsCriteriaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAssociationsCriteriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
