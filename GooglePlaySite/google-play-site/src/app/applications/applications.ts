import { Component } from '@angular/core';
import { AppHeader } from '../app-header/app-header';
import { AppInfo } from '../app-info/app-info';
import { SecurityInfo } from '../security-info/security-info';
import { Changelog } from '../changelog/changelog';
import { ImageCarousel } from '../image-carousel/image-carousel';
import { MatIcon } from '@angular/material/icon';
import { Footer } from '../footer/footer';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-applications',
  imports: [
    MatIconModule,
    CommonModule,
    MatIcon,
    AppHeader,
    AppInfo,
    SecurityInfo,
    Changelog,
    ImageCarousel,
    Footer
  ],
  templateUrl: './applications.html',
  styleUrls: ['./applications.css']
})
export class Applications {
  supportExpanded = false;

  toggleSupport() {
    this.supportExpanded = !this.supportExpanded;
  }
}
