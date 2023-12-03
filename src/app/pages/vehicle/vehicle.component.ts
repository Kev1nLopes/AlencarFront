import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CompanyService } from 'src/app/services/company.service';
import { ShippingCompany } from 'src/app/services/types/shippingCompany';
import { Vehicle } from 'src/app/services/types/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service'; // Certifique-se de importar o serviço de veículos

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  providers: [MessageService]
})
export class VehicleComponent implements OnInit {

  public veiculos: Vehicle[] = [];
  public shippingCompanies: ShippingCompany[] = [];
  public shippingCompaniesString: string[] = [];

  public showDialog = false;
  public form: FormGroup;

  constructor(private vehicle: VehicleService, private message: MessageService, private fb: FormBuilder, private shipping: CompanyService) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.getAllVehicle();
    this.getAllShipping();
 
  }

  getAllShipping(){
    this.shipping.getAll().subscribe({
      next: (data)=> {
        console.log(data);
        this.shippingCompanies = data;
        this.shippingCompaniesString = this.shippingCompanies.map(item => item.name);
        console.log(this.shippingCompaniesString)
      }, 
      error: () => {
        this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel coletar as companias, tente novamente mais tarde'});
      }
    });
  }

  getAllVehicle(){
    this.vehicle.getAll().subscribe({
      next: (data)=> {
        console.log(data);
        this.veiculos = data;

      }, 
      error: () => {
        this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel coletar os veiculos, tente novamente mais tarde'});
      }
    });
  }


  createNewVehicle(){
    try{ 
      let value = this.form.getRawValue();
      console.log(value);
      this.vehicle.create({
        plateNumber: value.plate,
        shippingCompanyId: value.shippingCompany.id,
        active: true,
      }).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Usuario cadastrado com sucesso'});
        this.getAllVehicle();
      });
    }catch(err){
      console.log(err);
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar o veiculo, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
    
  }

  desactiveVehicle(product: any){
    try{
      
      this.vehicle.desactive(product).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Veiculo desativado com sucesso'});
        this.veiculos.slice(this.veiculos.findIndex(it => it.id == product.id));
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
      plate: ['', [Validators.required, Validators.minLength(3)]],
      shippingCompany: ['', [Validators.required]],
      active: true,
    })
  }

 

}
