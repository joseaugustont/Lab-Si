import { Component, OnInit } from '@angular/core';

import { ArtistService } from './../artist.service';
import { Artist} from '../artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  artist: Artist = {name: '', image: ''};

  constructor(private artistsService: ArtistService) {
  }
  add() {
    const artist = Object.assign({}, this.artist);
    this.artistsService.addArtist(artist);
  }

  ngOnInit() {
  }

}
