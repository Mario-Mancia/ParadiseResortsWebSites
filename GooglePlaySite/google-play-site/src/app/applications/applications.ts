import { Component } from '@angular/core';
import { AppHeader } from '../app-header/app-header';
import { AppInfo } from '../app-info/app-info';
import { SecurityInfo } from '../security-info/security-info';
import { Changelog } from '../changelog/changelog';
import { ImageCarousel } from '../image-carousel/image-carousel';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-applications',
  imports: [
    MatIcon,
    AppHeader,
    AppInfo,
    SecurityInfo,
    Changelog,
    ImageCarousel
  ],
  templateUrl: './applications.html',
  styleUrls: ['./applications.css']
})
export class Applications {

}
