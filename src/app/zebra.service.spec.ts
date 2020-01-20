import { TestBed } from '@angular/core/testing';

import { ZebraService } from './zebra.service';

describe('ZebraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZebraService = TestBed.get(ZebraService);
    expect(service).toBeTruthy();
  });
});
