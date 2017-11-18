import { Injectable } from '@angular/core';

import { Artist } from './artist';

@Injectable()
export class ArtistService {

  private artists: Array<Artist> = [];

  getArtists() {
    return this.artists;
  }

  getArtistSearch(search: string): Array<Artist> {
    // tslint:disable-next-line:prefer-const
    let searchArtist: Array<Artist> = new Array();
    for (const daVez of this.artists) {
      if (daVez.name.match(search)) {
        searchArtist.push(daVez);
      }
    }
    return searchArtist;
  }

  getArtist(artist: string): Artist {
    let artistTemp: Artist;
    for (const item of this.artists) {
      // tslint:disable-next-line:triple-equals
      if (item.name == artist) {
        artistTemp = item;
      }
    }
    return artistTemp;
  }

  addArtist(artist: Artist) {
    if (artist.name.trim() === '' ) {
      alert('Nome ou Imagem inválido!');
    } else if (!this.verifyArtist(artist.name)) {
      if (artist.image.trim() === '') {
        artist.image = "http://www.salaovip.com.br/public/img/sem-imagem/sem-imagem-avatar.jpg";
      }
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
