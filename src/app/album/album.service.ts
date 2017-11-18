import { Injectable } from '@angular/core';

import { Album } from './album';
import { Music } from './music/music';

@Injectable()
export class AlbumService {

  private albuns: Array<Album> = [];

  getAlbuns(): Array<Album> {
    return this.albuns;
  }

  getAlbunsArtist(artist: string): Array<Album> {
    const album: Array<Album> = new Array();
    for (const item of this.albuns) {
      // tslint:disable-next-line:triple-equals
      if (item.artist == artist) {
        album.push(item);
      }
    }
    return album;
  }

  getMusics(id: string): Array<Music> {
    for (const item of this.albuns) {
      // tslint:disable-next-line:triple-equals
      if (item.name == id) {
        return item.musics;
      }
    }
  }

  addMusic(nameMusic: string, art: string, nameAlbum: string, dateR: string, tim: string) {
      if (this.existAlbum(nameAlbum)) {
        this.addMusica({name: nameMusic, dateRelase: dateR, time: tim}, nameAlbum);
      } else {
        const music: Music = {name: nameMusic, dateRelase: dateR, time: tim};
        const musicS: Array<Music> = new Array();
        musicS.push(music);
        this.albuns.push({name: nameAlbum, artist: art, musics: musicS});
      }
  }

  private addMusica(music: Music, album: string) {
    for (const item of this.albuns) {
      // tslint:disable-next-line:triple-equals
      if (item.name == album) {
        if (!this.existMusic(music.name, item.musics)) {
          item.musics.push(music);
        } else {
          alert ('Música já existe!');
        }
      }
    }
  }

  private existMusic(music: string, musics: Array<Music>) {
    // tslint:disable-next-line:no-inferrable-types
    let exist: boolean = false;
    for (const item of musics) {
      // tslint:disable-next-line:triple-equals
      if (item.name == music) {
        exist = true;
        break;
      }
    }
    return exist;
  }

  private existAlbum(name: string) {
    // tslint:disable-next-line:no-inferrable-types
    let exist: boolean = false;
    for (const album of this.albuns) {
      // tslint:disable-next-line:triple-equals
      if (album.name == name) {
        exist = true;
        break;
      }
    }
    return exist;
  }

  constructor() { }

}
