import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { FavoritsDetailComponent } from './favorits-detail/favorits-detail.component';


const artistRoutes: Routes = [
  { path: '', component: ArtistComponent, children : [
    { path: 'new', component: ArtistFormComponent }
  ]},
  { path: 'artist', component: ArtistComponent, children : [
    { path: ':id', component: ArtistDetailComponent}
  ]},
  { path: 'search', component: ArtistSearchComponent, children: [
    {path: ':id', component: ArtistDetailComponent}
  ]},
  { path: 'favory', component: FavoritsDetailComponent, children: [
    {path: ':id', component: ArtistDetailComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forChild(artistRoutes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
