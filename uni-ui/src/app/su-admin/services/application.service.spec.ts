import { TestBed } from '@angular/core/testing';

import { ApplicationService } from './application.service';

describe('ApplicationServiceService', () => {
  let service: ApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
