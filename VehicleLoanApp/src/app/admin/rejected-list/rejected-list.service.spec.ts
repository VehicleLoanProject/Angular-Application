import { TestBed } from '@angular/core/testing';

import { RejectedListService } from './rejected-list.service';

describe('RejectedListService', () => {
  let service: RejectedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RejectedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
