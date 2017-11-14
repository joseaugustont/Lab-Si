import { Injectable } from '@angular/core';

import { Artist } from './artist';

@Injectable()
export class ArtistService {

  artists: Array<Artist> = [];

  constructor() { }

}
