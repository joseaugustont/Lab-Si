import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music/music.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album.routing.module';
import { ArtistService } from './../artist/artist.service';
import { AlbumService } from './album.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistService } from './playlist.service';
import { PlaylistMusicComponent } from './playlist-music/playlist-music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlbumRoutingModule
  ],
  declarations: [
    MusicComponent,
    MusicFormComponent,
    AlbumComponent,
    PlaylistComponent,
    PlaylistMusicComponent
  ],
  providers: [
    AlbumService,
    ArtistService,
    PlaylistService
  ]
})
export class AlbumModule { }
