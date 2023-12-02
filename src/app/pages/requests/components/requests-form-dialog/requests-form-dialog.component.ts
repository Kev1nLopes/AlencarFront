import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-requests-form-dialog',
  templateUrl: './requests-form-dialog.component.html',
  styleUrls: ['./requests-form-dialog.component.scss']
})
export class RequestsFormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RequestsFormDialogComponent>,
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }
}
