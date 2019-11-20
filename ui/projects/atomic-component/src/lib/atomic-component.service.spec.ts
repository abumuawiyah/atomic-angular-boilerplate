import { TestBed } from '@angular/core/testing';

import { AtomicComponentService } from './atomic-component.service';

describe('AtomicComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtomicComponentService = TestBed.get(AtomicComponentService);
    expect(service).toBeTruthy();
  });
});
