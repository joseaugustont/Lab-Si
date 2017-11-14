import { Component, OnInit } from '@angular/core';

import { ArtistService } from './../artist.service';
import { Artist} from '../artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  artists: Array<Artist>;
  artist: Artist = {name: '', image: ''};

  constructor(private artistsService: ArtistService) {
    this.artists = this.artistsService.artists;
  }

  ngOnInit() {
  }

  add() {
    const artist = Object.assign({}, this.artist);
    if (artist.name.trim() === '' || artist.image.trim() === '') {
      alert('Nome ou Imagem inválido!');
    } else if (!this.verifyName(artist.name)) {
      this.artists.push(artist);
    } else {
      alert('Artista já existe!');
    }
  }

  private verifyName(artist: string): boolean {
    let exist: boolean = false;
    for (let i of this.artists) {
      if (i.name == artist) {
        exist = true;
      }
    }
    return exist;
  }

}
