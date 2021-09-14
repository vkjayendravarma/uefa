import { TestBed } from '@angular/core/testing';

import { WithAuthGuard } from './with-auth.guard';

describe('WithAuthGuard', () => {
  let guard: WithAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WithAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
