import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterLinkActive],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  [x: string]: any;
  constructor(private router: Router) {}
  @ViewChild('blogHeaderContainerTitleOne') blogHeaderContainerTitleOne!: ElementRef;
  @ViewChild('blogHeaderContainerTitleTwo') blogHeaderContainerTitleTwo!: ElementRef;
  @ViewChild('blogHeaderContainerTitleThree') blogHeaderContainerTitleThree!: ElementRef;
  @ViewChild('blogHeaderContainerTitleFour') blogHeaderContainerTitleFour!: ElementRef;

  navigateToContactPage() {
  this.router.navigate(['/contact']);
}

scrollToElement(elementRef: ElementRef) {
  if (elementRef) {
    elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('elementRef is not defined');
  }
}


scrollToOne() {
  this.scrollToElement(this.blogHeaderContainerTitleOne);
}
scrollToTwo() {
  this.scrollToElement(this.blogHeaderContainerTitleTwo);
}
scrollToThree() {
  this.scrollToElement(this.blogHeaderContainerTitleThree);
}
scrollToFour() {
  this.scrollToElement(this.blogHeaderContainerTitleFour);
}
}


