import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music/music.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album.routing.module';
import { ArtistService } from './../artist/artist.service';
import { AlbumService } from './album.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlbumRoutingModule
  ],
  declarations: [
    MusicComponent,
    MusicFormComponent,
    AlbumComponent
  ],
  providers: [
    AlbumService,
    ArtistService
  ]
})
export class AlbumModule { }
