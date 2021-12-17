import { TestBed } from '@angular/core/testing';

import { MappaInitDataService } from './mappa-init-data.service';

describe('MappaInitDataService', () => {
  let service: MappaInitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MappaInitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
