import { TestBed } from '@angular/core/testing';

import { DataTransfertServiceService } from './data-transfert-service.service';

describe('DataTransfertServiceService', () => {
  let service: DataTransfertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransfertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
