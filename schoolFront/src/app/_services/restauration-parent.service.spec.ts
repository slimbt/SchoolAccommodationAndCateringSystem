import { TestBed } from '@angular/core/testing';

import { RestaurationParentService } from './restauration-parent.service';

describe('RestaurationParentService', () => {
  let service: RestaurationParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurationParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
