import { TestBed } from '@angular/core/testing';

import { LogininfoserviceService } from './logininfoservice.service';

describe('LogininfoserviceService', () => {
  let service: LogininfoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogininfoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
