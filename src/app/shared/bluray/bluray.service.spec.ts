import { TestBed, inject } from '@angular/core/testing';

import { BlurayService } from './bluray.service';

describe('BlurayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlurayService]
    });
  });

  it('should be created', inject([BlurayService], (service: BlurayService) => {
    expect(service).toBeTruthy();
  }));
});
