import { TestBed } from '@angular/core/testing';

import { AplicadorGuard } from './aplicador.guard';

describe('AplicadorGuard', () => {
  let guard: AplicadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AplicadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
