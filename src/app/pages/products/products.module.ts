import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './products.routes';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes)
  ]
})
export class ProductsModule { }
