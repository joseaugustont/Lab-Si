import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';


const artistRoutes: Routes = [
  { path: '', component: ArtistComponent, children : [
    { path: 'new', component: ArtistFormComponent }
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(artistRoutes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {}
