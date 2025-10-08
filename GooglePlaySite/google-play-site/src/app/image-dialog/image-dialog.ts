import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-dialog',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './image-dialog.html',
  styleUrl: './image-dialog.css'
})
export class ImageDialog {

  images: string[];
  currentIndex: number;

  constructor(
    public dialogRef: MatDialogRef<ImageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { images: string[], index: number }
  ) {
    this.images = data.images;
    this.currentIndex = data.index;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
