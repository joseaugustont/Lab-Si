import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicComponent } from './music/music.component';


const appRoutes: Routes = [
  { path: 'album', component: AlbumComponent},
  { path: 'album/:id', component: MusicComponent },
  { path: 'album/:id/new', component: MusicFormComponent }
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {}
