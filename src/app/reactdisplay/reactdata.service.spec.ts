import { TestBed } from '@angular/core/testing';

import { ReactdataService } from './reactdata.service';

describe('ReactdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactdataService = TestBed.get(ReactdataService);
    expect(service).toBeTruthy();
  });
});
