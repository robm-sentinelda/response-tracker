import { TestBed } from '@angular/core/testing';

import { ResponseTypeService } from './responseType.service';

describe('responseTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseTypeService = TestBed.get(ResponseTypeService);
    expect(service).toBeTruthy();
  });
});
