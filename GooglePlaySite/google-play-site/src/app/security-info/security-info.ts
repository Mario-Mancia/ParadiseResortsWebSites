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
      width: '800px',
      height: '80vh',
      panelClass: 'custom-dialog-container'
    });
  }
}
