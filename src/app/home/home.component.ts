import { Component, Input, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { NgFor } from '@angular/common';
import galleryData from '../../assets/gallery-data.json';
import badgeData from '../../assets/badge-data.json';
import noteData from '../../assets/note-data.json';
import preparationData from '../../assets/preparation-data.json';
import langlnData from '../../assets/langln-data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleryComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

  galleryItems: any[] = []
  badgeItems: any[] = []
  noteItems: any[] = []
  preparationItems: any[] = []
  langlnItems: any[] = []
  

  constructor() { }
  ngOnInit(): void {
    this.galleryItems = galleryData;
    this.badgeItems = badgeData;
    this.noteItems = noteData;
    this.preparationItems = preparationData;
    this.langlnItems = langlnData;
  }

}
