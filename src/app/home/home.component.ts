import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { GalleryChildComponent } from '../gallery-child/gallery-child.component';
import { BadgeComponent } from '../badge/badge.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import galleryData from '../../assets/gallery-data.json';
import badgeData from '../../assets/badge-data.json';
import noteData from '../../assets/note-data.json';
import preparationData from '../../assets/preparation-data.json';
import langlnData from '../../assets/langln-data.json';
import hotelData from '../../assets/hotel-data.json';

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [GalleryComponent,GalleryChildComponent, BadgeComponent, NgFor,RouterModule, CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  galleryItems: any[] = [];
  badgeItems: any[] = [];
  noteItems: any[] = [];
  preparationItems: any[] = [];
  langlnItems: any[] = [];
  hotelItems: any[] = [];

  toggleGalleryVisibility:boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.galleryItems = galleryData;
    
    this.badgeItems = badgeData;
    this.noteItems = noteData;
    this.preparationItems = preparationData;
    this.langlnItems = langlnData;
    this.hotelItems = hotelData;
  }

  toggleVisibility(){
    this.toggleGalleryVisibility = false;
    console.log(`toggleGalleryVisibility: ${this.toggleGalleryVisibility}`);
  }

  onGalleryClicked(event: boolean) {
    console.log('Gallery clicked in child component:', event);
    // Implement logic to handle the event
  }

  navigateToSpecificParameter(specificParameter: string) {
    this.router.navigate(['home','series', specificParameter]);
    this.toggleVisibility();
  }
  navigateToSpecificParameterBadge(specificParameter: string) {
    this.router.navigate(['home','badges', specificParameter]);
    this.toggleVisibility();
  }
  navigateToSpecificParameterNote(specificParameter: string) {
    this.router.navigate(['home','notes', specificParameter]);
    this.toggleVisibility();
  }
  navigateToSpecificParameterPreparation(specificParameter: string) {
    this.router.navigate(['home','preparations', specificParameter]);
    this.toggleVisibility();
  }
  navigateToSpecificParameterLang(specificParameter: string) {
    this.router.navigate(['home','langs', specificParameter]);
    this.toggleVisibility();
  }
  navigateToSpecificParameterHotel(specificParameter: string) {
    this.router.navigate(['home','hotels', specificParameter]);
    this.toggleVisibility();
  }


}
