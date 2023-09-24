import { TestBed } from '@angular/core/testing';

import { ResultManagementService } from './result-management.service';

describe('ResultManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultManagementService = TestBed.get(ResultManagementService);
    expect(service).toBeTruthy();
  });
});
