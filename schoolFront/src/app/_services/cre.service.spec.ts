import { TestBed } from '@angular/core/testing';

import { CreService } from './cre.service';

describe('CreService', () => {
  let service: CreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
