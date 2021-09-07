import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCreateNewPostComponent } from './f-create-new-post.component';

describe('FCreateNewPostComponent', () => {
  let component: FCreateNewPostComponent;
  let fixture: ComponentFixture<FCreateNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FCreateNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FCreateNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
