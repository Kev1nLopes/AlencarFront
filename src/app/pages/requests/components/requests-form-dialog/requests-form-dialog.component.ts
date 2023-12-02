import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-requests-form-dialog',
  templateUrl: './requests-form-dialog.component.html',
  styleUrls: ['./requests-form-dialog.component.scss']
})
export class RequestsFormDialogComponent {

  public requestForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RequestsFormDialogComponent>,
  ) {
    this.requestForm = this.requestInitialValues();
  }

  ngOnInit(): void {

  }

  private requestInitialValues() {
    return this.fb.group({
      amount: [0, [Validators.required]],
      client_id: [null, [Validators.required]],
      product_id: [null, [Validators.required]],
      vehicle_id: [null, [Validators.required]],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
