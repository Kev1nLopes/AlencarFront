import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShippingCompanyRoutes } from './shipping-company.routes';
import { ShippingCompanyComponent } from './shipping-company.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    ShippingCompanyComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    InputTextModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    ButtonModule,
    DialogModule,
    RouterModule.forChild(ShippingCompanyRoutes)
  ]
})
export class ShippingCompanyModule { }
