import { Component } from '@angular/core';

import { Artist } from '../artist/artist';
import { Album } from '../album/album';
import { ArtistService } from './artist.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artists: Array<Artist>;

  constructor(private artistsService: ArtistService) {
    this.artists = this.artistsService.getArtists();
  }

}
