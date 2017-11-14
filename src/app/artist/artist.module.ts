import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistComponent } from './artist.component';
import { ArtistService } from './artist.service';
import { ArtistRoutingModule } from './artist.routing.module';

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
    ArtistComponent
  ],
  providers: [ArtistService]
})
export class ArtistModule { }
