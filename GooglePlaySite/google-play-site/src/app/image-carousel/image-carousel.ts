import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialog } from '../image-dialog/image-dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-carousel',
  imports: [CommonModule],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css'
})
export class ImageCarousel {

    @ViewChild('imageRow', { static: false }) imageRow!: ElementRef<HTMLDivElement>;

  images = [
    'images/ImageCarousel.png',
    'images/ImageCarousel2.png',
    'images/ImageCarousel3.png',
    'images/ImageCarousel4.png',
    'images/ImageCarousel5.png',
    'images/ImageCarousel6.png'
  ];

  constructor(private dialog: MatDialog) {}

  scrollLeft() {
    this.imageRow.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.imageRow.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  openImage(index: number) {
    this.dialog.open(ImageDialog, {
      panelClass: 'fullscreen-dialog',
      data: { images: this.images, index }
    });
  }
}
