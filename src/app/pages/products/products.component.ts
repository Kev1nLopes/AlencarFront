import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public listProducts: any;

  ngOnInit(): void {
    this.product.getAll().subscribe({
      next: (data) => {
        this.listProducts = data;
      },
      error: (err) =>  {
        console.log(err)
      },
      complete() {
          
      }, 
    })
  }



  constructor(private product: ProductService) {

    
  }

}
