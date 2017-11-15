import { ArtistService } from './../../artist/artist.service';
import { Component, OnInit } from '@angular/core';

import { Album } from './../album';
import { AlbumService } from './../album.service';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

  constructor(private albumService: AlbumService, private artistService: ArtistService) {
  }

  add(nameMusic: string, artist: string, nameAlbum: string, dateRelease: string, time: string) {
    if (this.artistService.verifyArtist(artist)) {
      this.albumService.addMusic(nameMusic, artist, nameAlbum, dateRelease, time);
    } else {
      alert ('Artista não existe!');
    }
  }


  ngOnInit() {
  }

}
