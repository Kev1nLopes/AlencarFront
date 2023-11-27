import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/services/types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public produtos: Product[] = [];

  ngOnInit(): void {
    console.log('Iniciando componente de produtos');

    this.product.getAll().subscribe(
      (data) => {
        this.produtos = data;
      },
      (error) => {
        console.error('Erro ao carregar produtos:', error);
        alert('Erro ao carregar produtos. Por favor, tente novamente.');
      }
    );
  }

  constructor(private product: ProductService) {
  }

}
