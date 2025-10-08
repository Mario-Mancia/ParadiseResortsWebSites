import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SecurityDialog } from '../security-dialog/security-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-security-info',
  imports: [
    MatIcon
  ],
  templateUrl: './security-info.html',
  styleUrl: './security-info.css'
})
export class SecurityInfo {

  constructor(private dialog: MatDialog ) {}
  openDialog() {
    this.dialog.open(SecurityDialog, {
      width: '90vw', 
      maxWidth: '100vw',
      height: '75vh',        // 🔽 Reducido de 85vh a 75vh
      maxHeight: '80vh',     // 🔽 Limita la altura
      panelClass: 'custom-dialog-container'
    });
  }
}
