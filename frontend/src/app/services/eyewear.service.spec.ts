import { TestBed } from '@angular/core/testing';

import { EyewearService } from './eyewear.service';

describe('EyewearService', () => {
  let service: EyewearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EyewearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
