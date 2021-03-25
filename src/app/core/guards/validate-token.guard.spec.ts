import { TestBed } from '@angular/core/testing';

import { ValidateTokenGuard } from './validate-token.guard';

describe('ValidateTokenGuard', () => {
  let guard: ValidateTokenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateTokenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
