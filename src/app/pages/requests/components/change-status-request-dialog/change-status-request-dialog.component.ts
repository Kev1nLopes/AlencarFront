import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-change-status-request-dialog',
  templateUrl: './change-status-request-dialog.component.html',
  styleUrls: ['./change-status-request-dialog.component.scss']
})
export class ChangeStatusRequestDialogComponent {

  public statusForm: FormGroup;
  public statusOptions: { value: string; label: string }[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ChangeStatusRequestDialogComponent>,
    private request: RequestService,
    @Inject(MAT_DIALOG_DATA) public data: { request_id: number },
  ) {
    this.statusForm = this.fb.group({
      status: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.statusOptions = this.formatStatusOptions();
  }



  formatStatusOptions(): { value: string; label: string }[] {
    return [
      { value: 'WAITING_FOR_PRODUCTION', label: 'Aguardando Produção' },
      { value: 'IN_PRODUCTION', label: 'Em Produção' },
      { value: 'PRODUCED', label: 'Produzido' },
      { value: 'WAITING_VEHICLE', label: 'Aguardando Veículo' },
      { value: 'IN_TRANSIT', label: 'Em Trânsito' },
      { value: 'DELIVERED', label: 'Entregue' },
      { value: 'CANCELLED', label: 'Cancelado' },
    ];
  }

  changeStatus() {
    this.request.update(this.statusForm.value, this.data.request_id).subscribe(result => { });
    this.dialogRef.close();
    this.statusForm.reset();
  }


  onClose(): void {
    this.dialogRef.close();
    this.statusForm.reset();
  }


}
