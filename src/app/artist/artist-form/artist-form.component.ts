import { Component, OnInit } from '@angular/core';

import { ArtistService } from './../artist.service';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  constructor(private artistsService: ArtistService) {
  }
  add(artist: string, img: string) {
    this.artistsService.addArtist({name: artist, image: img, note: '', endMusic: ''});
  }

  ngOnInit() {
  }

}
