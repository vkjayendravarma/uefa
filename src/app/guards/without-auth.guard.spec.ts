import { TestBed } from '@angular/core/testing';

import { WithoutAuthGuard } from './without-auth.guard';

describe('WithoutAuthGuard', () => {
  let guard: WithoutAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithoutAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
