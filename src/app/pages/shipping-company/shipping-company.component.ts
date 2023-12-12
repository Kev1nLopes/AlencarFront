import { Component, OnInit } from '@angular/core';
import { ShippingCompany } from 'src/app/services/types/shippingCompany'; // Certifique-se de importar o tipo de transporte
import { CompanyService } from 'src/app/services/company.service'; // Certifique-se de importar o serviço de empresas de transporte
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrls: ['./shipping-company.component.scss'],
  providers: [MessageService]
})
export class ShippingCompanyComponent implements OnInit {

  public companies: ShippingCompany[] = [];
  public showDialog = false;
  public form: FormGroup;



  ngOnInit(): void {
    console.log('Iniciando componente de empresas de transporte');

    this.company.getAll().subscribe({
      next: (data) => {
        this.companies = data;
      },
      error: (error) => {
        console.error('Erro ao carregar empresas de transporte:', error);
        alert('Erro ao carregar empresas de transporte. Por favor, tente novamente.');
      }
    }

    );
  }

  constructor(private company: CompanyService, private message: MessageService, private fb: FormBuilder) {
    this.form = this.initForm();
  }

  getAllVehicle(){
    this.company.getAll().subscribe({
      next: (data)=> {
        console.log(data);
        this.companies = data;

      }, 
      error: () => {
        this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel coletar as Transportadora, tente novamente mais tarde'});
      }
    });
  }


  createNewCompany(){
    try{ 
      let value = this.form.getRawValue();
      console.log(value);
      this.company.create(value).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Transportadora cadastrada com sucesso'});
        this.getAllVehicle();
      });
    }catch(err){
      console.log(err);
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar a Transportadora, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
    
  }

  desactiveCompany(product: any){
    try{
      
      this.company.desactivate(product).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Veiculo desativado com sucesso'});
        this.getAllVehicle();
      });
    }catch(err){
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel desativar o veiculo, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      active: true,
    })
  }


}
