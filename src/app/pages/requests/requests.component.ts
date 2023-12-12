import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';
import { Client } from 'src/app/services/types/client';
import { Product } from 'src/app/services/types/product';
import { Request, Status } from 'src/app/services/types/request';
import { Vehicle } from 'src/app/services/types/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
import { ChangeStatusRequestDialogComponent } from './components/change-status-request-dialog/change-status-request-dialog.component';
import { RequestsFormDialogComponent } from './components/requests-form-dialog/requests-form-dialog.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  providers: [MessageService]
})
export class RequestsComponent implements OnInit {

  public requests: Request[] = [];
  public clients: Client[] = [];
  public vehicles: Vehicle[] = [];
  public products: Product[] = [];
  public showDialog = false;
  public form: FormGroup;
  public selectedStatus: Status | null = null;
  public filteredRequests: Request[] = [];
  public allStatus: Status[] = [
    Status.WAITING_FOR_PRODUCTION,
    Status.IN_PRODUCTION,
    Status.PRODUCED,
    Status.WAITING_VEHICLE,
    Status.IN_TRANSIT,
    Status.DELIVERED,
    Status.CANCELLED
  ];

  constructor(public dialog: MatDialog, private requestService: RequestService, private message: MessageService, private fb: FormBuilder, private client: ClientService, private vehicle: VehicleService, private product: ProductService) {
    this.form = this.initForm();
  }


  ngOnInit(): void {
    console.log('Iniciando componente de solicitações');
    this.getAllRequests();
    this.getAllVehicles();
    this.getAllClients();
    this.getAllProducts();

    this.loadRequests();
  }

  openNewRequestDialog(): void {
    const dialogRef = this.dialog.open(RequestsFormDialogComponent, {
      minWidth: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadRequests();
    });
  }

  openChangestatusRequestDialog(request_id: number): void {
    const dialogRef = this.dialog.open(ChangeStatusRequestDialogComponent, {
      minWidth: '600px',
      data: { request_id: request_id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllRequests();
    });
  }

  loadRequests(): void {
    this.requestService.getAll().subscribe(
      (data) => {
        this.requests = data;
      },
      (error) => {
        console.error('Erro ao carregar os pedidos:', error);
        alert('Erro ao carregar os pedidos. Por favor, tente novamente.');
      }
    );
  }

  getStatusName(status: Status): string {
    switch (status) {
      case Status.WAITING_FOR_PRODUCTION:
        return 'Aguardando Produção';
      case Status.IN_PRODUCTION:
        return 'Em Produção';
      case Status.PRODUCED:
        return 'Produzido';
      case Status.WAITING_VEHICLE:
        return 'Aguardando Veículo';
      case Status.IN_TRANSIT:
        return 'Em Trânsito';
      case Status.DELIVERED:
        return 'Entregue';
      case Status.CANCELLED:
        return 'Cancelado';
      default:
        return 'Desconhecido';
    }
  }

  getStatusChipClass(status: Status): string {
    switch (status) {
      case Status.WAITING_FOR_PRODUCTION:
        return 'bg-yellow-500 text-white py-1 px-2 rounded-full';
      case Status.IN_PRODUCTION:
        return 'bg-orange-500 text-white py-1 px-2 rounded-full';
      case Status.PRODUCED:
        return 'bg-green-500 text-white py-1 px-2 rounded-full';
      case Status.WAITING_VEHICLE:
        return 'bg-blue-500 text-white py-1 px-2 rounded-full';
      case Status.IN_TRANSIT:
        return 'bg-purple-500 text-white py-1 px-2 rounded-full';
      case Status.DELIVERED:
        return 'bg-teal-500 text-white py-1 px-2 rounded-full';
      case Status.CANCELLED:
        return 'bg-red-500 text-white py-1 px-2 rounded-full';
      default:
        return 'bg-gray-500 text-white py-1 px-2 rounded-full';
    }
  }

  getAllRequests() {
    this.requestService.getAll().subscribe(
      {
        next: (data) => {
          this.requests = data;
          console.log(this.requests)
        },
        error: (error) => {
          this.message.add({ severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel desativar o veiculo, verifique os dados ou entre em contato com o suporte' });
        }
      }

    );
  }
  getAllVehicles() {
    this.vehicle.getAll().subscribe(
      {
        next: (data) => {
          this.vehicles = data;
        },
        error: (error) => {

        }
      }

    );
  }
  getAllProducts() {
    this.product.getAll().subscribe(
      {
        next: (data) => {
          this.products = data;
        },
        error: (error) => {

        }
      }

    );

  }

  getAllClients() {
    this.client.getAll().subscribe(
      {
        next: (data) => {
          this.clients = data;
        },
        error: (error) => {

        }
      });

  }

  createNewRequest() {
    try {
      let value = this.form.getRawValue();
      console.log(value);
      this.requestService.create({
        amount: parseFloat(value.amount),
        client_id: value.client.id,
        product_id: value.product.id,
        vehicle_id: value.vehicle.id,
      }).subscribe(value => {
        this.message.add({ severity: 'success', summary: 'Transportadora cadastrada com sucesso' });
        this.getAllRequests();
      });
    } catch (err) {
      console.log(err);
      this.message.add({ severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar a Transportadora, verifique os dados ou entre em contato com o suporte' });

    } finally {
      this.form.reset();
      this.showDialog = false;
    }

  }

  // desactiveCompany(product: any){
  //   try{

  //     this.requestService.desactivate(product).subscribe(value => {
  //       this.message.add({severity: 'success', summary: 'Veiculo desativado com sucesso'});
  //       this.getAllVehicle();
  //     });
  //   }catch(err){
  //     this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel desativar o veiculo, verifique os dados ou entre em contato com o suporte'});

  //   }finally{
  //     this.form.reset();
  //     this.showDialog = false;
  //   }
  // }

  applyStatusFilter() {
    if (this.selectedStatus) {
      this.filteredRequests = this.requests.filter(request => request.status === this.selectedStatus);
    } else {
      this.filteredRequests = this.requests;
    }
  }




  initForm(): FormGroup {
    return this.fb.group({
      amount: [0, [Validators.required]],
      client: ['', [Validators.required]],
      product: ['', [Validators.required]],
      vehicle: ['', [Validators.required]],
      active: true,
    })
  }
}
