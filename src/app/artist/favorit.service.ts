import { Injectable } from '@angular/core';

import { Artist } from './artist';

@Injectable()
export class FavoritService {

  private favorits: Array<Artist> = [];

  getFavorits() {
    return this.favorits;
  }

  addFavorit(artist: Artist) {
    if (!this.verifyArtist(artist.name)) {
      this.favorits.push(artist);
    }
  }

  removeFavorit(favorit: string) {
    for (let i = 0; i < this.favorits.length; i++ ) {
      // tslint:disable-next-line:triple-equals
      if (this.favorits[i].name == favorit) {
        this.favorits.slice(i, 1);
        break;
      }
    }
  }

  verifyArtist(artist: string): boolean {
    // tslint:disable-next-line:no-inferrable-types
    let exist: boolean = false;
    for (const i of this.favorits) {
      // tslint:disable-next-line:triple-equals
      if (i.name == artist) {
        exist = true;
      }
    }
    return exist;
  }

  constructor() { }

}
