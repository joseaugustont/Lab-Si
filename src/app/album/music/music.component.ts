import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';
import { AlbumService } from './../album.service';
import { Music } from './music';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  id: string;
  inscricao: Subscription;
  musics: Array<Music>;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
    this.musics = albumService.getMusics(this.id);
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
