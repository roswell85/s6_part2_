import { TestBed } from '@angular/core/testing';

import { CanActivatePagesGuard } from './can-activate-pages.guard';

describe('CanActivatePagesGuard', () => {
  let guard: CanActivatePagesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivatePagesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
