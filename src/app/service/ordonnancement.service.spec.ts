import { TestBed } from '@angular/core/testing';

import { OrdonnancementService } from './ordonnancement.service';

describe('OrdonnancementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdonnancementService = TestBed.get(OrdonnancementService);
    expect(service).toBeTruthy();
  });
});
