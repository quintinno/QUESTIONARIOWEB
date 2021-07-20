import { TestBed } from '@angular/core/testing';

import { PublicoAlvoGuard } from './publico-alvo.guard';

describe('PublicoAlvoGuard', () => {
  let guard: PublicoAlvoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicoAlvoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
