import { TestBed } from '@angular/core/testing';

import { HebergementParentService } from './hebergement-parent.service';

describe('HebergementParentService', () => {
  let service: HebergementParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HebergementParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
