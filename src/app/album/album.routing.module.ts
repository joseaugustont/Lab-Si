import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicComponent } from './music/music.component';


const appRoutes: Routes = [
  { path: 'album', component: AlbumComponent, children : [
    { path: 'newAlbum', component: MusicFormComponent },
    { path: ':id', component: MusicComponent }
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
