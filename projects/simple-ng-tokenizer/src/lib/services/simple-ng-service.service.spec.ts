import { TestBed } from '@angular/core/testing';

import { SimpleNgServiceService } from './simple-ng-service.service';

describe('SimpleNgServiceService', () => {
  let service: SimpleNgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
