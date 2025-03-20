import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../album.service';
import { Albums } from '../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {

  album!: Albums;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;

      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateTitle(event: Event) {
    this.album.title = (event.target as HTMLInputElement).value;
  }

  updateBody(event: Event) {
    this.album.body = (event.target as HTMLTextAreaElement).value;
  }

  saveAlbum() {
    if (!this.album.title.trim()) {
      alert('Title cannot be empty!');
      return;
    }

    this.albumService.updateAlbum(this.album.id, this.album).subscribe(
      (updatedAlbum) => {
        console.log('Album updated:', updatedAlbum);
        alert('Album updated successfully!');
      },
      (error) => {
        console.error('Error updating album:', error);
        alert('Failed to update album.');
      }
    );
  }
}
