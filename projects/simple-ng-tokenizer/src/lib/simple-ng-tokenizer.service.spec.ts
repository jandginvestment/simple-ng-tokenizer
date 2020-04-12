import { TestBed } from '@angular/core/testing';

import { SimpleNgTokenizerService } from './simple-ng-tokenizer.service';

describe('SimpleNgTokenizerService', () => {
  let service: SimpleNgTokenizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleNgTokenizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
