import { TestBed } from '@angular/core/testing';

import { MovietypeService } from './movietype.service';

describe('MovietypeserviecService', () => {
  let service: MovietypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovietypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
