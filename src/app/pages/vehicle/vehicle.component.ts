import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/services/types/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service'; // Certifique-se de importar o serviço de veículos

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  public veiculos: Vehicle[] = [];

  ngOnInit(): void {
    console.log('Iniciando componente de veículos');

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

  constructor(private vehicle: VehicleService) {
  }

}
