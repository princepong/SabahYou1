import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import {YouTubePlayer} from '@angular/youtube-player';
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [RouterLinkActive, YouTubePlayer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  
  constructor(private router: Router) {}

  ngOnInit()
  {
    // const scriptTag = document.createElement('script');
    // scriptTag.src = "https://www.youtube.com/iframe_api";
    // document.body.appendChild(scriptTag);
  }

  ngAfterViewInit() {
    // Add an event listener to check scroll position on window scroll event
    // window.addEventListener('scroll', this.checkScrollPosition);
  }
  @ViewChild('containerTitle') containerTitle!: ElementRef;
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

scrollToWindowBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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


