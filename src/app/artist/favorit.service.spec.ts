import { TestBed, inject } from '@angular/core/testing';

import { FavoritService } from './favorit.service';

describe('FavoritService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritService]
    });
  });

  it('should be created', inject([FavoritService], (service: FavoritService) => {
    expect(service).toBeTruthy();
  }));
});
