import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs/Rx';

import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from './../playlist.service';
import { Music } from './../music/music';

@Component({
  selector: 'app-playlist-music',
  templateUrl: './playlist-music.component.html',
  styleUrls: ['./playlist-music.component.css']
})
export class PlaylistMusicComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  musics: Array<Music>;

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.musics = playlistService.getMusics(this.id);
      }
    );
  }

  ngOnInit() {
  }

}
