import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACreateNewPostComponent } from './a-create-new-post.component';

describe('ACreateNewPostComponent', () => {
  let component: ACreateNewPostComponent;
  let fixture: ComponentFixture<ACreateNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACreateNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ACreateNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
