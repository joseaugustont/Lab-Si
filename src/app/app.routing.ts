import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

const APP_ROUTES: Routes = [
  { path: 'artist', component: ArtistComponent},
  { path: 'album', component: AlbumComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
