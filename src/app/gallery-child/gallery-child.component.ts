import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import galleryData from '../../assets/gallery-data.json';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-gallery-child',
  standalone: true,
  imports: [    CommonModule // Ensure CommonModule is imported
],
  templateUrl: './gallery-child.component.html',
  styleUrl: './gallery-child.component.scss'
})
export class GalleryChildComponent implements OnInit {
  seriesId: string = '';
  seriesData = galleryData;
  @Output() galleryClicked = new EventEmitter<boolean>();
 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.seriesId = url[1].path || '';  // Assuming the URL structure is /home/series/:id
      this.loadSeriesContent(this.seriesId);
    });
  }

  onGalleryClick() {
    this.galleryClicked.emit(true);
  }

  loadSeriesContent(seriesId: string): void {
    // Implement logic to load different content based on seriesId
    console.log('Loading content for series:', seriesId);
    // You can use seriesId to fetch data or set variables to display different content
  }

  navigateToHome() {
    this.router.navigate(['/']); // Navigate to the home route
  }

  
}
