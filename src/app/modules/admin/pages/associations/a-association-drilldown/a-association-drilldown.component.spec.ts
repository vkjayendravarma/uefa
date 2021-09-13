import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAssociationDrilldownComponent } from './a-association-drilldown.component';

describe('AAssociationDrilldownComponent', () => {
  let component: AAssociationDrilldownComponent;
  let fixture: ComponentFixture<AAssociationDrilldownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAssociationDrilldownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AAssociationDrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
