import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialog } from '../info-dialog/info-dialog';

@Component({
  selector: 'app-app-info',
  imports: [
    MatIcon
  ],
  templateUrl: './app-info.html',
  styleUrl: './app-info.css'
})
export class AppInfo {

  constructor(private dialog: MatDialog) {

  }
  openDialog() {
    this.dialog.open(InfoDialog, {
      width: '90vw', 
      maxWidth: '100vw',
      height: '75vh',        // 🔽 Reducido de 85vh a 75vh
      maxHeight: '80vh',     // 🔽 Limita la altura
      panelClass: 'custom-info-dialog' 
    });
  }
}
