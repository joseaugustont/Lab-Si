import { Injectable } from '@angular/core';

import { Album } from './album';

@Injectable()
export class AlbumService {

  albuns: Array<Album> = [];

  constructor() { }

}
