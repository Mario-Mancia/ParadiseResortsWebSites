import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info-dialog',
  imports: [
    MatDialogModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './info-dialog.html',
  styleUrl: './info-dialog.css'
})
export class InfoDialog {

}
