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

  ngAfterViewInit() {
    // Add an event listener to check scroll position on window scroll event
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  @ViewChild('blogHeaderContainerTitleOne') blogHeaderContainerTitleOne!: ElementRef;
  @ViewChild('blogHeaderContainerTitleTwo') blogHeaderContainerTitleTwo!: ElementRef;
  @ViewChild('blogHeaderContainerTitleThree') blogHeaderContainerTitleThree!: ElementRef;
  @ViewChild('blogHeaderContainerTitleFour') blogHeaderContainerTitleFour!: ElementRef;

  navigateToContactPage() {
  this.router.navigate(['/contact']);
}

checkScrollPosition() {
  const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
  console.log(`Current Y-axis scroll position: ${currentScrollY}`);
  // You can also perform other actions based on the scroll position
}

scrollToElement(elementRef: ElementRef) {
  if (elementRef) {
    elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' }); // first step
    setTimeout(() => {
      window.scrollTo({ top: 483, behavior: 'smooth' });
    }, 800); // Adjust the timeout as necessary
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


