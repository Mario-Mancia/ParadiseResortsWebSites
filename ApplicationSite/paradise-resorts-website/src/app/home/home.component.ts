import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   //constructor(private router: Router) {}

  images = [
  'assets/hotel_imagen1.jpg',
  'assets/hotel_imagen1.jpg',
  'assets/hotel_imagen2.jpg',
  'assets/hotelcolonial1.jpg',
  'assets/hotelcolonial2.jpg',
  'assets/hotelcolonial3.jpg',
  'assets/hotelmiramar1.jpg',
  'assets/hotelmiramar2.jpg',
  'assets/hotelmiramar3.jpg',
  'assets/hotelpacifico1.jpg',
  'assets/hotelpacifico2.jpg',
  'assets/hotelpacifico3.jpg',
  'assets/hotelvolcanes1.jpg',
  'assets/hotelvolcanes2.jpg',
  'assets/hotelvolcanes3.jpg',
];


  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  openLinkOfPlayStoreWebSite() {
    //this.router.navigateByUrl("")
    const urlExterna = 'https://play.google.com/store/apps/details?id=com.palaceresorts.app&pli=1';
    window.open(urlExterna, '_blank');
  }

}
