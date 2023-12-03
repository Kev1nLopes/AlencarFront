import { Component, OnInit } from '@angular/core';
import { ShippingCompany } from 'src/app/services/types/shippingCompany'; // Certifique-se de importar o tipo de transporte
import { CompanyService } from 'src/app/services/company.service'; // Certifique-se de importar o serviço de empresas de transporte
import { MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrls: ['./shipping-company.component.scss']
})
export class ShippingCompanyComponent implements OnInit {

  public companies: ShippingCompany[] = [];



  ngOnInit(): void {
    console.log('Iniciando componente de empresas de transporte');

    this.company.getAll().subscribe(
      (data) => {
        this.companies = data;
      },
      (error) => {
        console.error('Erro ao carregar empresas de transporte:', error);
        alert('Erro ao carregar empresas de transporte. Por favor, tente novamente.');
      }
    );
  }

  constructor(private company: CompanyService, private message: MessageService, private fb: FormBuilder) {
  }

}
