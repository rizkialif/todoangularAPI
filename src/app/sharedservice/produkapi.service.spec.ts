import { TestBed } from '@angular/core/testing';

import { ProdukapiService } from './produkapi.service';

describe('ProdukapiService', () => {
  let service: ProdukapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdukapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
