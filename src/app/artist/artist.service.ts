import { Injectable } from '@angular/core';

import { Artist } from './artist';

@Injectable()
export class ArtistService {

  private artists: Array<Artist> = [];

  getArtists() {
    return this.artists;
  }

  addArtist(artist: Artist) {
    if (artist.name.trim() === '' || artist.image.trim() === '') {
      alert('Nome ou Imagem inválido!');
    } else if (!this.verifyArtist(artist.name)) {
      this.artists.push(artist);
    } else {
      alert('Artista já existe!');
    }
  }

  verifyArtist(artist: string): boolean {
    // tslint:disable-next-line:no-inferrable-types
    let exist: boolean = false;
    for (const i of this.artists) {
      // tslint:disable-next-line:triple-equals
      if (i.name == artist) {
        exist = true;
      }
    }
    return exist;
  }


  constructor() { }

}
