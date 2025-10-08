import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  openFormLink() {
    const urlExterna = 'https://forms.gle/Zy9G2k3erqq4gUzF9';
    window.open(urlExterna, '_blank');
  }
}
