import { Component, OnInit } from '@angular/core';

import { Album} from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albuns: Array<Album>;

  constructor(private albumService: AlbumService) {
    this.albuns = this.albumService.getAlbuns();
   }

  ngOnInit() {
  }

}
