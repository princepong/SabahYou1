import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import badgeDate from '../../assets/badge-data.json';
import noteData from '../../assets/note-data.json';
import preparationData from '../../assets/preparation-data.json';
import langlnData from '../../assets/langln-data.json';
import hotelData from '../../assets/hotel-data.json';


@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  badgeSection: string = '';
  badgeTitle: string = '';

  badges = badgeDate;
  notes = noteData;
  preparations = preparationData;
  langs = langlnData;
  hotels = hotelData;

  constructor(private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log('URL:', url);
      this.badgeSection = url[0].path || '';  // Assuming the URL structure is /home/series/:id  
      this.badgeTitle = url[1].path || '';  // Assuming the URL structure is /home/series/:id   
    });
  }

  navigateToHome() {
    this.router.navigate(['/']); // Navigate to the home route
  }
}
