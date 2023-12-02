import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';
import { Client } from 'src/app/services/types/client';
import { Product } from 'src/app/services/types/product';
import { Vehicle } from 'src/app/services/types/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-requests-form-dialog',
  templateUrl: './requests-form-dialog.component.html',
  styleUrls: ['./requests-form-dialog.component.scss']
})
export class RequestsFormDialogComponent {

  public requestForm: FormGroup;
  public produtos: Product[] = [];
  public clients: Client[] = [];
  public veiculos: Vehicle[] = [];


  constructor(
    private fb: FormBuilder,
    private product: ProductService,
    private client: ClientService,
    private vehicle: VehicleService,
    private request: RequestService,
    public dialogRef: MatDialogRef<RequestsFormDialogComponent>,
  ) {
    this.requestForm = this.requestInitialValues();
  }

  ngOnInit(): void {

    this.product.getAll().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
        alert('Erro ao carregar produtos. Por favor, tente novamente.');
      }
    );

    this.client.getAll().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Erro ao carregar os clientes:', error);
        alert('Erro ao carregar os clientes. Por favor, tente novamente.');
      }
    );

    this.vehicle.getAll().subscribe(
      (data) => {
        this.veiculos = data;
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
        alert('Erro ao carregar veículos. Por favor, tente novamente.');
      }
    );

  }

  private requestInitialValues() {
    return this.fb.group({
      amount: [0, [Validators.required]],
      client_id: [null, [Validators.required]],
      product_id: [null, [Validators.required]],
      vehicle_id: [null, [Validators.required]],
    });
  }



  createRequest() {
    this.request.create(this.requestForm.value).subscribe(result => { });
    this.dialogRef.close();
    this.requestForm.reset();
  }


  onClose(): void {
    this.dialogRef.close();
    this.requestForm.reset();
  }
}
