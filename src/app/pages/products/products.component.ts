import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {

  public produtos: Product[] = [];

  public showDialog = false;
  public form: FormGroup

  constructor(private product: ProductService, private message: MessageService, private fb: FormBuilder) { 
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.getAllProducts();
 
  }

  getAllProducts(){
    this.product.getAll().subscribe({
      next: (data)=> {
        console.log(data);
        this.produtos = data;

      }, 
      error: () => {
        this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel coletar os clientes, tente novamente mais tarde'});
      }
    });
  }


  createNewClient(){
    try{
      console.log(this.form.getRawValue());
      this.product.create(this.form.getRawValue()).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Usuario cadastrado com sucesso'});
        this.getAllProducts();
      });
    }catch(err){
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar o cliente, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
    
  }

  desactiveProduct(product: any){
    try{
      
      this.product.desactive(product).subscribe(value => {
        this.message.add({severity: 'success', summary: 'Usuario deletado com sucesso'});
        this.produtos.slice(this.produtos.findIndex(it => it.id == product.id));
        this.getAllProducts();
      });
    }catch(err){
      this.message.add({severity: 'error', summary: 'Ops! Ocorreu um erro', detail: 'Nao foi possivel cadastrar o cliente, verifique os dados ou entre em contato com o suporte'});

    }finally{
      this.form.reset();
      this.showDialog = false;
    }
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      active: true
    })
  }

}
