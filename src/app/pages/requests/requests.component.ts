import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClientService } from 'src/app/services/clients.service';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';
import { Client } from 'src/app/services/types/client';
import { Product } from 'src/app/services/types/product';
import { Request, Status } from 'src/app/services/types/request';
import { Vehicle } from 'src/app/services/types/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

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
  public form : FormGroup;

  constructor(private requestService: RequestService, private message: MessageService, private fb: FormBuilder, private client: ClientService, private vehicle: VehicleService, private product: ProductService) {
    this.form = this.initForm();
   }

  ngOnInit(): void {
    console.log('Iniciando componente de solicitações');
    this.getAllRequests();
    this.getAllVehicles();
    this.getAllClients();
    this.getAllProducts();

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

  getAllRequests(){
    this.requestService.getAll().subscribe(
      {
        next: (data) => {
          this.requests = data;
          console.log(this.requests)
        },
        error: (error) => {
          this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel desativar o veiculo, verifique os dados ou entre em contato com o suporte'});
        }
      }

    );
  }
  getAllVehicles(){
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
  getAllProducts(){
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

  getAllClients(){
    this.client.getAll().subscribe(
      {
        next: (data) => {
          this.clients = data;
        },
        error: (error) => {
         
        }
      });

  }

  createNewRequest(){
    try{ 
      let value = this.form.getRawValue();
      console.log(value);
      this.requestService.create({
        amount: parseFloat(value.amount),
        client_id: value.client.id,
        product_id: value.product.id,
        vehicle_id: value.vehicle.id,
      }).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Transportadora cadastrada com sucesso'});
        this.getAllRequests();
      });
    }catch(err){
      console.log(err);
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar a Transportadora, verifique os dados ou entre em contato com o suporte'});

    }finally{
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


  initForm():FormGroup{
    return this.fb.group({
      amount: [0, [Validators.required]],
      client: ['', [Validators.required]],
      product: ['', [Validators.required]],
      vehicle: ['', [Validators.required]],
      active: true,
    })
  }
}
