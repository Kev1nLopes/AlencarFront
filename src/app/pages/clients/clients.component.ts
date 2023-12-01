import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/clients.service';
import { Client } from 'src/app/services/types/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private client: ClientService) { }

  ngOnInit(): void {
    console.log('Iniciando componente de empresas de transporte');

    this.client.getAll().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error('Erro ao carregar os clientes:', error);
        alert('Erro ao carregar os clientes. Por favor, tente novamente.');
      }
    );
  }
}
