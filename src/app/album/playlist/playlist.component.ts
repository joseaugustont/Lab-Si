import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../playlist.service';
import { Album } from '../album';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  playlists: Array<Album>;

  constructor(private playlistService: PlaylistService) {
    this.playlists = this.playlistService.getPlaylist();
   }

  add(nameM: string, nameP: string, dateR: string, time: string) {
    this.playlistService.addPlaylist({name: nameM, dateRelase: dateR, time: time}, nameP);
  }

  ngOnInit() {
  }

}
