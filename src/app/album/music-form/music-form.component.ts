import { ArtistService } from './../../artist/artist.service';
import { Component, OnInit } from '@angular/core';

import { Music } from './../music/music';
import { Album } from './../album';
import { Artist} from './../../artist/artist';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

  music: Music = {name: '', time: '', dateRelase: ''};
  album: Album = {name: '', artist: '', musics: []};
  albuns: Array<Album>;
  artists: Array<Artist>;

  constructor(private albumService: AlbumService, private artistService: ArtistService) {
    this.albuns = this.albumService.albuns;
    this.artists = this.artistService.artists;
  }

  add() {
    const music = Object.assign({}, this.music);
    const album = Object.assign({}, this.album);
    if ()
  }

  private verifyExistArtist(name: string) {
    let exist: boolean = false;
    for (let artist of this.artists) {
      if(artist.name == name) {
        exist = true;
        break;
      }
    }
    return exist;
  }

  private verifyFormat()

  ngOnInit() {
  }

}
