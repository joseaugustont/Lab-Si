import { Component, OnInit } from '@angular/core';

import { Artist } from './../artist';
import { FavoritService } from './../favorit.service';

@Component({
  selector: 'app-favorits-detail',
  templateUrl: './favorits-detail.component.html',
  styleUrls: ['./favorits-detail.component.css']
})
export class FavoritsDetailComponent implements OnInit {

  favorits: Array<Artist>;

  constructor(private favoritService: FavoritService) {
    this.favorits = this.favoritService.getFavorits();
   }

  remove(artist: string) {
    this.favoritService.removeFavorit(artist);
  }

  ngOnInit() {
  }

}
