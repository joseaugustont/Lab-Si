// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArtistService } from './../artist.service';
import { AlbumService } from './../../album/album.service';
import { Artist } from './../artist';
import { Album } from './../../album/album';
import { FavoritService } from './../favorit.service';


@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  artist: Artist;
  albuns: Array<Album>;

  constructor(private route: ActivatedRoute, private artistService: ArtistService,
              private albumService: AlbumService, private favoritService: FavoritService) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.artist = this.artistService.getArtist(this.id);
        this.albuns = this.albumService.getAlbunsArtist(this.id);
      }
    );
  }

  setNote(note) {
    this.artist.note = note;
  }
  setEndMusic(endMusic) {
    this.artist.endMusic = endMusic;
  }
  addFavorit(favorit: Artist) {
    this.favoritService.addFavorit(favorit);
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
