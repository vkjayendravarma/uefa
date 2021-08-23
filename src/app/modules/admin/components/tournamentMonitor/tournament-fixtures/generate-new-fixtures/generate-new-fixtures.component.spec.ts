import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNewFixturesComponent } from './generate-new-fixtures.component';

describe('GenerateNewFixturesComponent', () => {
  let component: GenerateNewFixturesComponent;
  let fixture: ComponentFixture<GenerateNewFixturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateNewFixturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNewFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
