import { TestBed } from '@angular/core/testing';

import { ApiHelloService } from './api-hello.service';

describe('ApiHelloService', () => {
  let service: ApiHelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
