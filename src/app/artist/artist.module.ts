import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistComponent } from './artist.component';
import { ArtistService } from './artist.service';
import { ArtistRoutingModule } from './artist.routing.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { FavoritService } from './favorit.service';
import { FavoritsDetailComponent } from './favorits-detail/favorits-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArtistRoutingModule
  ],
  exports: [

  ],
  declarations: [
    ArtistFormComponent,
    ArtistComponent,
    ArtistDetailComponent,
    ArtistSearchComponent,
    FavoritsDetailComponent
  ],
  providers: [
    ArtistService,
    FavoritService
    ]
})
export class ArtistModule { }
