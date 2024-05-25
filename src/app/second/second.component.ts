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
  constructor(private router: Router) {}
  @ViewChild('blogHeaderContainerTitleOne') blogHeaderContainerTitleOne!: ElementRef;
  @ViewChild('blogHeaderContainerTitleTwo') blogHeaderContainerTitleTwo!: ElementRef;
  @ViewChild('blogHeaderContainerTitleThree') blogHeaderContainerTitleThree!: ElementRef;
  @ViewChild('blogHeaderContainerTitleFour') blogHeaderContainerTitleFour!: ElementRef;

  navigateToContactPage() {
  this.router.navigate(['/contact']);
}

scrollToElement(elementRef: ElementRef) {

}

scrollToOne() {
  this.blogHeaderContainerTitleOne.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
scrollToTwo() {
  this.blogHeaderContainerTitleTwo.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
scrollToThree() {
  this.blogHeaderContainerTitleThree.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
scrollToFour() {
  this.blogHeaderContainerTitleFour.nativeElement.scrollIntoView({ behavior: 'smooth' });
}
}


