import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { Request, Status } from 'src/app/services/types/request';
import { RequestsFormDialogComponent } from './components/requests-form-dialog/requests-form-dialog.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  public requests: Request[] = [];

  constructor(
    private requestService: RequestService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log('Iniciando componente de solicitações');

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
}
