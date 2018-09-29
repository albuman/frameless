import { TestBed, inject } from '@angular/core/testing';

import { VideoTypesService } from './video-types.service';

describe('VideoTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoTypesService]
    });
  });

  it('should be created', inject([VideoTypesService], (service: VideoTypesService) => {
    expect(service).toBeTruthy();
  }));
});
