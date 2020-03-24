import { TestBed } from '@angular/core/testing';

import { ObservationMissionService } from './observation-mission.service';

describe('ObservationMissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservationMissionService = TestBed.get(ObservationMissionService);
    expect(service).toBeTruthy();
  });
});
