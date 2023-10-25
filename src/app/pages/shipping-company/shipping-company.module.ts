import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShippingCompanyRoutes } from './shipping-company.routes';
import { ShippingCompanyComponent } from './shipping-company.component';



@NgModule({
  declarations: [
    ShippingCompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ShippingCompanyRoutes)
  ]
})
export class ShippingCompanyModule { }
