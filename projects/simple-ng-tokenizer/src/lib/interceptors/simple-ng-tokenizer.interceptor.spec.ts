import { TestBed } from '@angular/core/testing';

import { SimpleNgTokenizerInterceptor } from './simple-ng-tokenizer.interceptor';

describe('SimpleNgTokenizerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SimpleNgTokenizerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SimpleNgTokenizerInterceptor = TestBed.inject(SimpleNgTokenizerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
