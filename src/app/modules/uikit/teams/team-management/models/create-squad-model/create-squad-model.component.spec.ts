import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSquadModelComponent } from './create-squad-model.component';

describe('CreateSquadModelComponent', () => {
  let component: CreateSquadModelComponent;
  let fixture: ComponentFixture<CreateSquadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSquadModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSquadModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
