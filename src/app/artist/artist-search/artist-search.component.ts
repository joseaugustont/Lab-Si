import { Component, OnInit } from '@angular/core';

import { FavoritService } from './../favorit.service';
import { ArtistService } from './../artist.service';
import { Artist} from './../artist';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  artists: Array<Artist>;

  constructor(private artistService: ArtistService, private favoritService: FavoritService) {
   }

  addFavorit(artist: Artist) {
    this.favoritService.addFavorit(artist);
  }


  getArtists(name: string) {
    this.artists = this.artistService.getArtistSearch(name);
    // tslint:disable-next-line:triple-equals
    if (this.artists.length == 0) {
      alert('Artistas não encontrados.');
    }
  }

  ngOnInit() {
  }

}
