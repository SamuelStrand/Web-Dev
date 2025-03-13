import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ALBUMS } from '../fake-db';
import { Albums } from '../models';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  album!: Albums;
  loaded: boolean = false;
  constructor(private route: ActivatedRoute, private albumService: AlbumService){

  }
  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
      //this.album = ALBUMS.find((album) => album.id === albumId) as Albums;

    })

  }

}
