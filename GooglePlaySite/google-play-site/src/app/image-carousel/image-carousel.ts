import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel {

    @ViewChild('imageRow', { static: false }) imageRow!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.imageRow.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.imageRow.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }
}
