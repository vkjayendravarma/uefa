import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTabsViewComponent } from './post-tabs-view.component';

describe('PostTabsViewComponent', () => {
  let component: PostTabsViewComponent;
  let fixture: ComponentFixture<PostTabsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTabsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTabsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
