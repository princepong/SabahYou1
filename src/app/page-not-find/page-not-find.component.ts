import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-not-find',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-not-find.component.html',
  styleUrl: './page-not-find.component.scss'
})
export class PageNotFindComponent {

}
