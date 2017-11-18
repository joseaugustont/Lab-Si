import { Injectable } from '@angular/core';

import { Album } from './album';
import { Music} from './music/music';

@Injectable()
export class PlaylistService {

 private playlists: Array<Album> = [];

 getPlaylist() {
   return this.playlists;
 }

 getMusics(id: string): Array<Music> {
  for (const item of this.playlists) {
    // tslint:disable-next-line:triple-equals
    if (item.name == id) {
      return item.musics;
    }
  }
}

 addPlaylist(music: Music, playlist: string) {
  if (this.existPlaylist(playlist)) {
    this.addMusica(music, playlist);
  } else {
    // tslint:disable-next-line:prefer-const
    let musicS: Array<Music> = [];
    musicS.push(music);
    this.playlists.push({name: playlist, artist: '', musics: musicS});
  }
}

private addMusica(music: Music, album: string) {
for (const item of this.playlists) {
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

private existPlaylist(name: string) {
// tslint:disable-next-line:no-inferrable-types
let exist: boolean = false;
for (const album of this.playlists) {
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
