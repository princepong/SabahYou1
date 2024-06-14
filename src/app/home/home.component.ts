import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { NgFor } from '@angular/common';
import galleryData from '../../assets/gallery-data.json';
import badgeData from '../../assets/badge-data.json';
import noteData from '../../assets/note-data.json';
import preparationData from '../../assets/preparation-data.json';
import langlnData from '../../assets/langln-data.json';
import hotelData from '../../assets/hotel-data.json';

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
  hotelItems: any[] = []

  filteredGalleryItems: any[] = []
  

  constructor(private router: Router, private route: ActivatedRoute) { 
    
  }
  ngOnInit(): void {
    this.galleryItems = galleryData;
    this.badgeItems = badgeData;
    this.noteItems = noteData;
    this.preparationItems = preparationData;
    this.langlnItems = langlnData;
    this.hotelItems = hotelData;


     // Retrieve the specificParameter value from the route
     this.route.paramMap.subscribe(params => {
      const specificParameter = params.get('specificParameter');

      // Filter the galleryItems array based on the specificParameter value
      this.filteredGalleryItems = this.galleryItems.filter(item => item.category === specificParameter);
    });

    
  }

  navigateToSpecificParameter(specificParameter: string) {
    this.router.navigate(['home', specificParameter], { relativeTo: this.route });
  }

  

}
