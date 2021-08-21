import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FPostsComponent } from './f-posts.component';

describe('FPostsComponent', () => {
  let component: FPostsComponent;
  let fixture: ComponentFixture<FPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
