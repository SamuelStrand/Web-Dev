import { Component, OnInit } from '@angular/core';
import { Albums } from '../models';
import { ALBUMS } from '../fake-db';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  newAlbum: Albums;
  loaded: boolean = false;
  currentAlbum: Albums | null = null;

  constructor(private AlbumService: AlbumService){
    this.newAlbum = {
      id: 101,
      title: '',
      body: ''
    }
  }
  ngOnInit(): void {
    //this.albums = ALBUMS;
    this.getAlbums();
  }

  
  getAlbums(){
    this.loaded = false;
    this.AlbumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });

  }

  deleteAlbum(id: number){
    this.albums = this.albums.filter((p)=> p.id !== id);
    this.AlbumService.deleteAlbum(id).subscribe(()=>{
      console.log('deleted');
    })
  }

  addAlbum(){
    this.AlbumService.createAlbum(this.newAlbum).subscribe((album)=>{
        console.log(album);
        this.albums.push(album);
        alert('Album created succesfully!');
        this.newAlbum = {} as Albums;
    });
  }





  updateAlbum(): void {
    if (!this.currentAlbum) return; // Check if there is an album to update
  
    this.AlbumService.updateAlbum(this.currentAlbum.id, this.currentAlbum).subscribe((updatedAlbum) => {
      const index = this.albums.findIndex(a => a.id === updatedAlbum.id);
      if (index !== -1) {
        this.albums[index] = updatedAlbum; // Update the album in the list
      }
      this.currentAlbum = null; // Reset the currentAlbum
      alert('Album updated successfully!');
    });
}
}
