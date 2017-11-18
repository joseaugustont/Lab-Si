import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicComponent } from './music/music.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlaylistMusicComponent } from './playlist-music/playlist-music.component';


const appRoutes: Routes = [
  { path: 'album', component: AlbumComponent, children : [
    { path: 'newAlbum', component: MusicFormComponent },
    { path: ':id', component: MusicComponent }
  ]},
  { path: 'playlist', component: PlaylistComponent, children : [
    { path: ':id', component: PlaylistMusicComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
