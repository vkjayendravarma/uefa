import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTournamentsPreviewComponent } from './f-tournaments-preview.component';

describe('FTournamentsPreviewComponent', () => {
  let component: FTournamentsPreviewComponent;
  let fixture: ComponentFixture<FTournamentsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FTournamentsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FTournamentsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
