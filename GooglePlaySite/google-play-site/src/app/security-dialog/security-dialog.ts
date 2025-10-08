import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-security-dialog',
  imports: [
    MatIcon,
    MatDialogModule
  ],
  templateUrl: './security-dialog.html',
  styleUrl: './security-dialog.css'
})
export class SecurityDialog {

}
