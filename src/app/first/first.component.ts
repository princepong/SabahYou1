import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  title = "Your Receipt";
  birthday = new Date();
  
}
