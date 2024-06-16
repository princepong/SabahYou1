import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import galleryData from '../../assets/gallery-data.json';
@Component({
  selector: 'app-gallery-child',
  standalone: true,
  imports: [    CommonModule // Ensure CommonModule is imported
],
  templateUrl: './gallery-child.component.html',
  styleUrl: './gallery-child.component.scss'
})
export class GalleryChildComponent implements OnInit {
  seriesId: string | null = null;
  seriesData = galleryData;
 
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.seriesId = url[1].path;  // Assuming the URL structure is /home/series/:id
      this.loadSeriesContent(this.seriesId);
    });
  }

  loadSeriesContent(seriesId: string | null): void {
    // Implement logic to load different content based on seriesId
    console.log('Loading content for series:', seriesId);
    // You can use seriesId to fetch data or set variables to display different content
  }

  navigateToHome() {
    this.router.navigate(['/home']); // Navigate to the home route
  }

  
}
